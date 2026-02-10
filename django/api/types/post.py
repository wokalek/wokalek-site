from strawberry import auto
import strawberry_django

from blog.models import Post


@strawberry_django.order_type(Post)
class PostOrder:
    pub_date: auto


@strawberry_django.type(Post, order=PostOrder)
class PostType:
    id: auto
    update_date: auto
    pub_date: auto
    title: auto
    content: auto

    @classmethod
    def get_queryset(cls, queryset, info, **kwargs):
        return queryset.filter(is_active=True).order_by('-pub_date')
