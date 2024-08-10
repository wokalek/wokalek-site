import datetime

import strawberry
import strawberry_django

from drawings.models import Section, Drawing
from api.scalars import ImageField


@strawberry_django.type(Section)
class DrawingSectionType:
    id: int
    name: str


@strawberry_django.order(Drawing)
class DrawingOrder:
    pub_date: strawberry.auto


@strawberry_django.type(Drawing)
class DrawingType:
    id: int
    update_date: datetime.datetime
    pub_date: datetime.datetime
    section: DrawingSectionType
    image: ImageField
    image_width: int
    image_height: int
    alt: str
