from django.utils import timezone
from django.db import models


class Section(models.Model):
    create_date = models.DateTimeField('Дата создания', default=timezone.now)
    update_date = models.DateTimeField('Дата обновления', default=timezone.now)
    name = models.CharField('Название', max_length=50)

    class Meta:
        verbose_name = 'раздел'
        verbose_name_plural = 'разделы'

    def save(self, *args, **kwargs):
        self.update_date = self.create_date if self._state.adding else timezone.now()

        super().save(*args, **kwargs)

    def __str__(self):
        return self.name
