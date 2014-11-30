from django.contrib.admin.options import BaseModelAdmin


class AutocompleteEditLinkAdminMixin(BaseModelAdmin):
    class Media:
        js = [
              'admin/js/autocomplete-fk-edit-link.js'
              ]
