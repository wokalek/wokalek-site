from strawberry import auto
import strawberry_django

from drawings.models import Section, Drawing


@strawberry_django.type(Section, fields=['id', 'name'])
class DrawingSectionType:
    pass


@strawberry_django.order_type(Drawing)
class DrawingOrder:
    pub_date: auto


@strawberry_django.type(Drawing, order=DrawingOrder)
class DrawingType:
    id: auto
    update_date: auto
    pub_date: auto
    section: DrawingSectionType
    image: auto
    image_width: auto
    image_height: auto
    alt: auto

    @classmethod
    def get_queryset(cls, queryset, info, **kwargs):
        return queryset.filter(is_active=True).order_by('-pub_date')
