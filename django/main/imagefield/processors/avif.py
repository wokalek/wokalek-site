from imagefield.processing import register
import pillow_avif


@register
def force_avif(get_image):
    def processor(image, context):
        context.save_kwargs['format'] = 'AVIF'

        return get_image(image, context)

    return processor


def force_avif_processor(processors):
    def spec(fieldfile, context):
        context.extension = '.avif'
        context.processors = ['force_avif']
        context.processors.extend(processors)

    return spec
