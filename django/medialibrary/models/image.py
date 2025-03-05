import os

from django.utils import timezone
from django.db import models
from django.conf import settings
from django.utils.safestring import mark_safe

from imagefield.fields import ImageField


class Image(models.Model):
    create_date = models.DateTimeField('Дата создания', default=timezone.now)
    update_date = models.DateTimeField('Дата обновления', default=timezone.now)
    section = models.ForeignKey(
        'medialibrary.Section',
        verbose_name='Раздел',
        on_delete=models.CASCADE,
    )
    image = ImageField('Изображение', upload_to='medialibrary/image',
                       auto_add_fields=True)
    image_name = models.CharField('Имя файла', max_length=100, blank=True,
                                  null=True)
    image_markdown = models.CharField(
        'Код markdown',
        max_length=750,
        blank=True,
        null=True
    )
    alt = models.CharField('Альтернативный текст', max_length=500)

    def image_preview(self):
        return mark_safe('<img src="%s" width="150" height="auto" loading="lazy" />' % (self.image.url))

    image_preview.short_description = 'Изображение'

    class Meta:
        verbose_name = 'изображение'
        verbose_name_plural = 'изображения'

    def save(self, *args, **kwargs):
        self.update_date = self.create_date if self._state.adding else timezone.now()

        super().save(*args, **kwargs)

        self.image_name = os.path.basename(self.image.name)
        self.image_markdown = (
            f'![{self.alt}]({settings.MEDIA_URL + self.image.name})'
            f'{{width="{self.image_width}" height="{self.image_height}"}}'
        )
        super().save(update_fields=['image_name', 'image_markdown'])

    def __str__(self):
        return self.image_name
