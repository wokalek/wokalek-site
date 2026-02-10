from typing import NewType

from strawberry import scalar
from strawberry_django.fields.types import field_type_map
from mdeditor.fields import MDTextField as MDTextFieldModel

MDTextField = NewType('MDTextField', str)

MDTextFieldScalar = scalar(MDTextField)

field_type_map.update({MDTextFieldModel: MDTextFieldScalar})
