from django.shortcuts import render
from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework import permissions
from monest.serializers import UserSerializer, GroupSerializer
from rest_framework import status
from rest_framework.decorators import api_view,permission_classes
from django.http import JsonResponse
from monest.models import Company
from rest_framework.permissions import IsAuthenticated
from django.contrib.staticfiles.views import serve

# Create your views here.


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
    return JsonResponse(list(companies), safe=False)


