from django.shortcuts import render
from pathlib import Path

# Create your views here.

"""
Serve the frontend from here
frond end is an React App
Home Page
"""
def index(request):
    # the frond end path has already added in setting.py
    return render(request, "build/index.html")

