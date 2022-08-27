from django_extensions.management.jobs import BaseJob
from ...data_engine.API_utils.HM_Downloader import HMDownloader


class Job(BaseJob):
    help = "My sample job."

    def execute(self):
        # executing empty sample job
        downloader = HMDownloader()
        downloader.run()