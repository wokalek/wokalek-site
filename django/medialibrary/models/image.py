import os

from django.utils import timezone
from django.db import models
from django.conf import settings

from imagefield.fields import ImageField


class Image(models.Model):
    create_date = models.DateTimeField('Дата создания', default=timezone.now)
    update_date = models.DateTimeField('Дата обновления', default=timezone.now)
    section = models.ForeignKey(
        'medialibrary.Section',
        on_delete=models.CASCADE,
        verbose_name='Раздел'
    )
    image = ImageField('Изображение', upload_to='medialibrary/image',
                       auto_add_fields=True)
    image_name = models.CharField('Имя файла', max_length=100, blank=True,
                                  null=True)
    image_markdown = models.CharField(
        'Код markdown',
        max_length=350,
        blank=True,
        null=True
    )
    alt = models.CharField('Альтернативный текст', max_length=100)

    class Meta:
        verbose_name = 'изображение'
        verbose_name_plural = 'изображения'

    def save(self, *args, **kwargs):
        self.update_date = self.create_date if self._state.adding else timezone.now()

        super().save(*args, **kwargs)

        self.image_name = os.path.basename(self.image.name)
        self.image_markdown = f'![{
            self.alt}]({
            settings.MEDIA_URL +
            self.image.name}){{width="{
            self.image_width}" height="{
                self.image_height}"}}'
        super().save(update_fields=['image_name', 'image_markdown'])

    def __str__(self):
        return f'[{self.id}] {self.alt} {self.image_name}'
