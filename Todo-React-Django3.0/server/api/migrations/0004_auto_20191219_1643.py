# Generated by Django 2.2.4 on 2019-12-19 07:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20191219_1641'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='id',
            field=models.IntegerField(blank=True, primary_key=True, serialize=False),
        ),
    ]
