import strawberry
import strawberry_django

from api.types.blogpost import BlogPost


@strawberry.type
class Query:
    blogposts: list[BlogPost] = strawberry_django.field()
