from django.utils import timezone
from django.db import models

from mdeditor.fields import MDTextField


class Article(models.Model):
    is_active = models.BooleanField('Активность', default=True)
    create_date = models.DateTimeField('Дата создания', default=timezone.now)
    update_date = models.DateTimeField('Дата обновления', default=timezone.now)
    pub_date = models.DateTimeField(verbose_name='Дата публикации',
                                    default=timezone.now)
    slug = models.SlugField('Человекопонятный URL', unique=True)
    title = models.CharField('Название', max_length=100)
    content = MDTextField(verbose_name='Контент')
    meta_keywords = models.CharField('Мета, ключевые слова', max_length=100)

    class Meta:
        verbose_name = 'статью'
        verbose_name_plural = 'статьи'

    def save(self, *args, **kwargs):
        self.update_date = self.create_date if self._state.adding else timezone.now()

        super().save(*args, **kwargs)

    def __str__(self):
        return f'[{self.id}] {self.title}'
