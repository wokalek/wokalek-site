import datetime

import strawberry
import strawberry_django

from articles.models import Article


@strawberry_django.order(Article)
class ArticleOrder:
    pub_date: strawberry.auto


@strawberry_django.type(Article)
class ArticleType:
    id: int
    update_date: datetime.datetime
    pub_date: datetime.datetime
    slug: str
    title: str
    content: str
    meta_keywords: str
