from drawings.models import Drawing as DrawingModel


class Drawing(DrawingModel):
    class Meta:
        proxy = True
        verbose_name = DrawingModel._meta.verbose_name
        verbose_name_plural = DrawingModel._meta.verbose_name_plural
