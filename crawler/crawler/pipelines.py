# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
from itemadapter import ItemAdapter


class CrawlerPipeline:
    def process_item(self, item, spider):
        return item


class ValidationPipeline:
    """
    validate items from crawlers
    """
    def process_item(self, item, spider):


        return item


class TransformPipeline:
    """
    1. transform raw data into machine-learning ready data.
    2. Save data to database
    """
    def process_item(self, item, spider):
        return item