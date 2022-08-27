import requests
from recommendation.data_engine.API_utils.base_downloader import BaseDownloader
import django
import os
os.environ.setdefault(
    'DJANGO_SETTINGS_MODULE', 'server_new.settings'
)
django.setup()


class UniqloDownloader(BaseDownloader):
    """
    scraping downloader for Uniqlo
    """
    def __int__(self):
        """
        Initialization of UniqloDownloader
        """
        super().__init__(brand='Uniqlo',
                         base_url="https://www.uniqlo.com/",
                         cata_list_endpoint="https://www.uniqlo.com/ca/api/commerce/v3/en/products")

        self.logger.info(
            f'Initializing UniqloDownloader with total = {self.total}, cata_endpoint = {self.cata_list_endpoint},'
            f'  base = {self.base}, save = {self.save}')

        self.session.headers = {
            "cookie": "sn3t4d1n=A6mW8tuCAQAAtsPxrj7SqD4LIn989cfuRIciu9hWw7Vy5Byfq_SxuXM0t3IgAYI_2Muucm46wH8AAOfvAAAAAA|1|0|b67637cae0801e3a94e863bc1251176bf22e5a0c; _gcl_aw=GCL.1661547485.CjwKCAjw3qGYBhBSEiwAcnTRLkgYzvTVnkmpfdCiGSKnE3WUaFbLWJ-4Ek7fYbmcP-4qqNnXf52kHBoCy6YQAvD_BwE; _gcl_dc=GCL.1661547485.CjwKCAjw3qGYBhBSEiwAcnTRLkgYzvTVnkmpfdCiGSKnE3WUaFbLWJ-4Ek7fYbmcP-4qqNnXf52kHBoCy6YQAvD_BwE; _gcl_au=1.1.1520894476.1661547485; _gid=GA1.2.750257461.1661547486; _gac_UA-494938-154=1.1661547488.CjwKCAjw3qGYBhBSEiwAcnTRLkgYzvTVnkmpfdCiGSKnE3WUaFbLWJ-4Ek7fYbmcP-4qqNnXf52kHBoCy6YQAvD_BwE; "
                      "_abck=D22FBC3B03623E54747FBDF5487FBE96~0~YAAQVQ/QFyYCJ7eCAQAAyqXy2wjVhmPcXVovI8Tk1BIlKJxEzHJ82S7ensZI5inT7aTfGCrTKTONE7/2M7gfKdoHPCLP1US1M0f/epu7vDkZ1WwDGfsXnWr2xL1a3zB72JpV4RrEONF2lEoFWJ5vcVNZ4MtmY33Z7ckKK1+xCD9vXco15/OLtxd8TmR0uZaT47c5Vj98ayyE78cuYjK2HNBUODanuGAcyRD67eiI9G8BKmgph7Qkq/T6he1xsLpyr4m7w09Kl76HClWzYP4DQQmB3JD2WhbkhckPDGH3ar4UCHEXGWGAQJVtjIwM5o2lQUGlqdHF0Fi3/KGf3zIqPSastHChXhQESRfjqYij66A3nyNNLgYnraVySl08YDZItM3/EcA1hiEd1+or8d0mCiNTV6CI7Lkt~-1~||-1||~-1; _fbp=fb.1.1661547489792.188153463; __attentive_id=2a36b64d30a9402d85e63cad5ba9eb7d; "
                      "_attn_=eyJ1Ijoie1wiY29cIjoxNjYxNTQ3NDkwMDM3LFwidW9cIjoxNjYxNTQ3NDkwMDM3LFwibWFcIjoyMTkwMCxcImluXCI6ZmFsc2UsXCJ2YWxcIjpcIjJhMzZiNjRkMzBhOTQwMmQ4NWU2M2NhZDViYTllYjdkXCJ9In0=; __attentive_cco=1661547490101; _pin_unauth=dWlkPU1UZGlaREk1TmpBdE1USmtNQzAwWXpabExUbGtPRGt0TnpVeE9XTmlNR1JtTlRWbQ; __attentive_dv=1; akavpau_wwwca_uniqlo_com_ca_api_all_vp=1661547818~id=826ffa13c2ccb32be01c52718b27a4e8; BVBRANDID=aa077b57-caed-4557-943b-022dcd8dc13a; akavpau_wwwca_uniqlo_com_ca_all_vp=1661548242~id=51a03b2409a9a28d30a5b963da49496d; "
                      "ak_bmsc=A897D8427A4153F497EE8C8A7F2864DE~000000000000000000000000000000~YAAQVQ/QF5epN7eCAQAAdI/K3BANx1plfwYqX9XlzkCcEO6AUoQFOx3IZQB3Z9AYNS0yPyXD7y7fdxvh+E2RCSQErZFkZqel9zFJngGlrCel3s8sO6aL1SSAtWR42k7dUyVcV8DLBYIg4lEF92VuhuIOeMhugZR2M0XvqwFpfo6P2BhW+gCXS78F+KCwTK0+fbSnFUMJ/BrEF/B7/8VStmMEtCyqTSQp+cR6pvHTak/3cEQoCubrrRV+5yftqYD6rOALcCNv4a/rr7N+qfIUa/ZmRXyCeAdzUeC7Ku5k4B1pn8QeLmecAorEg7SL5pCuvZ/sPh1hf5lcjeZGtnuvbED8XTNZJDEIEaGcDVuC3+XpoGEtLEbrn8CtlccHhjuheYGWZ4NbtgWnJBg=; bm_sz=54EAF82FEF9B22FBD61619F371FA939F~YAAQVQ/QF5ipN7eCAQAAdI/K3BDhuu4FnHzEDcRK/BxKiE8cxVQI8WU0d9Dzlgtq6N7vTCpd+wXDD8MLRvjE2r7UKAkjQGND49dK2gzEO8Y6bZ5D+qXATQgcQD/NlFeR3PfvCKscc62QbghcuYzyvtDhPTZ0KuZtDxiNoLuJzmqnkx9aLCW+kkZGWontWkbI9pLzTOAFJ41QhbhVaHcQ1SkYnTQSHOJ/C+4NdZGUBbI7a9h8qQr3kckfQhCrIYcfFtVNegPXIdFIpY+1ZC5QMEvwY8TdtimPTscrQi2cJHSncae0WI4cERZ4AW2JOU9uaNVLPeJTC12ZgMk=~3752518~3289905; "
                      "_ga=GA1.2.2061857306.1661547486; _dc_gtm_UA-494938-154=1; _ga_MTN5RPD81K=GS1.1.1661561648.2.1.1661561652.0.0.0; __attentive_pv=1; "
                      "__attentive_ss_referrer='https://www.uniqlo.com/ca/en/men'; "
                      "RT='z=1&dm=www.uniqlo.com&si=dda98dc7-9b49-42fe-8277-4d63a9253187&ss=l7b6wcyx&sl=0&tt=0&bcn=%2F%2F68794911.akstat.io%2F&ld=861dt&nu=cldnau6&cl=135b'",
            "authority": "www.uniqlo.com",
            "scheme": "https",
            "accept-encoding": "gzip, deflate, br",
            "pragma": "no-cache",
            "cache-control": "no-cache",
            "sec-ch-ua": "'Not A;Brand';v='99', 'Chromium';v='98', 'Google Chrome';v='98'",
            "sec-ch-ua-mobile": "?0",
            "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.80 Safari/537.36",
            "accept": "application/json, text/javascript, */*; q=0.01",
            "x-requested-with": "XMLHttpRequest",
            "sec-ch-ua-platform": "'macOS'",
            "sec-fetch-site": "same-origin",
            "sec-fetch-mode": "cors",
            "sec-fetch-dest": "empty",
            "accept-language": "en,zh-CN;q=0.9,zh;q=0.8"
        }

    def get_total_items(self):
        """
        update total according to actual API results
        :return:
        """
        res = self.get_category_list(self.offset, self.page_size)
        self.total = res['result']['pagination']['total']
        self.logger.info(f"update total to {self.total}")

    def get_category_list(self, offset, page_size):
        """
        Get category list dataa
        :param offset:
        :param page_size:
        :return:
        """
        querystring = {"offset": f"{offset}",
                       "limit": f"{page_size}"}

        req = requests.Request('GET', self.cata_list_endpoint, data="", params=querystring)
        prepped = self.session.prepare_request(req)
        try:
            resp = self.session.send(prepped)
            resp.raise_for_status()
            return resp.json()
        except requests.exceptions.HTTPError as e:
            self.logger.info(e)
            return []

    def run(self):
        """
        run the downloader.
        :return:
        """
        self.get_total_items()
        self.update_all_items()


if __name__ == "__main__":
    downloader = UniqloDownloader()
    downloader.get_total_items()
