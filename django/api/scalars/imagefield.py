from typing import NewType

from strawberry import scalar


def serialize(v):
    return {'url': v.url} | {
        f'{format}': getattr(v, format)
        for format in v.field.formats.keys()
    }


ImageField = scalar(
    NewType('ImageField', object),
    serialize=serialize,
)
