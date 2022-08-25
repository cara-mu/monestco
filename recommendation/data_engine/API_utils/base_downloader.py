import requests
import django
import os
os.environ.setdefault(
    'DJANGO_SETTINGS_MODULE', 'server_new.settings'
)
django.setup()
from recommendation.models import Product
from django.core import serializers
import logging
logFormatter = logging.Formatter("%(asctime)s [%(threadName)-12.12s] [%(levelname)-5.5s]  %(message)s")

#fileHandler = logging.FileHandler("{0}/{1}.log".format(logPath, fileName))
#fileHandler.setFormatter(logFormatter)
#logger.addHandler(fileHandler)


class BaseDownloader:
    """
    Base downloader for all API based downloaders
    """

    def __init__(self, brand, base_url, cata_list_endpoint, offset=0, page_size=36, save='DB'):
        """
        Initialize downloader
        :param total:  total items to download
        :param endpoint:  API endpoint
        :param method:  HTTP method to query catalog list
        :param base:    base domain
        :param save:    media used to save:  DB, or File
        """

        # initialize brand name, base_url, catalog_list url
        self.brand = brand
        self.base = base_url
        self.cata_list_endpoint = cata_list_endpoint

        # some default setting for paganization
        self.total = 100
        self.offset = offset
        self.page_size = page_size

        # Save method
        self.save = save

        # logging setting
        self.logger = logging.getLogger('data_engine')
        self.logger.setLevel(logging.DEBUG)
        consoleHandler = logging.StreamHandler()
        consoleHandler.setFormatter(logFormatter)
        self.logger.addHandler(consoleHandler)

        # http session,  subclasses should add http headers accordingly
        self.session = requests.session()

    def get_total_items(self):
        """
        get the real total count of items to download
        :return:
        """
        pass

    def generate_id(self, value: str) -> str:
        """
        generate unique id for item to store in the database
        basic formula:
            brancode_productid
        :param value:
        :return:
        """
        return self.brand + '_' + value

    def update_all_items(self):
        """
        download and update product items
        :return:
        """
        pass

    def creat_product_model(self, data):
        """
        creat Product model object through data
        Mapping from Json response to Django model object
        :return:
        """
        pass

    def create_or_update(self, products):
        """
        create or update products in database or file, depending on configuration
        TBD: update part
        :param products:
        :return:
        """
        if not products or len(products) == 0:
            self.logger.error("input is none of length or input is zero")
            return

        if self.save == 'DB':
            Product.objects.bulk_update_or_create(products,
                                                  update_fields=['title', 'category', 'price', 'color', 'descr',
                                                                 'url', 'image'],
                                                  match_field='id')
            self.logger.info(f"{len(products)} items saved to database")
        elif self.save == 'File':
            with open("data.jsonl", "a") as out:
                JsonlSerializer = serializers.get_serializer('jsonl')
                jsonl_serializer = JsonlSerializer()
                jsonl_serializer.serialize(products, stream=out)
                self.logger.info(f"{len(products)} items saved to file")
        else:
            self.logger.error(f"invalid save type {self.save}")

    def run(self):
        pass
