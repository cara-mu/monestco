from django.contrib import admin
from monest.models import Industry, Company, IndustryStandards, Scores, Facts, News, PoliticalAssociation, Citations, Metrics
# Register your models here.


class CompanyAdmin(admin.ModelAdmin):
    list_display = ['name', 'industry', 'category']


class IndustryAdmin(admin.ModelAdmin):
    list_display = ['name']


class IndustryStandardAdmin(admin.ModelAdmin):
    list_display = ['id', 'industry', 'metric', 'total', 'high', 'low']


class ScoreAdmin(admin.ModelAdmin):
    list_display = ['id', 'score', 'short_text', 'company', 'metric', 'get_metric_types']

    @admin.display(ordering='metric__types', description='Type',)
    def get_metric_types(self, obj):
        return obj.metric.types


class FactsAdmin(admin.ModelAdmin):
    list_display = ['id', 'heading', 'company']


class NewsAdmin(admin.ModelAdmin):
    list_display = ['id', 'title', 'year', 'category', 'company']


class CitationsAdmin(admin.ModelAdmin):
    list_display = ['id', 'title', 'date', 'author', 'publisher']


class MetricsAdmin(admin.ModelAdmin):
    list_display = ['name', 'types', 'description', 'parent']


admin.site.register(Citations, CitationsAdmin)
admin.site.register(Industry, IndustryAdmin)
admin.site.register(Company, CompanyAdmin)
admin.site.register(IndustryStandards, IndustryStandardAdmin)
admin.site.register(Scores, ScoreAdmin)
admin.site.register(Facts, FactsAdmin)
admin.site.register(News, NewsAdmin)
admin.site.register(PoliticalAssociation)
admin.site.register(Metrics, MetricsAdmin)


