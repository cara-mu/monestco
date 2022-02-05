# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html


# useful for handling different item types with a single interface
from itemadapter import ItemAdapter
import os
import django
from asgiref.sync import sync_to_async
from scrapy.exceptions import DropItem
os.environ.setdefault(
    'DJANGO_SETTINGS_MODULE', 'server_new.settings'
)
django.setup()
from recommendation.models import Product

class ValidationPipeline:
    """
    validate items from crawlers
    Drop incomplete item
    """
    def process_item(self, item, spider):
        adapter = ItemAdapter(item)
        if not adapter.get('title'):
            DropItem(f"Missing title in {item}")
        if not adapter.get('subtitle'):
            DropItem(f"Missing subtitle in {item}")
        if not adapter.get('price'):
            DropItem(f"Missing price in {item}")
        if not adapter.get('color'):
            DropItem(f"Missing color in {item}")
        if not adapter.get('photo'):
            DropItem(f"Missing photo in {item}")
        return item


def transform_price(value: str) -> float:
    """
    remove money signs in the price string
    convert to float
    :param value:
    :return:
    """
    v = value.strip('C$')
    return float(v)


class TransformPipeline:
    """
    data transformation
    """
    def process_item(self, item, spider):
        adapter = ItemAdapter(item)
        if adapter.get('price'):
            adapter['price'] = transform_price(adapter['price'])
        if adapter.get('company'):
            adapter['company'] = adapter['company'][0]
        if adapter.get('url'):
            adapter['url'] = adapter['url'][0]
        return item


class SaveDBPipeline:
    """
    Save data to database
    """
    async def process_item(self, item, spider):
        p = Product(name=item['company'],
                    title=item['title'],
                    sub_title=item['subtitle'],
                    price=item['price'],
                    color=item['color'],
                    url=item['url'],
                    photo=item['photo']
                    )

        await sync_to_async(p.save)()
        return item