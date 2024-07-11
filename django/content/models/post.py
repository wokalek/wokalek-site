from blog.models import Post as PostModel


class Post(PostModel):
    class Meta:
        proxy = True
        verbose_name = PostModel._meta.verbose_name
        verbose_name_plural = PostModel._meta.verbose_name_plural
