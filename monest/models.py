from django.db import models

# Create your models here.
# Database migration and refactoring by Justin Hu, 2021/11/10
# refer to database design in howto/monest_db-New Design


class Industry(models.Model):
    Industry_Choice = models.TextChoices('Industry_Choice', 'Apparel Tech FastFood Beauty')
    name = models.CharField(max_length=10, primary_key=True, choices=Industry_Choice.choices)


class Company(models.Model):
    Category_Type = models.TextChoices('Category_Type', 'Unisex Sportswear Shoes Woman')
    name = models.CharField(max_length=30, primary_key=True)
    description = models.CharField(max_length=200)
    parent_company = models.CharField(max_length=30, blank=True)
    category = models.CharField(max_length=10, choices=Category_Type.choices)
    logo = models.URLField(max_length=200)
    industry = models.ForeignKey(Industry,
                                 on_delete=models.CASCADE,
                                 verbose_name="Belonging to Industry"
                                 )
    similar_company_1 = models.CharField(max_length=30)
    similar_company_2 = models.CharField(max_length=30)
    similar_company_3 = models.CharField(max_length=30)
    similar_company_4 = models.CharField(max_length=30)


class Metrics(models.Model):
    L1 = 1
    L2 = 2
    L3 = 3
    Level_Choice = [
        (L1, 'Level 1'),
        (L2, 'Level 2'),
        (L3, 'Level 3'),
    ]
    name = models.CharField(max_length=100, primary_key=True)
    level = models.IntegerField(default=1, choices=Level_Choice)
    description = models.CharField(max_length=200, blank=True)
    parent = models.ForeignKey("self", on_delete=models.CASCADE, null=True, blank=True)


class IndustryStandards(models.Model):
    metric = models.OneToOneField(
        Metrics,
        on_delete=models.CASCADE,
        null=True,
        blank=True,
    )
    total = models.FloatField()
    low = models.FloatField()
    high = models.FloatField()
    industry = models.ForeignKey(Industry,
                                 on_delete=models.CASCADE,
                                 verbose_name="Belonging to Industry"
                                 )


class Citations(models.Model):
    title = models.CharField(max_length=100)
    author = models.CharField(max_length=40, blank=True)
    date = models.CharField(max_length=40)
    pages = models.CharField(max_length=40, blank=True)
    publisher = models.CharField(max_length=50)
    url = models.URLField(max_length=200, blank=True)


class Scores(models.Model):
    score = models.IntegerField()
    short_text = models.CharField(max_length=200, blank=True)
    long_text = models.CharField(max_length=400, blank=True)
    metric = models.ForeignKey(Metrics, on_delete=models.CASCADE, null=True,blank=True)
    company = models.ForeignKey(Company,
                                on_delete=models.CASCADE,
                                verbose_name='Belonging to Company')
    citation = models.ManyToManyField(Citations, blank=True)


class Facts(models.Model):
    heading = models.CharField(max_length=100)
    summary = models.CharField(max_length=1000)
    company = models.ForeignKey(Company,
                                on_delete=models.CASCADE,
                                verbose_name='Belonging to Company')
    citation = models.ManyToManyField(Citations, blank=True)


class News(models.Model):
    Category_Choice = (
        ('WE', 'Worker Exploitation'),
        ('Covid', 'Covid-19 Response'),
        ('DI', 'Diversity & Inclusion'),
        ('ES', 'Ethical Sourcing')
    )
    title = models.CharField(max_length=100)
    summary = models.CharField(max_length=1000)
    year = models.IntegerField()
    category = models.CharField(max_length=40, choices=Category_Choice)
    photo = models.URLField(max_length=200)
    issue_addressed = models.CharField(max_length=5)
    issue_addressed_text = models.CharField(max_length=1000)
    responsibility_taken = models.CharField(max_length=5)
    responsibility_taken_text = models.CharField(max_length=1000)
    company = models.ForeignKey(Company,
                                on_delete=models.CASCADE,
                                verbose_name='Belonging to Company')
    citation = models.ManyToManyField(Citations, blank=True)


class PoliticalAssociation(models.Model):
    year = models.IntegerField()
    rep = models.FloatField()
    dem = models.FloatField()
    individual_percentage = models.FloatField()
    company = models.ForeignKey(Company,
                                on_delete=models.CASCADE,
                                verbose_name='Belonging to Company')
    citation = models.ManyToManyField(Citations, blank=True)




