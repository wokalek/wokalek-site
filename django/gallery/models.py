from django.utils import timezone
from django.db import models

from imagefield.fields import ImageField


class GalleryImage(models.Model):
    create_date = models.DateTimeField('Дата создания', default=timezone.now)
    image = ImageField('Изображение', upload_to='gallery',
                       auto_add_fields=True)
