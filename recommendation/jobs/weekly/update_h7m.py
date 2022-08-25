from django_extensions.management.jobs import BaseJob
from ...data_engine.API_utils.H_and_M import HMDownloader


class Job(BaseJob):
    help = "My sample job."

    def execute(self):
        # executing empty sample job
        hm = HMDownloader()
        hm.run()