import datetime

import strawberry
import strawberry_django

from blog.models import Post


@strawberry_django.order(Post)
class PostOrder:
    pub_date: strawberry.auto


@strawberry_django.type(Post)
class PostType:
    id: int
    update_date: datetime.datetime
    pub_date: datetime.datetime
    title: str
    content: str
