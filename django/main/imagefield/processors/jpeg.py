from imagefield.processing import register


@register
def force_jpeg(get_image):
    def processor(image, context):
        context.save_kwargs['format'] = 'JPEG'
        context.save_kwargs['quality'] = 90
        context.save_kwargs['progressive'] = True
        if image.mode != 'RGB':
            image = image.convert('RGB')

        return get_image(image, context)

    return processor


def force_jpeg_processor(processors):
    def spec(fieldfile, context):
        context.extension = '.jpg'
        context.processors = ['force_jpeg']
        context.processors.extend(processors)

    return spec
