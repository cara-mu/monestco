# Generated by Django 3.2.8 on 2022-01-11 14:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('monest', '0013_alter_citations_title'),
    ]

    operations = [
        migrations.AlterField(
            model_name='citations',
            name='url',
            field=models.URLField(blank=True, max_length=300),
        ),
        migrations.AlterField(
            model_name='company',
            name='logo',
            field=models.URLField(max_length=300),
        ),
        migrations.AlterField(
            model_name='news',
            name='photo',
            field=models.URLField(max_length=300),
        ),
    ]
