# Generated by Django 5.1 on 2024-08-21 06:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('drawings', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='drawing',
            name='alt',
            field=models.CharField(max_length=500, verbose_name='Альтернативный текст'),
        ),
    ]
