from django.utils import timezone
from django.db import models
from django.utils.text import normalize_newlines

from mdeditor.fields import MDTextField


class Post(models.Model):
    is_active = models.BooleanField('Активность', default=True)
    create_date = models.DateTimeField('Дата создания', default=timezone.now)
    update_date = models.DateTimeField('Дата обновления', default=timezone.now)
    pub_date = models.DateTimeField(verbose_name='Дата публикации',
                                    default=timezone.now)
    title = models.CharField('Название', max_length=100)
    content = MDTextField(verbose_name='Контент')

    class Meta:
        verbose_name = 'пост'
        verbose_name_plural = 'посты'

    def save(self, *args, **kwargs):
        self.update_date = self.create_date if self._state.adding else timezone.now()
        self.content = normalize_newlines(self.content)

        super().save(*args, **kwargs)

    def __str__(self):
        return self.title
