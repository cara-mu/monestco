from django.urls import include, path
from rest_framework import routers
from monest import views

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'groups', views.GroupViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('v1/allcompanies', views.all_company_names, name='all_company_names'),
    path('v1/industry', views.industry_standards, name='industry_standards'),
    path('v1/pa/summary', views.political_association_summary, name='political_association_summary'),
    path('v1/pa/detailed', views.political_association_details, name='political_association_details'),
    path('v1/scores/abcd', views.company_a_b_c_d, name='company_a_b_c_d'),
    path('v1/scores/detail', views.company_detail_scores, name='company_detail_scores'),
    path('v1/scores', views.company_type_score, name='company_type_scores'),
    path('v1/ranking', views.brands_ranking, name='brands_ranking'),
    path('v1/similarcompanies', views.similar_companies, name='similar_companies'),
    path('v1/companybasic', views.company_basic, name='company_basic'),
    path('v1/partialcompanybasic', views.partial_company_basic, name='partial_company_basic'),
    path('v1/facts', views.facts, name='facts'),
    path('v1/news', views.news, name='news'),
    path('v1/citation/scores', views.score_citations, name='score_citations'),
    path('v1/citation/facts', views.fact_citations, name='fact_citations'),
    path('v1/citation/news', views.news_citations, name='news_citations'),
    path('v1/emails', views.emails, name='emails')
]