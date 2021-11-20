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
from django.urls import include, path
from monest.views import index, all_company_names, companies,company_scores, company_name, similar_company_1
from monest.views import similar_company_2, similar_company_3, similar_company_4, facts, news

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', index, name="index"),
    path('allcompanies', all_company_names, name='all_company_names'),
    path('companies/<company>', companies, name='companies'),
    path('companyscores', company_scores, name='company_scores'),
    path('companyname', company_name, name='company_name'),
    path('similarCompany1', similar_company_1, name='similar_company_1'),
    path('similarCompany2', similar_company_2, name='similar_company_2'),
    path('similarCompany3', similar_company_3, name='similar_company_3'),
    path('similarCompany4', similar_company_4, name='similar_company_4'),
    path('facts', facts, name='facts'),
    path('news', news, name='news'),
    path('api/', include('monest.urls'))
]
