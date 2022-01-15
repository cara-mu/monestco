from scrapy import Spider, Request
from scrapy.spiders import CrawlSpider, Rule
from scrapy.crawler import CrawlerProcess
from scrapy.linkextractors import LinkExtractor
from scrapy_playwright.page import PageCoroutine


class TestSpider(Spider):
    """
    Test Spider to test selectors
    """
    name ='testSpider'

    url ='https://www.nike.com/ca/t/sportswear-fleece-hoodie-jXCxJd/DV8191-548'

    def start_requests(self):
        yield Request(TestSpider.url,
                      self.parse,
                      meta=dict(
                            playwright=True,
                            playwright_page_coroutines=[
                                PageCoroutine('wait_for_selector', 'div#RightRail div[class*=description] p'),
                                ]
                         ))

    async def parse(self, response, **kwargs):
        yield {
            'title': response.css('div#RightRail h1#pdp_product_title::text').get(),
            'subtitle': response.css('div#RightRail h2::text').get(),
            'price': response.css('div#RightRail div[data-test=product-price]::text').get(),
            'description': response.css('div#RightRail div[class*=description] p::text').get(),
            'url': response.url,
            'photo': response.css('div[data-test=browseShell] button[data-sub-type=image] picture img::attr(src)').extract_first(),
        }


if __name__ == "__main__":
    process = CrawlerProcess(
        settings={
            "TWISTED_REACTOR": "twisted.internet.asyncioreactor.AsyncioSelectorReactor",
            "DOWNLOAD_HANDLERS": {
                "https": "scrapy_playwright.handler.ScrapyPlaywrightDownloadHandler",
                # "http": "scrapy_playwright.handler.ScrapyPlaywrightDownloadHandler",
            },
            'PLAYWRIGHT_DEFAULT_NAVIGATION_TIMEOUT': 60000,
        }
    )
    process.crawl(TestSpider)
    process.start()



