# Generated by Django 5.1.3 on 2024-11-17 14:52

import portfolio.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0004_games_included_alter_games_genre_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Blog',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('publish_date_month', models.CharField(choices=[('jan', 'jan'), ('feb', 'feb'), ('mar', 'mar'), ('apr', 'apr'), ('may', 'may'), ('jun', 'jun'), ('jul', 'jul'), ('aug', 'aug'), ('sep', 'sep'), ('oct', 'oct'), ('nov', 'nov'), ('dec', 'dec')], default=portfolio.models.Blog.get_current_month, max_length=3)),
                ('publish_date_year', models.CharField(default=portfolio.models.Blog.get_current_year, max_length=5)),
                ('medium_url', models.TextField(default='#')),
                ('hashnode_url', models.TextField(default='#')),
                ('thumbnail_url', models.TextField(default='#')),
                ('tags', models.JSONField(default=list)),
                ('included', models.BooleanField(default=True)),
            ],
            options={
                'db_table': 'blog',
            },
        ),
        migrations.AlterField(
            model_name='resources',
            name='recommendation',
            field=models.IntegerField(blank=True, choices=[(1, '1'), (2, '2'), (3, '3'), (4, '4'), (5, '5')], null=True),
        ),
        migrations.AlterField(
            model_name='resources',
            name='review',
            field=models.TextField(blank=True, default=None, null=True),
        ),
    ]