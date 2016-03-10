# Django Grappelli Autocomplete Foreign Key Edit Link

django-grappelli-autocomplete-fk-edit-link provides a `ModelAdmin` mixin that adds edit links to autocomplete lookups.

Install using pip :

	pip install git+https://github.com/CrossWaterBridge/django-grappelli-autocomplete-fk-edit-link.git@master#egg=django-grappelli-autocomplete-fk-edit-link

Add `grappelli_autocomplete_fk_edit_link` to your `INSTALLED_APPS`:

	INSTALLED_APPS = (
		...
		'grappelli',
		'grappelli_autocomplete_fk_edit_link',
	)

Add the mixin to any `ModelAdmin` with one or more autocomplete foreign key lookup fields:

    from grappelli_autocomplete_fk_edit_link import AutocompleteEditLinkAdminMixin
    
    class MyAdmin(AutocompleteEditLinkAdminMixin, admin.ModelAdmin):
    	raw_id_fields = ['related_object']
		autocomplete_lookup_fields = {
			'fk': ['related_object'],
		}
