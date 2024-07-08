from django.contrib import admin

from blog.models import Post


class PostAdmin(admin.ModelAdmin):
    fields = ('create_date', 'update_date', 'pub_date', 'title', 'content')
    readonly_fields = ('update_date',)

    list_display = ('id', 'title', 'pub_date', 'create_date')
    list_filter = ('pub_date', 'create_date', 'update_date')
    ordering=('-pub_date',)

    def get_readonly_fields(self, request, obj=None):
        if obj:
            return self.readonly_fields + ('create_date',)

        return self.readonly_fields


admin.site.register(Post, PostAdmin)
