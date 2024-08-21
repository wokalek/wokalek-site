import os

from django.utils import timezone
from django.db import models

from imagefield.fields import ImageField

from main.helpers.imagefield import prepare_image_formats


class Drawing(models.Model):
    is_active = models.BooleanField('Активность', default=True)
    create_date = models.DateTimeField('Дата создания', default=timezone.now)
    update_date = models.DateTimeField('Дата обновления', default=timezone.now)
    pub_date = models.DateTimeField(
        verbose_name='Дата публикации',
        default=timezone.now,
    )
    section = models.ForeignKey(
        'drawings.Section',
        verbose_name='Раздел',
        on_delete=models.CASCADE,
    )
    image = ImageField(
        'Изображение',
        upload_to='drawings',
        auto_add_fields=True,
        formats=prepare_image_formats([144, 204, 226, 274, 320, 370, 450]),
    )
    image_name = models.CharField(
        'Имя файла',
        max_length=100,
        blank=True,
        null=True,
    )
    alt = models.CharField('Альтернативный текст', max_length=500)

    class Meta:
        verbose_name = 'рисунок'
        verbose_name_plural = 'рисунки'

    def save(self, *args, **kwargs):
        self.update_date = self.create_date if self._state.adding else timezone.now()

        super().save(*args, **kwargs)

        self.image_name = os.path.basename(self.image.name)
        super().save(update_fields=['image_name'])

    def __str__(self):
        return f'[{self.id}] {self.alt} {self.image_name}'
