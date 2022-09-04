from rest_framework.decorators import api_view
from django.http import JsonResponse
from recommendation.models import Product
# Create your views here.
import logging

from recommendation.reco_engine import RecoEngine

logFormatter = logging.Formatter("%(asctime)s [%(threadName)-12.12s] [%(levelname)-5.5s]  %(message)s")
logger = logging.getLogger('data_engine')
logger.setLevel(logging.DEBUG)
consoleHandler = logging.StreamHandler()
consoleHandler.setFormatter(logFormatter)
logger.addHandler(consoleHandler)


@api_view(['POST'])
def similar_products(request):
    """
    request body example
        {
      "product" : {
        "id": "Test",
        "title": "Satin Bridesmaid Dress",
        "category": "Ladies_dresses_wrap",
        "price": 67,
        "color": "Black",
        "url": "google.com",
        "image": "google.com",
        "descr": "great jean woman"
      },
      "conditions": {
        "price": [10, 100],
        "color": ["black", "red"]
      }
}

    response example:
    [
    {
        "title": "Satin Wrap-front Dress",
        "category": "Ladies_dresses_wrap",
        "price": 69.99,
        "color": "Black,",
        "descr": "",
        "url": "https://www2.hm.com/en_ca/productpage.1040179001.html",
        "image": "lp2.hm.com/hmgoepprod?set=source[/d4/4c/d44c74c9a37552dc0d2f6afa0917ef6838aa7a7b.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/style]"
    },
    {
        "title": "Satin Wrap-front Dress",
        "category": "Ladies_dresses_wrap",
        "price": 37.99,
        "color": "Black,",
        "descr": "",
        "url": "https://www2.hm.com/en_ca/productpage.1029017001.html",
        "image": "lp2.hm.com/hmgoepprod?set=source[/7d/2c/7d2cd916916e7b40d123bff202c7e0435e2612c9.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/style]"
    },
    {
        "title": "Satin Wrap-front Dress",
        "category": "Ladies_dresses_wrap",
        "price": 49.99,
        "color": "Black,",
        "descr": "",
        "url": "https://www2.hm.com/en_ca/productpage.1031587001.html",
        "image": "lp2.hm.com/hmgoepprod?set=source[/c8/a9/c8a9010004e66f97372c92ae39616a441ce532c3.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/style]"
    },
    {
        "title": "Wrap Dress",
        "category": "Ladies_dresses_wrap",
        "price": 39.99,
        "color": "Black,",
        "descr": "",
        "url": "https://www2.hm.com/en_ca/productpage.1058085002.html",
        "image": "lp2.hm.com/hmgoepprod?set=source[/8b/5f/8b5fed79fd8219b6f3ac5ddcd2e2da276bdb448c.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/style]"
    },
    {
        "title": "Tie-belt Satin Dress",
        "category": "Ladies_dresses_wrap",
        "price": 49.99,
        "color": "Dusty rose,Black,",
        "descr": "",
        "url": "https://www2.hm.com/en_ca/productpage.1048879002.html",
        "image": "lp2.hm.com/hmgoepprod?set=source[/da/54/da540a3be7103b3a088e726404c72c22ed0bcaed.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/style]"
    }
]

    :param request:
    :return:
    """
    if 'title' not in request.data['product']:
        return JsonResponse('product title missing ', status=400)
    title = request.data['product']['title']
    product_id = ''
    category = ''
    price = 0
    color = ''
    descr = ''
    url = ''
    image = ''
    if 'id' in request.data['product']:
        product_id = request.data['product']['id']
    if 'category' in request.data['product']:
        category = request.data['product']['category']
    if 'price' in request.data['product']:
        price = request.data['product']['price']
    if 'color' in request.data['product']:
        color = request.data['product']['color']
    if 'descr' in request.data['product']:
        descr = request.data['product']['descr']
    if 'url' in request.data['product']:
        url = request.data['product']['url']
    if 'image' in request.data['product']:
        image = request.data['product']['image']

    conditions = None
    if "conditions" in request.data:
        conditions = request.data['conditions']

    p = Product(
        id=product_id,
        title=title,
        category=category,
        price=price,
        color=color,
        url=url,
        image=image,
        descr=descr
    )

    re = RecoEngine(reco_target=p, conditions=conditions)
    re.train_model()
    results = re.recommend()

    return JsonResponse(results, safe=False)
