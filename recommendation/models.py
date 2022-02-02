from django.db import models

# Create your models here.


class Product(models.Model):
    name = models.CharField(max_length=30, primary_key=True)
    title = models.CharField(max_length=100, blank=True)
    sub_title = models.CharField(max_length=100, blank=True)
    price = models.FloatField(blank=True)
    color = models. CharField(max_length=20, blank=True)
    url = models.URLField(max_length=300, blank=True)
    photo = models.URLField(max_length=300, blank=True)
