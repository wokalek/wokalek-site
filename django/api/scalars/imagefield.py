from typing import NewType

from strawberry import scalar


ImageField = scalar(
    NewType('ImageField', object),
    name='ImageField',
    serialize=lambda v: (
        {'url': v.url}
        | {f'{format}': getattr(v, format) for format in sorted(v.field.formats.keys())}
    ),
)
