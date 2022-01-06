from scrapy import Spider, Request
from scrapy.crawler import CrawlerProcess
from scrapy.linkextractors.lxmlhtml import LxmlLinkExtractor
from scrapy_playwright.page import PageCoroutine
from scrapy.utils.response import open_in_browser


class MonestSpider(Spider):
    name = 'MonestSpider'

    def start_requests(self):
        urls = ['https://www.adidas.ca/en/clothing',]

        for url in urls:
            yield Request(url, callback=self.parse_list_page)

    def parse_list_page(self, response, **kwargs):
        #open_in_browser(response)
        link_extractor = LxmlLinkExtractor(restrict_css='a[data-auto-id=glass-hockeycard-link]')
        for link in link_extractor.extract_links(response):
            yield Request(link.url,
                          callback=self.parse_detail_page,
                          meta=dict(
                              playwright=True,
                              plawright_include_page=True,
                              playwright_page_coroutines=[
                                  PageCoroutine("wait_for_selector",
                                                "div[class*=sidebar-wrapper] h1[data-auto-id=product-title] span"),
                                  PageCoroutine("wait_for_selector",
                                                "div[class*=sidebar-wrapper] div[class*=product-price] div["
                                                "class*=gl-price-item]"),
                                  PageCoroutine("wait_for_selector", "div[data-auto-id=product-category] span"),
                                  PageCoroutine("wait_for_selector", "div#navigation-target-description p"),
                              ],
                          ))

    async def parse_detail_page(self, response):
        #open_in_browser(response)
        yield {
            'name': response.css('div[class*=sidebar-wrapper] h1[data-auto-id=product-title] span::text').get(),
            'price': response.css('div[class*=sidebar-wrapper] div[class*=product-price] div['
                                  'class*=gl-price-item]::text').get(),
            'category': response.css('div[data-auto-id=product-category] span::text').get(),
            'description': response.css('div#navigation-target-description p::text').get(),
        }

if __name__ == "__main__":
    process = CrawlerProcess(
        settings={
            "TWISTED_REACTOR": "twisted.internet.asyncioreactor.AsyncioSelectorReactor",
            "DOWNLOAD_HANDLERS": {
                "https": "scrapy_playwright.handler.ScrapyPlaywrightDownloadHandler",
                # "http": "scrapy_playwright.handler.ScrapyPlaywrightDownloadHandler",
            },
        }
    )
    process.crawl(MonestSpider)
    process.start()
