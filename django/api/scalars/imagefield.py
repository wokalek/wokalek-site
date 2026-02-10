from typing import NewType

from strawberry import scalar
from strawberry_django.fields.types import field_type_map
from imagefield.fields import ImageField as ImageFieldModel

ImageField = NewType('ImageField', object)

ImageFieldScalar = scalar(
    ImageField,
    serialize=lambda v: (
        {'url': v.url}
        | {f'{format}': getattr(v, format) for format in sorted(v.field.formats.keys())}
    ),
)

field_type_map.update({ImageFieldModel: ImageFieldScalar})
