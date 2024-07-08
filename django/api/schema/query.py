import strawberry
import strawberry_django

from api.types.post import PostType, PostOrder


@strawberry.type
class Query:
    posts: list[PostType] = strawberry_django.field(order=PostOrder)
