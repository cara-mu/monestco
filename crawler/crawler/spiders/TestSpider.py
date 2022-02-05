from scrapy import Spider, Request
from scrapy.spiders import CrawlSpider, Rule
from scrapy.crawler import CrawlerProcess
from scrapy.linkextractors import LinkExtractor
from scrapy_playwright.page import PageCoroutine
from crawler.crawler.items import Product
from scrapy.loader import ItemLoader
from itemloaders.processors import TakeFirst, MapCompose, Join, Identity
from w3lib.html import remove_tags


class ProductLoader(ItemLoader):
    default_input_processor = MapCompose(remove_tags)
    default_output_processor = Join()

    company_in = Identity()
    company_out = Identity()

    url_in = Identity()
    url_out = Identity()

    photo_out = TakeFirst()


class TestSpider(Spider):
    """
    Test Spider to test selectors
    """
    name ='Test'

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
        l = ProductLoader(item=Product(), response=response)
        l.add_value('company', self.name)
        l.add_css('title', 'div[class*=sidebar-wrapper] h1[data-auto-id=product-title] span')
        l.add_css('subtitle', 'div[data-auto-id=product-category] span')
        l.add_css('price', 'div[class*=sidebar-wrapper] div[class*=product-price] div['
                           'class*=gl-price-item]')
        l.add_css('color', 'div[data-auto-id=color-chooser] h5::text')
        l.add_css('description', 'div#navigation-target-description p')
        l.add_value('url', response.url)
        l.add_css('photo', 'section[data-auto-id=image-viewer] img::attr(src)')
        return l.load_item()


if __name__ == "__main__":
    from crawler.crawler import settings
    settings_dict = {}
    for st in dir(settings):
        if st.startswith('_'):
            continue
        settings_dict[st] = getattr(settings, st)
    process = CrawlerProcess(settings=settings_dict)
    process.crawl(TestSpider)
    process.start()



