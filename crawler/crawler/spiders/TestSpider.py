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

    url ='https://www.adidas.ca/en/adicolor-classics-3-stripes-tee/HE9545.html'

    def start_requests(self):
        yield Request(TestSpider.url,
                      self.parse,
                      meta=dict(
                            playwright=True,
                            playwright_page_coroutines=[
                                PageCoroutine('wait_for_selector', 'div#navigation-target-description p'),
                                ]
                         ))

    async def parse(self, response, **kwargs):
        yield {
            'name': response.css('div[class*=sidebar-wrapper] h1[data-auto-id=product-title] span::text').get(),
            'price': response.css('div[class*=sidebar-wrapper] div[class*=product-price] div['
                                  'class*=gl-price-item]::text').get(),
            'category': response.css('div[data-auto-id=product-category] span::text').get(),
            'color': response.css('div[data-auto-id=color-chooser] h5::text').getall()[1],
            'description': response.css('div#navigation-target-description p::text').get(),
            'url': response.url,
            'photo': response.css('section[data-auto-id=image-viewer] img::attr(src)').extract_first(),
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



