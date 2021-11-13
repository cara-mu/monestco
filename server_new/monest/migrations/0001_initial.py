# Generated by Django 3.2.8 on 2021-11-12 20:55

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Citations',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=40)),
                ('author', models.CharField(max_length=20)),
                ('date', models.CharField(max_length=20)),
                ('pages', models.CharField(blank=True, max_length=20)),
                ('publisher', models.CharField(max_length=50)),
                ('url', models.URLField()),
            ],
        ),
        migrations.CreateModel(
            name='Company',
            fields=[
                ('name', models.CharField(max_length=30, primary_key=True, serialize=False)),
                ('description', models.CharField(max_length=200)),
                ('parent_company', models.CharField(blank=True, max_length=30)),
                ('category', models.CharField(choices=[('Unisex', 'Unisex'), ('Sportswear', 'Sportswear'), ('Shoes', 'Shoes'), ('Woman', 'Woman')], max_length=10)),
                ('logo', models.URLField()),
                ('similar_company_1', models.CharField(max_length=30)),
                ('similar_company_2', models.CharField(max_length=30)),
                ('similar_company_3', models.CharField(max_length=30)),
                ('similar_company_4', models.CharField(max_length=30)),
            ],
        ),
        migrations.CreateModel(
            name='Industry',
            fields=[
                ('name', models.CharField(choices=[('Apparel', 'Apparel'), ('Tech', 'Tech'), ('FastFood', 'Fastfood'), ('Beauty', 'Beauty')], max_length=10, primary_key=True, serialize=False)),
            ],
        ),
        migrations.CreateModel(
            name='Scores',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(choices=[('A', 'Diversity & Inclusion'), ('A1', 'Discrimination'), ('A1_1', 'Prohibits discrimination throughout the organization'), ('A1_2', 'Actively works to identify and respond to discrimination concerns'), ('A2', 'Gender Equality'), ('A2_1', 'Commits to increasing gender diversity throughout the organization'), ('A2_2', 'Maintains strong female representation at all levels of leadership'), ('A2_3', 'Ensures employees are receiving equal pay for equal work'), ('A3', 'Cultural Diversity'), ('A3_1', 'Commits to increasing cultural diversity throughout the organization'), ('A3_2', 'Maintains diverse ethnic representation at all levels of leadership'), ('A3_3', 'Actively supports BIPOC and underrepresented communities'), ('A4', 'Inclusivity'), ('A4_1', 'Fosters an inclusive workplace culture for LGBTQ+ employees'), ('A4_2', 'Fosters an inclusive workplace culture for employees with disabilities'), ('A4_3', 'Promotes body positivity and messages of inclusivity to consumers'), ('B', 'Worker Exploitation'), ('B1', 'Child Labor'), ('B1_1', 'Prohibits the use of child labour throughout the value chain'), ('B1_2', 'Actively works to identify and prevent child labour violations'), ('B1_3', 'Enrolls child labour victims in school after discovering violations'), ('B2', 'Forced Labor'), ('B2_1', 'Prohibits the use of forced labour throughout the value chain'), ('B2_2', 'Actively works to identify and prevent forced labour violations'), ('B2_3', 'Supports the recovery of forced labour victims after discovering violations'), ('B3', 'Living Wage'), ('B3_1', 'Ensures all factory workers are paid a living wage'), ('B3_2', 'Works to increase wages and advocate for fair compensation in the industry'), ('B3_3', 'Ensures wages and benefits are being paid on time and in full'), ('B3_4', 'Guarantees the right to freedom of association and collective bargaining'), ('B4', 'Working Conditions'), ('B4_1', 'Actively works to improve factory health and safety conditions'), ('B4_2', 'Ensures workers are not forced to work excessive hours'), ('B4_3', 'Prohibits all forms of harassment or abuse towards workers'), ('B4_4', 'Compensates mistreated workers after discovering violations'), ('C', 'Waste & Pollution'), ('C1', 'Air Pollution'), ('C1_1', 'Commits to using less energy throughout the value chain'), ('C1_2', 'Commits to reducing greenhouse gas emissions throughout the value chain'), ('C1_3', 'Works towards reducing the operational carbon footprint'), ('C1_4', 'Works with suppliers to reduce manufacturing carbon footprints'), ('C2', 'Water Pollution & Waste'), ('C2_1', 'Commits to using less water throughout the value chain'), ('C2_2', 'Works with suppliers to recycle water and reduce usage'), ('C2_3', 'Eliminates use of toxic chemicals in the production of products'), ('C2_4', 'Filters wastewater to avoid contaminating fresh water'), ('C3', 'Packaging Waste'), ('C3_1', 'Reduces use of plastic packaging and shopping bags'), ('C3_2', 'Uses recycled plastics and paper packaging materials'), ('C3_3', 'Ensures all used packaging can be reused, recycled or composted'), ('C3_4', 'Works with suppliers to reduce, reuse and recycle all packaging waste'), ('C4', 'Material Waste'), ('C4_1', 'Uses recycled materials in the production of products'), ('C4_2', 'Repurposes or donates damaged and excess products'), ('C4_3', 'Offers an effective take-back or repair program for customers'), ('C4_4', 'Works with suppliers to reduce, reuse and recycle all material waste'), ('D', 'Ethical Souring'), ('D1', 'Cotton Farming'), ('D1_1', 'Sources sustainable cotton from certified farms'), ('D1_2', 'Actively works to prevent unethical cotton farming practices'), ('D2', 'Deforestation'), ('D2_1', 'Sources sustainable forest-based fabrics from certified suppliers'), ('D2_2', 'Uses paper packaging materials from sustainable sources'), ('D2_3', 'Actively works to protect forests and stop deforestation'), ('D3', 'Animal Welfare'), ('D3_1', 'Prohibits animal cruelty throughout the value chain'), ('D3_2', 'Sources sustainable leather or prohibits use'), ('D3_3', 'Sources sustainable fur or prohibits use'), ('D3_4', 'Sources sustainable wool from non-mulesed sheep'), ('D3_4', 'Sources sustainable down from birds that were never force fed or live plucked')], max_length=5)),
                ('score', models.IntegerField()),
                ('short_text', models.CharField(max_length=30)),
                ('long_text', models.CharField(max_length=100)),
                ('company', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='monest.company', verbose_name='Belonging to Company')),
            ],
        ),
        migrations.CreateModel(
            name='PoliticalAssociation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('year', models.IntegerField()),
                ('rep', models.FloatField()),
                ('dem', models.FloatField()),
                ('individual_percentage', models.FloatField()),
                ('company', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='monest.company', verbose_name='Belonging to Company')),
            ],
        ),
        migrations.CreateModel(
            name='News',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('summary', models.CharField(max_length=1000)),
                ('year', models.IntegerField()),
                ('category', models.CharField(max_length=20)),
                ('photo', models.URLField()),
                ('issue_addressed', models.CharField(max_length=5)),
                ('issue_addressed_text', models.CharField(max_length=50)),
                ('responsibility_taken', models.CharField(max_length=5)),
                ('responsibility_taken_text', models.CharField(max_length=200)),
                ('company', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='monest.company', verbose_name='Belonging to Company')),
            ],
        ),
        migrations.CreateModel(
            name='IndustryStandards',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(choices=[('A', 'Diversity & Inclusion'), ('A1', 'Discrimination'), ('A1_1', 'Prohibits discrimination throughout the organization'), ('A1_2', 'Actively works to identify and respond to discrimination concerns'), ('A2', 'Gender Equality'), ('A2_1', 'Commits to increasing gender diversity throughout the organization'), ('A2_2', 'Maintains strong female representation at all levels of leadership'), ('A2_3', 'Ensures employees are receiving equal pay for equal work'), ('A3', 'Cultural Diversity'), ('A3_1', 'Commits to increasing cultural diversity throughout the organization'), ('A3_2', 'Maintains diverse ethnic representation at all levels of leadership'), ('A3_3', 'Actively supports BIPOC and underrepresented communities'), ('A4', 'Inclusivity'), ('A4_1', 'Fosters an inclusive workplace culture for LGBTQ+ employees'), ('A4_2', 'Fosters an inclusive workplace culture for employees with disabilities'), ('A4_3', 'Promotes body positivity and messages of inclusivity to consumers'), ('B', 'Worker Exploitation'), ('B1', 'Child Labor'), ('B1_1', 'Prohibits the use of child labour throughout the value chain'), ('B1_2', 'Actively works to identify and prevent child labour violations'), ('B1_3', 'Enrolls child labour victims in school after discovering violations'), ('B2', 'Forced Labor'), ('B2_1', 'Prohibits the use of forced labour throughout the value chain'), ('B2_2', 'Actively works to identify and prevent forced labour violations'), ('B2_3', 'Supports the recovery of forced labour victims after discovering violations'), ('B3', 'Living Wage'), ('B3_1', 'Ensures all factory workers are paid a living wage'), ('B3_2', 'Works to increase wages and advocate for fair compensation in the industry'), ('B3_3', 'Ensures wages and benefits are being paid on time and in full'), ('B3_4', 'Guarantees the right to freedom of association and collective bargaining'), ('B4', 'Working Conditions'), ('B4_1', 'Actively works to improve factory health and safety conditions'), ('B4_2', 'Ensures workers are not forced to work excessive hours'), ('B4_3', 'Prohibits all forms of harassment or abuse towards workers'), ('B4_4', 'Compensates mistreated workers after discovering violations'), ('C', 'Waste & Pollution'), ('C1', 'Air Pollution'), ('C1_1', 'Commits to using less energy throughout the value chain'), ('C1_2', 'Commits to reducing greenhouse gas emissions throughout the value chain'), ('C1_3', 'Works towards reducing the operational carbon footprint'), ('C1_4', 'Works with suppliers to reduce manufacturing carbon footprints'), ('C2', 'Water Pollution & Waste'), ('C2_1', 'Commits to using less water throughout the value chain'), ('C2_2', 'Works with suppliers to recycle water and reduce usage'), ('C2_3', 'Eliminates use of toxic chemicals in the production of products'), ('C2_4', 'Filters wastewater to avoid contaminating fresh water'), ('C3', 'Packaging Waste'), ('C3_1', 'Reduces use of plastic packaging and shopping bags'), ('C3_2', 'Uses recycled plastics and paper packaging materials'), ('C3_3', 'Ensures all used packaging can be reused, recycled or composted'), ('C3_4', 'Works with suppliers to reduce, reuse and recycle all packaging waste'), ('C4', 'Material Waste'), ('C4_1', 'Uses recycled materials in the production of products'), ('C4_2', 'Repurposes or donates damaged and excess products'), ('C4_3', 'Offers an effective take-back or repair program for customers'), ('C4_4', 'Works with suppliers to reduce, reuse and recycle all material waste'), ('D', 'Ethical Souring'), ('D1', 'Cotton Farming'), ('D1_1', 'Sources sustainable cotton from certified farms'), ('D1_2', 'Actively works to prevent unethical cotton farming practices'), ('D2', 'Deforestation'), ('D2_1', 'Sources sustainable forest-based fabrics from certified suppliers'), ('D2_2', 'Uses paper packaging materials from sustainable sources'), ('D2_3', 'Actively works to protect forests and stop deforestation'), ('D3', 'Animal Welfare'), ('D3_1', 'Prohibits animal cruelty throughout the value chain'), ('D3_2', 'Sources sustainable leather or prohibits use'), ('D3_3', 'Sources sustainable fur or prohibits use'), ('D3_4', 'Sources sustainable wool from non-mulesed sheep'), ('D3_4', 'Sources sustainable down from birds that were never force fed or live plucked')], max_length=5)),
                ('total', models.FloatField()),
                ('low', models.FloatField()),
                ('high', models.FloatField()),
                ('industry', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='monest.industry', verbose_name='Belonging to Industry')),
            ],
        ),
        migrations.CreateModel(
            name='Facts',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('heading', models.CharField(max_length=50)),
                ('summary', models.CharField(max_length=1000)),
                ('company', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='monest.company', verbose_name='Belonging to Company')),
            ],
        ),
        migrations.AddField(
            model_name='company',
            name='industry',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='monest.industry', verbose_name='Belonging to Industry'),
        ),
    ]
