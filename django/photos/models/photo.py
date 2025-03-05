import os

from django.utils import timezone
from django.db import models
from django.utils.safestring import mark_safe

from imagefield.fields import ImageField

from main.helpers.imagefield import prepare_image_formats


class Photo(models.Model):
    is_active = models.BooleanField('Активность', default=True)
    create_date = models.DateTimeField('Дата создания', default=timezone.now)
    update_date = models.DateTimeField('Дата обновления', default=timezone.now)
    pub_date = models.DateTimeField(
        verbose_name='Дата публикации',
        default=timezone.now,
    )
    section = models.ForeignKey(
        'photos.Section',
        verbose_name='Раздел',
        on_delete=models.CASCADE,
    )
    image = ImageField(
        'Изображение',
        upload_to='photos',
        auto_add_fields=True,
        formats=prepare_image_formats([144, 204, 226, 160, 184]),
    )
    image_name = models.CharField(
        'Имя файла',
        max_length=100,
        blank=True,
        null=True,
    )
    alt = models.CharField('Альтернативный текст', max_length=500)

    def image_preview(self):
        return mark_safe('<img src="%s" width="150" height="auto" loading="lazy" />' % (self.image.url))

    image_preview.short_description = 'Изображение'

    class Meta:
        verbose_name = 'фото'
        verbose_name_plural = 'фотографии'

    def save(self, *args, **kwargs):
        self.update_date = self.create_date if self._state.adding else timezone.now()

        super().save(*args, **kwargs)

        self.image_name = os.path.basename(self.image.name)
        super().save(update_fields=['image_name'])

    def __str__(self):
        return self.image_name
