from strawberry import auto
import strawberry_django

from articles.models import Article


@strawberry_django.order_type(Article)
class ArticleOrder:
    pub_date: auto


@strawberry_django.type(Article, order=ArticleOrder)
class ArticleType:
    id: auto
    update_date: auto
    pub_date: auto
    slug: auto
    title: auto
    content: auto
    meta_keywords: auto

    @classmethod
    def get_queryset(cls, queryset, info, **kwargs):
        return queryset.filter(is_active=True).order_by('-pub_date')
