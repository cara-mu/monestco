from scrapy import Spider, Request
from scrapy.spiders import CrawlSpider, Rule
from scrapy.crawler import CrawlerProcess
from scrapy.linkextractors import LinkExtractor
from scrapy_playwright.page import PageCoroutine
from crawler.crawler.items import Product
from scrapy.loader import ItemLoader
from scrapy.utils.response import open_in_browser


class AdidasSpider(CrawlSpider):
    name = 'Adidas'
    start_urls = ['https://www.adidas.ca/en/clothing',]

    rules = (
        # following list pages of clothings
        Rule(LinkExtractor(allow=('clothing\?grid=true&start'))),
        # Extract Item detail pages
        Rule(LinkExtractor(restrict_css='a[data-auto-id=glass-hockeycard-link]', ),
             callback='async_parse_detail_page',
             process_request='process_detail_request')
    )

    @staticmethod
    async def async_parse_detail_page(response):
        # open_in_browser(response)
        l = ItemLoader(item=Product(), response=response)
        l.add_css('title', 'div[class*=sidebar-wrapper] h1[data-auto-id=product-title] span::text')
        l.add_css('subtitle', 'div[data-auto-id=product-category] span::text')
        l.add_css('price', 'div[class*=sidebar-wrapper] div[class*=product-price] div['
                           'class*=gl-price-item]::text')
        l.add_css('description', 'div#navigation-target-description p::text')
        l.add_value('url', response.url)
        l.add_css('photo', 'section[data-auto-id=image-viewer] img::attr(src)')
        return l.load_item()

    @staticmethod
    def process_detail_request(request, response):
        """
        update request meta to command use PageCoroutine event for request
        :param request:
        :param response:
        :return:
        """
        current_meta = request.meta
        current_meta |= dict(
            playwright=True,
            playwright_page_coroutines=[
                PageCoroutine('wait_for_selector', 'div#navigation-target-description p'),
            ]
        )

        return request



if __name__ == "__main__":
    from crawler.crawler import settings
    settings_dict = {}
    for st in dir(settings):
        if st.startswith('_'):
            continue
        settings_dict[st] = getattr(settings, st)
    process = CrawlerProcess(settings=settings_dict)
    process.crawl(AdidasSpider)
    process.start()
