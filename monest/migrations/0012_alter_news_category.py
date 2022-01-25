# Generated by Django 3.2.8 on 2022-01-03 03:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('monest', '0011_alter_metrics_types'),
    ]

    operations = [
        migrations.AlterField(
            model_name='news',
            name='category',
            field=models.CharField(choices=[('WE', 'Worker Exploitation'), ('Covid', 'Covid-19 Response'), ('DI', 'Diversity & Inclusion'), ('ES', 'Ethical Sourcing'), ('WP', 'Waste & Pollution')], max_length=40),
        ),
    ]