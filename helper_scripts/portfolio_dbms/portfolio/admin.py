from django.contrib import admin
from .models import Games, Resources

class GamesAdmin(admin.ModelAdmin):
    list_display = ['__str__', 'get_display_rating', 'included']
    search_fields = ['title','studio']

class ResourcesAdmin(admin.ModelAdmin):
    list_display = ['__str__', 'get_display_rating', 'included']
    search_fields = ['title','studio']

admin.site.register(Games, GamesAdmin)
admin.site.register(Resources, ResourcesAdmin)