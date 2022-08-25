from django.db import models
from bulk_update_or_create import BulkUpdateOrCreateQuerySet
# Create your models here.


class Product(models.Model):
    objects = BulkUpdateOrCreateQuerySet.as_manager()

    id = models.CharField(max_length=50, primary_key=True)
    title = models.CharField(max_length=100, blank=True)
    category = models.CharField(max_length=100, blank=True)
    price = models.FloatField(blank=True)
    color = models.CharField(max_length=200, blank=True)
    descr = models.CharField(max_length=1000, blank=True)
    url = models.URLField(max_length=300)
    image = models.URLField(max_length=300, blank=True)
    created_at = models.DateTimeField(auto_now_add=True, editable=False)
    updated_at = models.DateTimeField(auto_now=True)
