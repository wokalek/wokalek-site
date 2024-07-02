from django.utils import timezone
from django.db import models

from mdeditor.fields import MDTextField


class BlogPost(models.Model):
    create_date = models.DateTimeField('Дата создания', default=timezone.now)
    pub_date = models.DateTimeField(verbose_name='Дата публикации')
    content = MDTextField(verbose_name='Контент')
