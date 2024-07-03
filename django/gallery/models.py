from django.utils import timezone
from django.db import models
from django.conf import settings

from imagefield.fields import ImageField


class GalleryImage(models.Model):
    create_date = models.DateTimeField('Дата создания', default=timezone.now)
    image_path = models.URLField('Полный путь до изображения', blank=True,
                                 null=True)
    section = models.ForeignKey('GallerySection', on_delete=models.CASCADE,
                                null=True, verbose_name='Раздел')
    image = ImageField('Изображение', upload_to='gallery/image',
                       auto_add_fields=True)

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)

        self.image_path = settings.MEDIA_URL + self.image.name
        super().save(update_fields=['image_path'])


class GallerySection(models.Model):
    create_date = models.DateTimeField('Дата создания', default=timezone.now)
    name = models.CharField('Название', max_length=50)

    def __str__(self):
        return f'[{self.id}] {self.name}'
