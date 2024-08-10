from imagefield.processing import register
from PIL import Image, ImageOps


@register
def cover(get_image, size):
    def processor(image, context):
        return get_image(ImageOps.cover(
            image,
            size,
            Image.Resampling.LANCZOS,
        ), context)

    return processor
