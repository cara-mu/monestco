from django.urls import path
from recommendation import views

urlpatterns = [
    path('v1/similar_products', views.similar_products, name='similar_products'),
]