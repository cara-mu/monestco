from scrapy import Spider, Request
from scrapy.spiders import CrawlSpider, Rule
from scrapy.crawler import CrawlerProcess
from scrapy.linkextractors import LinkExtractor
from scrapy_playwright.page import PageCoroutine
from scrapy.utils.response import open_in_browser


Detail_Page_Rendering_Required = True

class MonestSpider(CrawlSpider):
    name = 'NikeSpider'
    start_urls = ['https://www.nike.com/ca/w/clothing-6ymx6',]

    Detail_Page_Rendering_Required = True

    rules = (
        # Extract Item detail pages
        Rule(LinkExtractor(restrict_css='a.product-card__link-overlay', ),
             callback='async_parse_detail_page',
             process_request='process_detail_request'),
    )


    async def async_parse_detail_page(self, response):
        yield {
            'title': response.css('div#RightRail h1#pdp_product_title::text').get(),
            'subtitle': response.css('div#RightRail h2::text').get(),
            'price': response.css('div#RightRail div[data-test=product-price]::text').get(),
            'description': response.css('div#RightRail div[class*=description] p::text').get(),
            'url': response.url,
            'photo': response.css('div[data-test=browseShell] button[data-sub-type=image] picture img::attr(src)').extract_first(),
        }

    def process_detail_request(self, request, response):
        #enble playwright rendering
        if Detail_Page_Rendering_Required:
            current_meta = request.meta
            current_meta |= dict(
                playwright=True,
                playwright_page_coroutines=[
                    PageCoroutine('wait_for_selector', 'div#navigation-target-description p'),
                ]
            )

        return request



if __name__ == "__main__":
    process = CrawlerProcess(
        settings={
            "TWISTED_REACTOR": "twisted.internet.asyncioreactor.AsyncioSelectorReactor",
            "DOWNLOAD_HANDLERS": {
                "https": "crawler.crawler.ScrapyPlaywrightDownloadHandlerEnhanced.ScrapyPlaywrightDownloadHandlerEnhanced",
                # "http": "scrapy_playwright.handler.ScrapyPlaywrightDownloadHandler",
            },
            'PLAYWRIGHT_DEFAULT_NAVIGATION_TIMEOUT': 0,
        }
    )
    process.crawl(MonestSpider)
    process.start()
