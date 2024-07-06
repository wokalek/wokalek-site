import datetime

import strawberry
import strawberry_django

from blog.models import Post


@strawberry_django.type(Post)
class BlogPost:
    create_date: datetime.datetime
    update_date: datetime.datetime
    pub_date: datetime.datetime
    title: str
    content: str
