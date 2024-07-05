from django.contrib import admin

from medialibrary.models import Section


class SectionAdmin(admin.ModelAdmin):
    fields = ('create_date', 'update_date', 'name')
    readonly_fields = ('update_date',)

    list_display = ('id', 'name', 'create_date')
    list_filter = ('create_date',)

    def get_readonly_fields(self, request, obj=None):
        if obj:
            return self.readonly_fields + ('create_date',)

        return self.readonly_fields


admin.site.register(Section, SectionAdmin)
