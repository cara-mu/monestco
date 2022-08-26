from datetime import datetime, timezone
import django
import os

os.environ.setdefault(
    'DJANGO_SETTINGS_MODULE', 'server_new.settings'
)
django.setup()
from recommendation.models import Product

from recommendation.data_engine.API_utils.base_downloader import BaseDownloader
import requests
import math


class HMDownloader(BaseDownloader):
    """
    HMDownloader to fetch all products' info for H&M utilizing H&M's API,
    which is the better and prefer way of getting data compared to conventional web scraping.
    The downloader will Creat or update database/file accordingly.
    """
    def __init__(self):
        """
        Initialize downloader
        """
        super().__init__(brand='H&M',
                         base_url="https://www2.hm.com",
                         cata_list_endpoint="https://www2.hm.com/en_ca/women/shop-by-product/view-all/_jcr_content/main/productlisting_30ab.display.json")
        self.logger.info(
            f'Initializing HMDownloader with total = {self.total}, cata_endpoint = {self.cata_list_endpoint},'
            f'  base = {self.base}, save = {self.save}')

        self.session.headers = {
            "cookie": "optimizelyEndUserId=4f0a7c68e021000062b8fe6110030000ef250600; akavpau_www2_asia2=1644083598~id=f4f400507662b1363f036bbf4a7751c7; dtCookie=-38$TFUKPF1CRC1GFV6SLCORHTCO5M77MAPU; rxVisitor=1644083301678UQFLHCOG6NJDBUT51SK62ISR80CA018I; INGRESSCOOKIE=1644083303.19.13358.179634|495c85ead688f15d9d2c89bdc8134031; hmid=40581F39-C403-4DA0-AE75-11C3ACE8DB98; agCookie=49e773e1-140a-40b3-a6a4-34bd630d432b; hm-singapore-favourites=""; _ga=GA1.2.140562555.1644083307; _gid=GA1.2.857038012.1644083307; akavpau_www2_sg=1644083627~id=ac5673116eaf590e730dac8d05316b38; OptanonAlertBoxClosed=2022-02-05T17:48:51.946Z; AMCVS_32B2238B555215F50A4C98A4%40AdobeOrg=1; s_ecid=MCMID%7C27744413334048190911206300944472209053; _gcl_au=1.1.639277521.1644083333; aamgasegs=segid%3D16792613%3B16792636%3B16995268%3B16995331%3B20439960%3B6494087%3B21544055%3B21544058; peseg=pseg%3D16995268; ogseg=ogsegs%3D16995268; _scid=fdc727a7-6c0e-4a20-8892-95251925444e; _fbp=fb.1.1644083333140.38375231; _sctr=1|1644037200000; _pin_unauth=dWlkPU1UZGlaREk1TmpBdE1USmtNQzAwWXpabExUbGtPRGt0TnpVeE9XTmlNR1JtTlRWbQ; akainst=AM; _abck=BB116B6C05FC58E3944142E189CF8E38~0~YAAQJcR7aI0uV7J+AQAAyEHuywd4S94NVyVtvpCKF054VQQsBkWcPlB9WQZATkee7ICmeqnZA4SCVdmQUeqoFKXuhDURADjXXNhyCqo79wR70KF3V779BqdVHTuWkpVJLvRrnm0u4bPSZT54X67UfvV28CV17lMipnAd/cFkT9JsQ+g6pdsPX1cx//XoopDa2/x1xueatn9qJqZB/SHccaTDLdQko8BhYZbdMC+/4uSqA7SOu9F28xwwSMis4ssDfzV3suELmD61ZqcoQyXKlohLNUwGuq5iUSg+0dUHgi2Aqis1Jn8HaXchVK+cgWIZHz0p7XWSzH3TTR+RCXIapRcrkgfsChnYUpb+upc8wtBgCVT1Y1+IKxkpXPkQ1bUs7pH/CK9ccTQJ5KOKY38zetc=~-1~-1~-1; bm_sz=1E0FA70EA16B71893701F141D5F7EFDF~YAAQJcR7aI8uV7J+AQAAyEHuyw6qEXnsK0PcDd7yuoNnUXWwzqEqcCzBddkY/7DpdtSkhG0yO99qYAECg1nXQMkO5+4bpLcYkfZIUJySv4mqqvpdM1qeDKh5Py3GP1uakeLmIVIoutWx6noXqNv1g6JFKHlcZpMdWZdbHY8cUYOHRMYk7fXG/7qKLEYGRFNulShi71DqAHObWDZJb3eNiPpPZJw2uQv6RkOMAqK0g7nrY5KDBj97lzu3Cq1Q4DKBn60yxRpVs5XfCMhbb8NqYA9B3+vh4/ZJcC32ohnMEQ==~4338753~3753011; ak_bmsc=7F601B053EDF016DB37A37834F001591~000000000000000000000000000000~YAAQJcR7aJIuV7J+AQAAX0ruyw5Snqnkc/nRxLYrWxMCRKYHfLA0ehBIbH4MkVkn2EQ+l34T8p8rad8FjiFo7ZRu7vqhfuRdhr+XJTjqAbk+npS4uRE7dUUDQ4L+MSJ7p0zn/pB0H+EpSiFozK1T38QPblLK4wG0ugp8R0PnnLmDpn5W5AJF3h6kinhUjM3HpLC8ICrSgy/WBg0ix0oNPNeJFQpVhX+rjR+d0muwY6ZC/0K2kN1uWQkER9TVWHqk1QAdiDfv4qv12xUqSAIQebB2ytdP9ruOG3qONqwnF7Add/PQI0iz2ji+A5SEeEoCVpI/S4cdn8nSHtPLHTEeFgulPJ2Kal2lngORx14uQ/H0ytYpFmTdVgOTyVSGayCSbvpTL7LXpjUzVqzarTurksPlG/kYkDa/8sTtinOwNgVhbPF9QYzv5ZNSnUwCGY3WLf8ll9XD/UvVRTAdovGofC3w0ZWGe2tHhQZLqNqnc6mvMgFhQWUH7A==; JSESSIONID=533C0E44031052AE54A23C85C58B35238849BD2BA65CC438587C44333284A5AF9634E67B0B58D45D051B3D48EEBA32219D9D8550717AB0C8083B638FBC4B1E84.hybris-ecm-web-76d8c59f8c-9zxmg; hm-canada-favourites=""; AMCV_32B2238B555215F50A4C98A4%40AdobeOrg=359503849%7CMCIDTS%7C19029%7CMCMID%7C27744413334048190911206300944472209053%7CMCAAMLH-1644703700%7C7%7CMCAAMB-1644703700%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1644106100s%7CNONE%7CMCAID%7CNONE%7CMCCIDH%7C-2070692433%7CvVersion%7C5.0.1; aemsegs=aem%3D17397484%3B16995268%3B18319002%3B6494087; aamoptsegs=aam%3D16995268%2Caam%3D6494087%2Caam%3D17397484%2Caam%3D18319002; userCookie=##eyJjYXJ0Q291bnQiOjB9##; _gat_GA_GLOBAL=1; _gat_GA_LOCAL=1; akavpau_www2_en_ca=1644099270~id=55df55fe5a96c78934ce01a1cb33ef9a; akamref=; dtSa=-; OptanonConsent=isGpcEnabled=0&datestamp=Sat+Feb+05+2022+17%3A09%3A35+GMT-0500+(Eastern+Standard+Time)&version=6.30.0&isIABGlobal=false&hosts=&consentId=881b4522-7a85-4d92-9701-b2fdecd2245b&interactionCount=1&landingPath=NotLandingPage&groups=C0001%3A1%2CC0002%3A1%2CC0003%3A1%2CC0004%3A1&geolocation=CA%3BON&AwaitingReconsent=false; "
                      "RT='z=1&dm=hm.com&si=4df31eba-7f2d-48a0-a422-2a510fc8b733&ss=kzae1mog&sl=4&tt=n4f&bcn=%2F%2F173bf10b.akstat.io%2F&ld=1dof';"
                      "_uetsid=22885af086d011ec92bb0124e35da91b; _uetvid=22891f2086d011ecb0e9ddd9a0ac8b79; utag_main=v_id:017ecb0055b70016bfd4c261ccea05078003507000bd0$_sn:2$_se:22$_ss:0$_st:1644100785506$c_consent:C0001%3A1%2CC0002%3A1%2CC0003%3A1%2CC0004%3A1$vapi_domain:hm.com$ses_id:1644098898926%3Bexp-session$_pn:4%3Bexp-session$cart_active:No%3Bexp-session$fld_qv:2%3Bexp-session$adf_qv:2%3Bexp-session; stc114913=env:1644098910%7C20220308220830%7C20220205223951%7C3%7C1044344:20230205220951|uid:1644083335693.452344087.4259424.114913.1810262028.:20230205220951|srchist:1044345%3A1%3A20220308174855%7C1044344%3A1644098910%3A20220308220830:20230205220951|tsa:0:20220205223951; bm_sv=D4F81E17F492561E6B559D012207A0D9~IwUZBANTHRt74+4eD5sKkpHgNHV/iOVALj3R0YP/Y2ReoWQGtevCsY5O9MVzBVbQ8TD0VGEcTopJMl0qY2xT3foae+2snqsr65/8MbSbwLsGKgN3A0jA4qf2CCReseBkhZriHxNciwHfY75XXfAlUQ==; dtLatC=1; rxvt=1644100800172|1644098896626; dtPC=-38$98971203_344h10vAKNAREKOAADEDTVPCKLVNOMGPUCUMASO-0e0",
            "authority": "www2.hm.com",
            "pragma": "no-cache",
            "cache-control": "no-cache",
            "sec-ch-ua": "'Not A;Brand';v='99', 'Chromium';v='98', 'Google Chrome';v='98'",
            "sec-ch-ua-mobile": "?0",
            "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36",
            "x-dtpc": "-38$98971203_344h10vAKNAREKOAADEDTVPCKLVNOMGPUCUMASO-0e0",
            "x-dtreferer": "https://www2.hm.com/en_ca/women/shop-by-product/view-all.html",
            "accept": "application/json, text/javascript, */*; q=0.01",
            "x-requested-with": "XMLHttpRequest",
            "sec-ch-ua-platform": "'macOS'",
            "sec-fetch-site": "same-origin",
            "sec-fetch-mode": "cors",
            "sec-fetch-dest": "empty",
            "referer": "https://www2.hm.com/en_ca/women/shop-by-product/view-all.html?sort=stock&image-size=small&image=model&offset=0&page-size=36",
            "accept-language": "en,zh-CN;q=0.9,zh;q=0.8"
        }

    def get_total_items(self):
        """
        update total according to actual API results
        :return:
        """
        res = self.get_category_list(self.offset, self.page_size)
        self.total = res['total']
        self.logger.info(f"update total to {self.total}")

    def get_category_list(self, offset, page_size):
        """
        Get category list dataa
        :param offset:
        :param page_size:
        :return:
        """
        querystring = {"sort": "stock", "image-size": "small", "image": "model", "offset": f"{offset}",
                       "page-size": f"{page_size}"}

        payload = ""

        req = requests.Request('GET', self.cata_list_endpoint, data=payload, params=querystring)
        prepped = self.session.prepare_request(req)
        try:
            resp = self.session.send(prepped)
            resp.raise_for_status()
            return resp.json()
        except requests.exceptions.HTTPError as e:
            self.logger.info(e)
            return []

    def get_product_detail(self, url):
        """
        TBD,
        description is not obtained  in category data
        :param url:
        :return:
        """
        pass

    @staticmethod
    def append_colors(colors):
        color = ''
        for item in colors:
            color += item['colorName']
            color += ','
        return color

    @staticmethod
    def transform_money(value: str) -> float:
        return float(value.strip('C$'))

    @staticmethod
    def transform_image(value: str) -> str:
        return value.strip('/')

    def creat_product_model(self, item):
        """
        construct Django model object
        :param item:
        :return:
        """
        return Product(id=self.generate_id(item['articleCode']),
                       title=item['title'],
                       category=item['category'],
                       price=self.transform_money(item['price']),
                       color=self.append_colors(item['swatches']),
                       url=self.base + item['link'],
                       image=self.transform_image(item['image'][0]['src']),
                       updated_at=datetime.now(timezone.utc).astimezone()
                       )

    def update_all_items(self):
        total_pages = math.ceil(self.total / self.page_size)
        self.logger.info(f"total page to download: {total_pages}")
        for i in range(total_pages):
            products = []
            res = self.get_category_list(i * self.page_size, self.page_size)
            for item in res['products']:
                # time.sleep(1)
                products.append(self.creat_product_model(item))
            self.logger.info(f"page #{i + 1} / {total_pages} finished downloading, {len(products)} item retrieved")
            self.create_or_update(products)

    def run(self):
        """
        run the downloader.
        TBD:  task scheduling capabilities
        :return:
        """
        self.get_total_items()
        self.update_all_items()


if __name__ == "__main__":
    hm = HMDownloader()
    hm.run()
