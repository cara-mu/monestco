"""server_new URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path, re_path
from monest.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('allcompanies', all_company_names, name='all_company_names'),
    path('companyscores', company_scores, name='company_scores'),
    path ('companyTotalScores', company_total_scores, name = 'company_Total_Scores'),
    path('companydetailsA', a_scores, name='a_scores'),
    path('companydetailsB', b_scores, name='b_scores'),
    path('companydetailsC', c_scores, name='c_scores'),
    path('companydetailsD', d_scores, name='d_scores'),
    path('somecompanyinfo', other_company_info, name='other_company_info'),
    path('citationsLong', score_citations, name='score_citations'),
    path('companyname', company_name, name='company_name'),
    path('similarCompany1', similar_company_1, name='similar_company_1'),
    path('similarCompany2', similar_company_2, name='similar_company_2'),
    path('similarCompany3', similar_company_3, name='similar_company_3'),
    path('similarCompany4', similar_company_4, name='similar_company_4'),
    path('facts', facts, name='facts'),
    path('citationsFacts', fact_citations, name='fact_citations'),
    path('citations', news_citations, name='news_citations'),
    path('news', news, name='news'),
    path('industry', industry_standards, name='industry_standards'),
    path('api/', include('monest.urls')),
    path('/', index, name="index"),
    re_path(r'^(?:.*)/?$', index, name='index'),
]
