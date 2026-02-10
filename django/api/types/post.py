from strawberry import auto
import strawberry_django

from blog.models import Post


@strawberry_django.order_type(Post)
class PostListOrder:
    pub_date: auto


@strawberry_django.type(Post, order=PostListOrder)
class PostListType:
    id: auto
    update_date: auto
    pub_date: auto
    title: auto
    content: auto

    @classmethod
    def get_queryset(cls, queryset, info, **kwargs):
        return queryset.filter(is_active=True).order_by('-pub_date')
