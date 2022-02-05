from django.db import models

# Create your models here.


class Product(models.Model):
    name = models.CharField(max_length=50, blank=False)
    title = models.CharField(max_length=100, blank=True)
    sub_title = models.CharField(max_length=100, blank=True)
    price = models.FloatField(blank=True)
    color = models. CharField(max_length=50, blank=True)
    url = models.URLField(max_length=300, unique=True)
    photo = models.URLField(max_length=300, blank=True)
