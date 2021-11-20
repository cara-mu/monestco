from django.shortcuts import render
from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework import permissions
from monest.serializers import UserSerializer, GroupSerializer
from rest_framework.decorators import api_view,permission_classes
from django.http import JsonResponse
from monest.models import Company,Scores, Facts, News
from rest_framework.permissions import IsAuthenticated
from django.views.decorators.csrf import csrf_exempt

# Create your views here.
# API refactoring(After database refactoring)
# stage 1:  migrate old APIs, keep everything unchanged(URLs, names, params, methods..etc)
# Stage 2: optimized APIs, subject them to best practices(require frond-end API call change accordingly)
# API Optimization directions:
#   1. remove inappropriate use of POST method
#   2. better URL design
#   3. remove redundant APIs(e.g. similarCompany1/2/3/4)
#   3. remove unnecessary params and return payload


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
        'row': data
    }, safe=False)


@api_view(['GET'])
def companies(request, company=''):
    return JsonResponse([], safe=False
                        )


@csrf_exempt
@api_view(['GET', 'POST'])
def company_scores(request):
    company_name = request.query_params['0']
    company = Company.objects.get(name=company_name)
    scores = Scores.objects.all().filter(company=company)
    res = {}
    for item in scores:
        score_key = item.metric.types + 'score'
        res[score_key] = item.score
        if item.short_text:
            short_key = item.metric.types + 'short'
            long_key = item.metric.types + 'long'
            res[short_key] = item.short_text
            res[long_key] = item.long_text

    return JsonResponse([res], safe=False
                        )


@api_view(['GET', 'POST'])
def company_name(request):
    company_name = request.query_params['0']
    company = Company.objects.get(name=company_name)
    res = {}
    res['Name'] = company.name
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
    scores = Scores.objects.all().filter(company=company, metric__types__in=['A', 'B', 'C', 'D'])
    total_score = 0
    for item in scores:
        total_score += item.score
    res['TotalScore'] = round(total_score/4)

    return JsonResponse([res], safe=False)


@api_view(['GET', 'POST'])
def facts(request):
    company_name = request.query_params['0']
    company = Company.objects.get(name=company_name)
    fact_items = Facts.objects.all().filter(company=company)
    res = []
    for item in fact_items:
        res.append({
            'Heading': item.heading,
            'Summary': item.summary
        })

    return JsonResponse([res], safe=False)


@api_view(['GET', 'POST'])
def news(request):
    company_name = request.query_params['0']
    company = Company.objects.get(name=company_name)
    news_items = News.objects.all().filter(company=company)
    res = []
    for item in news_items:
        res.append({
            'Photo': item.photo,
            'Year': item.year,
            'Category': item.category,
            'Title': item.title,
            'Summary': item.summary,
            'IssueAddressed': item.issue_addressed,
            'IssueAddressedExplanation': item.issue_addressed_text,
            'ResponsibilityTaken': item.responsibility_taken,
            'ResponsibilityTakenExplanation': item.responsibility_taken_text
        })

    return JsonResponse([res], safe=False)


def get_company_score(name: str) -> {}:
    company = Company.objects.get(name=name)
    scores = Scores.objects.all().filter(company=company, metric__types__in=['A', 'B', 'C', 'D'])
    res = {}
    for item in scores:
        if item.metric.types == 'A':
            res['Ascore'] = item.score
        elif item.metric.types == 'B':
            res['Bscore'] = item.score
        elif item.metric.types == 'C':
            res['Cscore'] = item.score
        elif item.metric.types == 'D':
            res['Dscore'] = item.score

    return res


@api_view(['GET', 'POST'])
def similar_company_1(request):
    company_name = request.query_params['0']
    res = get_company_score(company_name)
    return JsonResponse([res], safe=False)


@api_view(['GET', 'POST'])
def similar_company_2(request):
    company_name = request.query_params['0']
    res = get_company_score(company_name)
    return JsonResponse([res], safe=False)


@api_view(['GET', 'POST'])
def similar_company_3(request):
    company_name = request.query_params['0']
    res = get_company_score(company_name)
    return JsonResponse([res], safe=False)


@api_view(['GET', 'POST'])
def similar_company_4(request):
    company_name = request.query_params['0']
    res = get_company_score(company_name)
    return JsonResponse([res], safe=False)

