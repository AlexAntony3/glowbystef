# Generated by Django 3.2.23 on 2023-11-15 19:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('services', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='review',
            name='rating_filter',
            field=models.IntegerField(choices=[(1, 'one star'), (2, 'two stars'), (3, 'three stars'), (4, 'four stars'), (5, 'five stars')], default=1),
        ),
    ]
