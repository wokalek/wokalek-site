import os

from django.utils import timezone
from django.db import models
from django.conf import settings

from imagefield.fields import ImageField


class Image(models.Model):
    create_date = models.DateTimeField('Дата создания', default=timezone.now)
    update_date = models.DateTimeField('Дата обновления', default=timezone.now)
    image_path = models.URLField('Полный путь до изображения', blank=True,
                                 null=True)
    section = models.ForeignKey('medialibrary.Section', on_delete=models.CASCADE,
                                verbose_name='Раздел')
    image = ImageField('Изображение', upload_to='medialibrary/image',
                       auto_add_fields=True)
    alt = models.CharField('Альтернативный текст', max_length=100)

    class Meta:
        verbose_name = 'Изображение'
        verbose_name_plural = 'Изображения'

    def save(self, *args, **kwargs):
        self.update_date = self.create_date if self._state.adding else timezone.now()

        super().save(*args, **kwargs)

        self.image_path = settings.MEDIA_URL + self.image.name
        super().save(update_fields=['image_path'])

    def __str__(self):
        return f'[{self.id}] {self.alt} {os.path.basename(self.image.name)}'
