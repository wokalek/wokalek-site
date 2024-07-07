import datetime

import strawberry
import strawberry_django

from blog.models import Post


@strawberry_django.order(Post)
class BlogPostOrder:
    pub_date: strawberry.auto


@strawberry_django.type(Post, order=BlogPostOrder)
class BlogPostType:
    id: int
    update_date: datetime.datetime
    pub_date: datetime.datetime
    title: str
    content: str
