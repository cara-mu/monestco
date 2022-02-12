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
    path('v1/pa/summary', views.political_association_summary, name='political_association_summary'),
    path('v1/pa/detailed', views.political_association_details, name='political_association_details'),
    path('v1/scores/companyTotalScores', views.company_total_scores, name='company_Total_Scores'),
    path('v1/ranking', views.brands_ranking, name='brands_ranking'),
    path('v1/similarcompanies', views.similar_companies, name='similar_companies'),
]