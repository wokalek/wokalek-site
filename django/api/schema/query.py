import strawberry
import strawberry_django

from api.types.post import PostType, PostOrder
from api.types.article import ArticleType, ArticleOrder
from api.types.photos import PhotoType, PhotoOrder
from api.types.drawings import DrawingType, DrawingOrder
from blog.models import Post
from articles.models import Article
from photos.models import Photo
from drawings.models import Drawing


@strawberry.type
class Query:
    @strawberry_django.field
    def posts(self,
              order: PostOrder | None = strawberry.UNSET) -> list[PostType]:
        qs = Post.objects.filter(is_active=True).order_by('-pub_date')

        if order is not strawberry.UNSET:
            qs = strawberry_django.ordering.apply(order, qs)

        return qs

    @strawberry_django.field
    def articles(self, order: ArticleOrder |
                 None = strawberry.UNSET) -> list[ArticleType]:
        qs = Article.objects.filter(is_active=True).order_by('-pub_date')

        if order is not strawberry.UNSET:
            qs = strawberry_django.ordering.apply(order, qs)

        return qs

    @strawberry_django.field
    def article(self, slug: str) -> ArticleType:
        return Article.objects.get(is_active=True, slug__exact=slug)

    @strawberry_django.field
    def photos(self, order: PhotoOrder |
               None = strawberry.UNSET) -> list[PhotoType]:
        qs = Photo.objects.filter(is_active=True).order_by('-pub_date')

        if order is not strawberry.UNSET:
            qs = strawberry_django.ordering.apply(order, qs)

        return qs

    @strawberry_django.field
    def drawings(self, order: DrawingOrder |
                 None = strawberry.UNSET) -> list[DrawingType]:
        qs = Drawing.objects.filter(is_active=True).order_by('-pub_date')

        if order is not strawberry.UNSET:
            qs = strawberry_django.ordering.apply(order, qs)

        return qs
