import strawberry
import strawberry_django

from api.types.post import PostType, PostOrder
from blog.models import Post


@strawberry.type
class Query:
    @strawberry_django.field
    def posts(self,
              order: PostOrder | None = strawberry.UNSET) -> list[PostType]:
        qs = Post.objects.filter(is_active=True).order_by('-pub_date')

        if order is not strawberry.UNSET:
            qs = strawberry_django.ordering.apply(order, qs)

        return qs
