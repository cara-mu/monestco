from django.shortcuts import render
from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework import permissions
from monest.serializers import UserSerializer, GroupSerializer
from rest_framework.decorators import api_view, permission_classes
from django.http import JsonResponse
from monest.models import Company, Scores, Facts, News, IndustryStandards, PoliticalAssociation
from rest_framework.permissions import IsAuthenticated
from django.views.decorators.csrf import csrf_exempt
from django.db.models import Q
import logging
logger = logging.getLogger(__name__)


# Create your views here.
# API refactoring(After database refactoring)
# stage 1:  migrate old APIs, keep everything unchanged(URLs, names, params, methods..etc)
# Stage 2: optimized APIs, subject them to best practices(require frond-end API call change accordingly)
# API Optimization directions:
#   1. remove inappropriate use of POST method
#   2. better URL design
#   3. remove redundant APIs(e.g. similarCompany1/2/3/4)  ---- Done
#   4. remove unnecessary params and return payload
#   5. exception handling


@permission_classes([IsAuthenticated])
class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


@permission_classes([IsAuthenticated])
class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]


def index(request):
    """
    Serve the frontend from here
    frond end is an React App
    Home Page
    the frond end path has already added in setting.py
    """
    return render(request, "index.html")


@api_view(['GET'])
def all_company_names(request):
    """
    Get all companies
    """
    companies = Company.objects.values_list('name', flat=True)
    data = []
    for item in companies:
        data.append({
            "Name": item
        })
    return JsonResponse({
        'rows': data
    }, safe=False)


def update_scores(raw_scores, processed_scores: {}) -> {}:
    """
    prepare scores in a dictionary format
    :param raw_scores:
    :param processed_scores: queryset object resulting from database query
    :return:
    """
    for item in raw_scores:
        score_key = item.metric.types + 'score'
        processed_scores[score_key] = item.score
        if item.short_text:
            short_key = item.metric.types + 'short'
            long_key = item.metric.types + 'long'
            processed_scores[short_key] = item.short_text
            processed_scores[long_key] = item.long_text
    return processed_scores


def update_pol(raw_scores, processed_scores: {}) -> {}:
    dem = 0
    rep = 0
    for item in raw_scores:
        dem += item.dem
        rep += item.rep
    processed_scores['dem'] = dem
    processed_scores['rep'] = rep
    return processed_scores


def update_citations(raw_scores, processed_citation: {}) -> {}:
    """
    update and prepare citations
    :param raw_scores:
    :param processed_citation:
    :return:
    """
    for score in raw_scores:
        type_key = score.metric.types
        citations = score.citation.all()
        temp = []
        for item in citations:
            temp.append({
                'ID': item.id,
                'Type': score.metric.types,
                'Author': item.author,
                'Title': item.title,
                'PublishingGroup': item.publisher,
                'Date': item.date,
                'Pages': item.pages,
                'URL': item.url
            })
        if len(temp):
            processed_citation[type_key] = temp

    return processed_citation


def get_scores_base(name: str, score_types: [str], include_sub: bool, parse_func) -> {}:
    """
    common tool to query scores from database, with the parent-subsidiary logic built in.
    Let's say two company: A and B,   B is the subsidiary of A.
    When fetch scores for B from the database,  if there are records for B,  return those records.
    Otherwise,  return the records of its parent company, aka A.
    Basically, it's an inheritance relationship.  When we input data to database,  we should put common records under
    under the parent, and override certain records if subsidiary has different values for those records.

    :param parse_func: a function to update do the actual data parsing that must works for the parent-subsidiary logic
                    Different types of records require different parse_func.  Right now we have define the following:
                        update_scores() :  for score query
                        update_citations():  for citation query
    :param include_sub:  True to query all subtypes for a type in  score_types
    :param name:  company name
    :param score_types:  a list of score types to query, could be any combination between Metrics.Type_Choice.
        For example:
           score_types = ['A', 'B'], and include_sub = False,
                the function will query the score for exactly A and B type.
           score_types = ['A', 'B'], and include_sub = True,
                the function will query the scores for A and B, and all their subtypes as well,
                including A1, A2, A3, A4,  A1.1, A1.2, A1.3.... B1, B2, B3, B4, B1.1, B1,2...etc.

    :return:  a dict of score
    """
    if not len(score_types):
        return {}

    try:
        company = Company.objects.get(name=name)
        condition = Q()
        if include_sub:
            for t in score_types:
                condition |= Q(metric__types__contains=t)
        else:
            condition |= Q(metric__types__in=score_types)

        res = {}
        parent_scores = Scores.objects.filter(Q(company=company.parent_company) & condition)
        res = parse_func(parent_scores, res)
        scores = Scores.objects.filter(Q(company=company) & condition)
        res = parse_func(scores, res)
        return res

    except Company.DoesNotExist as e1:
        logger.error(e1)
        raise e1

    except Scores.DoesNotExist as e2:
        logger.error(e2)
        raise e2


def get_scores(name: str, score_types: [str], include_sub: bool) -> {}:
    return get_scores_base(name, score_types, include_sub, update_scores)


def get_total_score(name: str) -> int:
    """
    get total score.
    If a company lacks certain scores, say A score,  total_score wouldn't include that component
    :param name:
    :return:
    """
    scores = get_scores_base(name, ['A', 'B', 'C', 'D'], False, update_scores)
    total_score = 0
    if 'Ascore' in scores:
        total_score += scores['Ascore']
    if 'Bscore' in scores:
        total_score += scores['Bscore']
    if 'Cscore' in scores:
        total_score += scores['Cscore']
    if 'Dscore' in scores:
        total_score += scores['Dscore']

    total_score = round(total_score / 4)
    return total_score


def get_score_citations(name: str, score_types: [str], include_sub: bool) -> {}:
    ret = get_scores_base(name, score_types, include_sub, update_citations)
    res = []
    for item in ret.values():
        res += item
    return res


@api_view(['GET'])
def company_detail_scores(request):
    name = request.query_params['company']
    res = get_scores(name, ['A', 'B', 'C', 'D'], True)
    return JsonResponse([res], safe=False)


@api_view(['GET'])
def company_a_b_c_d(request):
    name = request.query_params['company']
    res = get_scores(name, ['A', 'B', 'C', 'D'], False)
    return JsonResponse(res, safe=False)


@api_view(['GET', 'POST'])
def a_scores(request):
    name = request.query_params['0']
    res = get_scores(name, ['A'], True)
    return JsonResponse({
        'rows': [res]
    }, safe=False)


@api_view(['GET', 'POST'])
def b_scores(request):
    name = request.query_params['0']
    res = get_scores(name, ['B'], True)
    return JsonResponse({
        'rows': [res]
    }, safe=False)


@api_view(['GET', 'POST'])
def c_scores(request):
    name = request.query_params['0']
    res = get_scores(name, ['C'], True)
    return JsonResponse({
        'rows': [res]
    }, safe=False)


@api_view(['GET', 'POST'])
def d_scores(request):
    name = request.query_params['0']
    res = get_scores(name, ['D'], True)
    return JsonResponse({
        'rows': [res]
    }, safe=False)


@api_view(['GET', 'POST'])
def score_citations(request):
    name = request.query_params['0']
    res = get_score_citations(name, ['A', 'B', 'C', 'D'], True)
    return JsonResponse(res, safe=False)


@api_view(['GET'])
def partial_company_basic(request):
    name = request.query_params['company']
    try:
        company = Company.objects.get(name=name)
    except Company.DoesNotExist:
        logger.info(f'company {name} cannot find')
        return JsonResponse(f'company {name} cannot find', status=400)

    res = {'Logo':  company.logo}
    if company.parent_company:
        res['Subsidiary'] = company.parent_company
    else:
        res['Subsidiary'] = None
    res['TotalScore'] = get_total_score(name)

    return JsonResponse([res], safe=False)


@api_view(['GET'])
def company_basic(request):
    name = request.query_params['company']
    try:
        company = Company.objects.get(name=name)
    except Company.DoesNotExist:
        logger.info(f'company {name} cannot find')
        return JsonResponse(f'company {name} cannot find', status=400)

    res = {'Name': company.name}
    if company.parent_company:
        res['Subsidiary'] = company.parent_company
    else:
        res['Subsidiary'] = None
    res['Category'] = company.category
    res['Description'] = company.description
    res['Logo'] = company.logo
    res['SimilarCompany1'] = company.similar_company_1
    res['SimilarCompany2'] = company.similar_company_2
    res['SimilarCompany3'] = company.similar_company_3
    res['SimilarCompany4'] = company.similar_company_4
    res['TotalScore'] = get_total_score(name)

    return JsonResponse(res, safe=False)


@api_view(['GET'])
def facts(request):
    name = request.query_params['company']
    try:
        company = Company.objects.get(name=name)
    except Company.DoesNotExist:
        logger.info(f'company {name} cannot find')
        return JsonResponse(f'company {name} cannot find', status=400)

    fact_items = Facts.objects.all().filter(company=company)
    res = []
    for item in fact_items:
        res.append({
            'ID': item.id,
            'Heading': item.heading,
            'Summary': item.summary
        })

    return JsonResponse(res, safe=False)


@api_view(['GET', 'POST'])
def fact_citations(request):
    fact_id = request.query_params['1']
    citations = Facts.objects.get(id=fact_id).citation.all()
    res = []
    for item in citations:
        res.append({
            'ID': item.id,
            'Author': item.author,
            'Title': item.title,
            'PublishingGroup': item.publisher,
            'Date': item.date,
            'Pages': item.pages,
            'URL': item.url
        })
    return JsonResponse(res, safe=False)


News_Category = dict(News.Category_Choice)


@api_view(['GET'])
def news(request):
    name = request.query_params['company']
    try:
        company = Company.objects.get(name=name)
    except Company.DoesNotExist:
        logger.info(f'company {name} cannot find')
        return JsonResponse(f'company {name} cannot find', status=400)

    news_items = News.objects.all().filter(company=company)
    res = []
    for item in news_items:
        res.append({
            'ID': item.id,
            'Photo': item.photo,
            'Year': item.year,
            'Category': News_Category.get(item.category),
            'Title': item.title,
            'Summary': item.summary,
            'IssueAddressed': item.issue_addressed,
            'IssueAddressedExplanation': item.issue_addressed_text,
            'ResponsibilityTaken': item.responsibility_taken,
            'ResponsibilityTakenExplanation': item.responsibility_taken_text
        })

    return JsonResponse(res, safe=False)


@api_view(['GET', 'POST'])
def news_citations(request):
    news_id = request.query_params['1']
    citations = News.objects.get(id=news_id).citation.all()
    res = []
    for item in citations:
        res.append({
            'ID': item.id,
            'Author': item.author,
            'Title': item.title,
            'PublishingGroup': item.publisher,
            'Date': item.date,
            'Pages': item.pages,
            'URL': item.url
        })
    return JsonResponse(res, safe=False)


@api_view(['GET'])
def similar_companies(request):
    global company_name
    name = request.query_params['company']
    try:
        company = Company.objects.get(name=name)
    except Company.DoesNotExist:
        logger.info(f'company {name} cannot find')
        return JsonResponse({'error': f'company {name} cannot find'}, status=400)

    res = {}
    for i in range(1, 5):
        if i == 1:
            company_name = company.similar_company_1
        elif i == 2:
            company_name = company.similar_company_2
        elif i == 3:
            company_name = company.similar_company_3
        elif i == 4:
            company_name = company.similar_company_4

        try:
            score = get_total_score(company_name)
            res[i] = {
                'name': company_name,
                'score': score
            }
        except (Company.DoesNotExist, Scores.DoesNotExist):
            logger.error(f'error in querying score for {company_name}, setting score to 0')
            res[i] = {
                'name':  company_name,
                'score': 0
            }

    return JsonResponse(res, safe=False)


@api_view(['GET', 'POST'])
def industry_standards(request):
    """
    current implementation in Nodejs is hardcoded return Apparel.
    Need Optimization in stage 2
    :param request:
    :return:
    """
    standards = IndustryStandards.objects.all().filter(industry='Apparel')
    res = {}
    for item in standards:
        total_key = item.metric.types + 'total'
        low_key = item.metric.types + 'low'
        high_key = item.metric.types + 'high'
        res[total_key] = item.total
        res[low_key] = item.low
        res[high_key] = item.high

    return JsonResponse({
        'rows': [res]
    }, safe=False)


@api_view(['GET'])
def political_association_summary(request):
    name = request.query_params['company']
    company = Company.objects.get(name=name)
    res = {}
    records = PoliticalAssociation.objects.all().filter(company=company)
    # if empty then parent records instead
    if not records:
        records = PoliticalAssociation.objects.all().filter(company=company.parent_company)
    res = update_pol(records, res)
    return JsonResponse(res, safe=False)


@api_view(['GET'])
def political_association_details(request):
    name = request.query_params['company']
    company = Company.objects.get(name=name)
    records = PoliticalAssociation.objects.all().filter(company=company)
    if not records:
        records = PoliticalAssociation.objects.all().filter(company=company.parent_company)
    data = []
    citation = []
    for item in records:
        data.append({
            'year': item.year,
            'rep': item.rep,
            'dem': item.dem,
            'indi': item.individual_percentage
        })

        citations = item.citation.all()
        for x in citations:
            citation.append({
                'title': x.title,
                'author': x.author,
                'publisher': x.publisher,
                'pages': x.pages,
                'date': x.date,
                'url': x.url
            })

    return JsonResponse({
        'data': data,
        'citation': citation
    }, safe=False)


ranking_weight = {
    'low': 0.5,
    'medium': 1,
    'high': 1.5
}


def weighted_scores(name: str, a_weight: float, b_weight: float, c_weight: float, d_weight: float) -> float:
    scores = get_scores(name, ['A', 'B', 'C', 'D'], False)

    # to handle the case when some scores are missing for certain company
    score = 0
    if 'Ascore' in scores:
        score += scores['Ascore'] * a_weight
    if 'Bscore' in scores:
        score += scores['Bscore'] * b_weight

    if 'Cscore' in scores:
        score += scores['Cscore'] * c_weight
    if 'Dscore' in scores:
        score += scores['Dscore'] * d_weight
    return score


@api_view(['GET'])
def brands_ranking(request):
    """
    URL: /api/v1/ranking
    Method: Get
    Params:
          brand: brand name
          ranking preference: (low, medium, high)
              di: Diversity & Inclusion,
              we: Worker Exploitation,
              wp: Waster & Pollution,
              es: Ethical Sourcing
    Return
    Industry Ranking according to inputted preference
    """
    company = request.query_params['company']
    di = request.query_params['di']
    we = request.query_params['we']
    wp = request.query_params['wp']
    es = request.query_params['es']

    company = Company.objects.get(name=company)
    companies = Company.objects.all().filter(industry=company.industry)
    res = []
    scores = {}
    for c in companies:
        res.append(c.name)
        scores[c.name] = weighted_scores(c.name,
                                         ranking_weight[di],
                                         ranking_weight[we],
                                         ranking_weight[wp],
                                         ranking_weight[es])

    res.sort(key=lambda name: scores[name], reverse=True)

    return JsonResponse(res, safe=False)
