# Generated by Django 3.2.8 on 2022-03-05 20:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('monest', '0014_auto_20220111_1420'),
    ]

    operations = [
        migrations.CreateModel(
            name='Email',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('userEmail', models.EmailField(max_length=254)),
            ],
        ),
    ]
