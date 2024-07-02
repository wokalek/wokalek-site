# Generated by Django 5.0.6 on 2024-07-02 21:33

import django.utils.timezone
import imagefield.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='GalleryImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('create_date', models.DateTimeField(default=django.utils.timezone.now, verbose_name='Дата создания')),
                ('image', imagefield.fields.ImageField(height_field='image_height', upload_to='gallery', verbose_name='Изображение', width_field='image_width')),
                ('image_width', models.PositiveIntegerField(blank=True, editable=False, null=True)),
                ('image_height', models.PositiveIntegerField(blank=True, editable=False, null=True)),
                ('image_ppoi', imagefield.fields.PPOIField(default='0.5x0.5', max_length=20)),
            ],
        ),
    ]