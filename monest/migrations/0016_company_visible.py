# Generated by Django 4.0.2 on 2022-06-22 00:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('monest', '0015_email'),
    ]

    operations = [
        migrations.AddField(
            model_name='company',
            name='visible',
            field=models.BooleanField(default=True),
        ),
    ]