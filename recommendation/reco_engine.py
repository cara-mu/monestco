import os
import django

os.environ.setdefault(
    'DJANGO_SETTINGS_MODULE', 'server_new.settings'
)
django.setup()
from recommendation.models import Product
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import pandas as pd

import logging

logFormatter = logging.Formatter(
    "%(asctime)s [%(name)s] [%(threadName)-12.12s] [%(funcName)s] [%(levelname)-5.5s]  %(message)s")
logger = logging.getLogger('reco_engine')
logger.setLevel(logging.DEBUG)

# fileHandler = logging.FileHandler("{0}/{1}.log".format(logPath, fileName))
# fileHandler.setFormatter(logFormatter)
# logger.addHandler(fileHandler)

consoleHandler = logging.StreamHandler()
consoleHandler.setFormatter(logFormatter)
logger.addHandler(consoleHandler)


class RecoEngine:
    """
    A content base recommendation engine
    Phase 1:  text cosine similarity
    Phase 2:  text similarity + ESG score from Monest
    Phase 3:  text similarity + ESG score +  image similarity

    Text vectorization algorithms:
        1. BoW(Bag of Words)
        2. TF-IDF
        3. Word2vec

    Image reco algorithm:
        Deep learning

    """

    def __init__(self, reco_target: Product, conditions: {}):
        """
        Initialize recommendation engine
        """
        self.corpus = None
        self.products = None
        self.text_token_matrix = None
        self.cs = None
        self.df = None
        # the target Product to run recommendation against
        self.reco_target = reco_target
        # filtering conditions used to determine training dateset for the model
        self.conditions = conditions
        self.vectorizer = CountVectorizer()
        logger.info('Reco engine started!')

    def filter_products(self):
        """
        Placeholder,  should apply actual filtering logic according to conditions
        :param conditions:
        :return:
        """
        """
        TBD filter logic based on conditions
        """
        logger.info(self.conditions)
        return Product.objects.all().values_list('title',
                                                 'category',
                                                 'price',
                                                 'color',
                                                 'descr',
                                                 'url',
                                                 'image',
                                                 )

    def load_data(self):
        """
        load data from database(Django model)
        Use Pandas dataframe because it's more convenient in terms of manipulation.
        Extract key columns and combine them as ultimate feature text for analysis.
        Tokenize ultimate feature texts.
        :return:
        """
        if not self.conditions:
            products = Product.objects.all().values_list('title',
                                                         'category',
                                                         'price',
                                                         'color',
                                                         'descr',
                                                         'url',
                                                         'image',
                                                         )
        else:
            # fileter records based on conditions
            products = self.filter_products()
        logger.info(f'{len(products)} rows of data loaded.')
        self.products = products

    def transform_data(self):
        """
        combine the target product and training set
        convert into dataframe
        :return:
        """
        d = {'title': self.reco_target.title,
             'category': self.reco_target.category,
             'price': self.reco_target.price,
             'color': self.reco_target.color,
             'descr': self.reco_target.descr,
             'url': self.reco_target.url,
             'image': self.reco_target.image
             }
        target_product = pd.DataFrame.from_records(data=d, index=[0])

        logger.debug(target_product.shape)

        data_set = pd.DataFrame.from_records(self.products, columns=['title',
                                                                     'category',
                                                                     'price',
                                                                     'color',
                                                                     'descr',
                                                                     'url',
                                                                     'image'])
        logger.debug(data_set.shape)
        self.df = pd.concat([target_product, data_set], ignore_index=True)

        logger.debug(self.df.shape)

        corpus = []
        for i in range(self.df.shape[0]):
            corpus.append(self.df['title'][i] + ' ' + self.df['category'][i] + ' ' + self.df['color'][i])

        logger.info(f' {len(corpus)} rows of corpus saved')
        self.corpus = corpus

    def vectorize(self):
        """
        vectorize text representation of the product:
            different algorithms can be used here, depending on the vectorizer
        :return:
        """
        self.text_token_matrix = self.vectorizer.fit_transform(self.corpus)
        logger.debug('text tokenized!')

    def cosine_similarity(self):
        """
        compute cosine similarity of ultimate feature texts
        :return:
        """
        self.cs = cosine_similarity(self.text_token_matrix)
        logger.debug('cosine similarity calculated!')

    def train_model(self):
        """
        define a train_model method such that when the engine initialize,
        everything will be done and ready for recommendation
        :return:
        """
        self.load_data()
        self.transform_data()
        self.vectorize()
        self.cosine_similarity()

    def recommend_for(self, index):
        """
        recommend top 5 similar products for a given product prescribed by index
        """
        if index < 0:
            logger.error(f'index {index} invalid')
        if index >= self.df.shape[0]:
            logger.error(f'index {index} out of range')
        scores = list(enumerate(self.cs[index]))
        sorted_scores = sorted(scores, key=lambda x: x[1], reverse=True)
        recommended = sorted_scores[1:6]
        logger.debug(f"recommendation for #{index} are:")
        logger.debug(recommended)
        return self.populate_recommendation(recommended)

    def recommend(self):
        """
        Since we put the target product at the top of dataframe, aka index 0
        :return:
        """
        return self.recommend_for(0)

    def populate_recommendation(self, recommended):
        """
        populate the actual product recommendation: translating indexes to actual products
        :param recommended:
        :return:
        """
        res = []
        for item in recommended:
            res.append({
                'title': self.df.iloc[item[0]].title,
                'category': self.df.iloc[item[0]].category,
                'price': self.df.iloc[item[0]].price,
                'color': self.df.iloc[item[0]].color,
                'descr': self.df.iloc[item[0]].descr,
                'url': self.df.iloc[item[0]].url,
                'image': self.df.iloc[item[0]].image,
            })
        logger.debug(res)
        return res


if __name__ == '__main__':
    p = Product(
        id='Test',
        title='Satin Bridesmaid Dress',
        category='Ladies_dresses_wrap',
        price=0,
        color='Black',
        url='',
        image='',
        descr=''
    )
    re = RecoEngine(reco_target=p, conditions=None)
    re.train_model()
    re.recommend()
