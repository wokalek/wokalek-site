import strawberry
import strawberry_django

from api.types.blogpost import BlogPostType


@strawberry.type
class Query:
    blogPosts: list[BlogPostType] = strawberry_django.field()
