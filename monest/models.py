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
    logo = models.URLField(max_length=300)
    industry = models.ForeignKey(Industry,
                                 on_delete=models.CASCADE,
                                 verbose_name="Belonging to Industry"
                                 )
    visible = models.BooleanField(default=True)
    similar_company_1 = models.CharField(max_length=30)
    similar_company_2 = models.CharField(max_length=30)
    similar_company_3 = models.CharField(max_length=30)
    similar_company_4 = models.CharField(max_length=30)


class Metrics(models.Model):
    A = 'A A1 A1.1 A1.2 A2 A2.1 A2.2 A2.3 A3 A3.1 A3.2 A3.3 A4 A4.1 A4.2 A4.3 '
    B = 'B B1 B1.1 B1.2 B1.3 B2 B2.1 B2.2 B2.3 B3 B3.1 B3.2 B3.3 B3.4 B4 B4.1 B4.2 B4.3 B4.4 '
    C = 'C C1 C1.1 C1.2 C1.3 C1.4 C2 C2.1 C2.2 C2.3 C2.4 C3 C3.1 C3.2 C3.3 C3.4 C4 C4.1 C4.2 C4.3 C4.4 '
    D = 'D D1 D1.1 D1.2 D2 D2.1 D2.2 D2.3 D3 D3.1 D3.2 D3.3 D3.4 D3.5'
    Type_Choice = models.TextChoices('Type_Choice', A + B + C + D)
    name = models.CharField(max_length=100, primary_key=True)
    types = models.CharField(max_length=10, null=True, blank=True, choices=Type_Choice.choices, unique=True)
    description = models.CharField(max_length=200, blank=True)
    parent = models.ForeignKey("self", on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return self.types + ' ' + self.name


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
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=40, blank=True)
    date = models.CharField(max_length=40)
    pages = models.CharField(max_length=40, blank=True)
    publisher = models.CharField(max_length=50)
    url = models.URLField(max_length=300, blank=True)

    def __str__(self):
        return self.title + ', ' + self.pages + ', ' + self.publisher + ', ' + self.date


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
        ('ES', 'Ethical Sourcing'),
        ('WP', 'Waste & Pollution')
    )
    title = models.CharField(max_length=100)
    summary = models.CharField(max_length=1000)
    year = models.IntegerField()
    category = models.CharField(max_length=40, choices=Category_Choice)
    photo = models.URLField(max_length=300)
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


class Email(models.Model): 
    userEmail = models.EmailField(max_length = 254)
