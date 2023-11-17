# Generated by Django 3.2.23 on 2023-11-15 19:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('services', '0002_review_rating_filter'),
    ]

    operations = [
        migrations.AlterField(
            model_name='review',
            name='rating_filter',
            field=models.IntegerField(blank=True, choices=[(1, 'one star'), (2, 'two stars'), (3, 'three stars'), (4, 'four stars'), (5, 'five stars')], null=True),
        ),
    ]
