# Generated by Django 3.2.8 on 2021-11-19 01:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('monest', '0010_auto_20211119_0053'),
    ]

    operations = [
        migrations.AlterField(
            model_name='metrics',
            name='types',
            field=models.CharField(blank=True, choices=[('A', 'A'), ('A1', 'A1'), ('A1.1', 'A1.1'), ('A1.2', 'A1.2'), ('A2', 'A2'), ('A2.1', 'A2.1'), ('A2.2', 'A2.2'), ('A2.3', 'A2.3'), ('A3', 'A3'), ('A3.1', 'A3.1'), ('A3.2', 'A3.2'), ('A3.3', 'A3.3'), ('A4', 'A4'), ('A4.1', 'A4.1'), ('A4.2', 'A4.2'), ('A4.3', 'A4.3'), ('B', 'B'), ('B1', 'B1'), ('B1.1', 'B1.1'), ('B1.2', 'B1.2'), ('B1.3', 'B1.3'), ('B2', 'B2'), ('B2.1', 'B2.1'), ('B2.2', 'B2.2'), ('B2.3', 'B2.3'), ('B3', 'B3'), ('B3.1', 'B3.1'), ('B3.2', 'B3.2'), ('B3.3', 'B3.3'), ('B3.4', 'B3.4'), ('B4', 'B4'), ('B4.1', 'B4.1'), ('B4.2', 'B4.2'), ('B4.3', 'B4.3'), ('B4.4', 'B4.4'), ('C', 'C'), ('C1', 'C1'), ('C1.1', 'C1.1'), ('C1.2', 'C1.2'), ('C1.3', 'C1.3'), ('C1.4', 'C1.4'), ('C2', 'C2'), ('C2.1', 'C2.1'), ('C2.2', 'C2.2'), ('C2.3', 'C2.3'), ('C2.4', 'C2.4'), ('C3', 'C3'), ('C3.1', 'C3.1'), ('C3.2', 'C3.2'), ('C3.3', 'C3.3'), ('C3.4', 'C3.4'), ('C4', 'C4'), ('C4.1', 'C4.1'), ('C4.2', 'C4.2'), ('C4.3', 'C4.3'), ('C4.4', 'C4.4'), ('D', 'D'), ('D1', 'D1'), ('D1.1', 'D1.1'), ('D1.2', 'D1.2'), ('D2', 'D2'), ('D2.1', 'D2.1'), ('D2.2', 'D2.2'), ('D2.3', 'D2.3'), ('D3', 'D3'), ('D3.1', 'D3.1'), ('D3.2', 'D3.2'), ('D3.3', 'D3.3'), ('D3.4', 'D3.4'), ('D3.5', 'D3.5')], max_length=10, null=True, unique=True),
        ),
    ]
