# Generated by Django 5.0.6 on 2024-07-03 20:28

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gallery', '0004_alter_galleryimage_image_path'),
    ]

    operations = [
        migrations.CreateModel(
            name='GallerySection',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('create_date', models.DateTimeField(default=django.utils.timezone.now, verbose_name='Дата создания')),
                ('name', models.CharField(max_length=50, verbose_name='Название')),
                ('code', models.SlugField(verbose_name='Символьный код')),
            ],
        ),
    ]