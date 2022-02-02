# Define here the models for your scraped items
#
# See documentation in:
# https://docs.scrapy.org/en/latest/topics/items.html

import scrapy


class CrawlerItem(scrapy.Item):
    # define the fields for your item here like:
    # name = scrapy.Field()
    pass


class Product(scrapy.Item):
    title = scrapy.Field()
    subtitle = scrapy.Field()
    price = scrapy.Field()
    color = scrapy.Field()
    description = scrapy.Field()
    url = scrapy.Field()
    photo = scrapy.Field()
