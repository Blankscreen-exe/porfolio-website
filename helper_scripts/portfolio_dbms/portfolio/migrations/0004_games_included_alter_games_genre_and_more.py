# Generated by Django 5.1.3 on 2024-11-17 11:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0003_resources_included_alter_resources_review_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='games',
            name='included',
            field=models.BooleanField(default=True),
        ),
        migrations.AlterField(
            model_name='games',
            name='genre',
            field=models.JSONField(default=list),
        ),
        migrations.AlterField(
            model_name='games',
            name='recommendation',
            field=models.IntegerField(blank=True, choices=[(1, '1'), (2, '2'), (3, '3'), (4, '4'), (5, '5')], default=None, null=True),
        ),
        migrations.AlterField(
            model_name='games',
            name='review',
            field=models.TextField(blank=True, default=None, null=True),
        ),
        migrations.AlterField(
            model_name='games',
            name='status',
            field=models.CharField(blank=True, choices=[('playing', 'Playing'), ('finished', 'Finished')], default=None, max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='games',
            name='studio',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='games',
            name='title',
            field=models.CharField(max_length=255),
        ),
    ]