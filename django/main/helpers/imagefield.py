from main.imagefield.processors import force_jpeg_processor, force_webp_processor, force_avif_processor


def prepare_image_formats(sizes):
    processors = {
        'jpeg': force_jpeg_processor,
        'webp': force_webp_processor,
        'avif': force_avif_processor
    }

    image_formats = {}

    for format, processor in processors.items():
        image_formats |= {
            f'{size}_{format}': processor(['autorotate', 'preserve_icc_profile', ('cover', (size, size))])
            for size in sizes
        }

    return image_formats
