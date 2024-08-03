import datetime

import strawberry
import strawberry_django

from photos.models import Section, Photo
from api.scalars import ImageField


@strawberry_django.type(Section)
class SectionType:
    id: int
    name: str


@strawberry_django.order(Photo)
class PhotoOrder:
    pub_date: strawberry.auto


@strawberry_django.type(Photo)
class PhotoType:
    id: int
    update_date: datetime.datetime
    pub_date: datetime.datetime
    section: SectionType
    image: ImageField
    alt: str
