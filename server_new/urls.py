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
    path('companydetailsA', a_scores, name='a_scores'),
    path('companydetailsB', b_scores, name='b_scores'),
    path('companydetailsC', c_scores, name='c_scores'),
    path('companydetailsD', d_scores, name='d_scores'),
    path('api/', include('monest.urls')),
    path('/', index, name="index"),
    re_path(r'^(?:.*)/?$', index, name='index'),
]
