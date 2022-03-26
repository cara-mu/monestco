from scrapy_playwright.handler import ScrapyPlaywrightDownloadHandler
from scrapy.crawler import Crawler

# Two issues found in the scrapyplaywright
# 1. Bug: can not set DEFAULT_NAVIGATION_TIMEOUT to 0
# 2. Improvement:  when a request is not required to use playwright(not playwright meta),
#       playwright browser still launches


class ScrapyPlaywrightDownloadHandlerEnhanced(ScrapyPlaywrightDownloadHandler):

    def __init__(self, crawler: Crawler) -> None:
        super().__init__(crawler)
        self.default_navigation_timeout = crawler.settings.getint("PLAYWRIGHT_DEFAULT_NAVIGATION_TIMEOUT", None)
