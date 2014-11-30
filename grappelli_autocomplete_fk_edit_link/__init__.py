from django.contrib.admin import ModelAdmin


class AutocompleteEditLinkAdminMixin(ModelAdmin):
    class Media:
        js = [
              'admin/js/autocomplete-fk-edit-link.js'
              ]
