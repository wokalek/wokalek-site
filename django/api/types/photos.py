from strawberry import auto
import strawberry_django

from photos.models import Section, Photo


@strawberry_django.type(Section, fields=['id', 'name'])
class PhotoSectionType:
    pass


@strawberry_django.order_type(Photo)
class PhotoOrder:
    pub_date: auto


@strawberry_django.type(Photo, order=PhotoOrder)
class PhotoType:
    id: auto
    update_date: auto
    pub_date: auto
    section: PhotoSectionType
    image: auto
    image_width: auto
    image_height: auto
    alt: auto

    @classmethod
    def get_queryset(cls, queryset, info, **kwargs):
        return queryset.filter(is_active=True).order_by('-pub_date')
