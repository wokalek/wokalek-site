from photos.models import Photo as PhotoModel


class Photo(PhotoModel):
    class Meta:
        proxy = True
        verbose_name = PhotoModel._meta.verbose_name
        verbose_name_plural = PhotoModel._meta.verbose_name_plural
