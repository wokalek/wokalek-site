# Generated by Django 5.0.6 on 2024-07-03 20:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gallery', '0003_alter_galleryimage_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='galleryimage',
            name='image_path',
            field=models.URLField(blank=True, null=True, verbose_name='Полный путь до изображения'),
        ),
    ]
