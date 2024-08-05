from imagefield.processing import register


@register
def force_webp(get_image):
    def processor(image, context):
        context.save_kwargs['format'] = 'WEBP'

        return get_image(image, context)

    return processor


def force_webp_processor(processors):
    def spec(fieldfile, context):
        context.extension = '.webp'
        context.processors = ['force_webp']
        context.processors.extend(processors)

    return spec
