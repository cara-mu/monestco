# Generated by Django 3.2.8 on 2021-11-13 18:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('monest', '0007_scores_short_text'),
    ]

    operations = [
        migrations.AlterField(
            model_name='facts',
            name='heading',
            field=models.CharField(max_length=100),
        ),
        migrations.AlterField(
            model_name='news',
            name='category',
            field=models.CharField(choices=[('WE', 'Worker Exploitation'), ('Covid', 'Covid-19 Response'), ('DI', 'Diversity & Inclusion'), ('ES', 'Ethical Sourcing')], max_length=40),
        ),
        migrations.AlterField(
            model_name='news',
            name='issue_addressed_text',
            field=models.CharField(max_length=1000),
        ),
        migrations.AlterField(
            model_name='news',
            name='responsibility_taken_text',
            field=models.CharField(max_length=1000),
        ),
        migrations.AlterField(
            model_name='news',
            name='title',
            field=models.CharField(max_length=100),
        ),
    ]
