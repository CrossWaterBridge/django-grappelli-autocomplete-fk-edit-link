from setuptools import setup

setup(
    name='django-grappelli-autocomplete-fk-edit-link',
    version='0.1.1',
    packages=['grappelli_autocomplete_fk_edit_link',],
    include_package_data=True,
    license='MIT',
    description='ModelAdmin mixin that adds edit links to Django Grappelli autocomplete lookups.',
    url='https://github.com/CrossWaterBridge/django-grappelli-autocomplete-fk-edit-link',
    download_url='https://github.com/CrossWaterBridge/django-grappelli-autocomplete-fk-edit-link/tarball/0.1.0',
    install_requires=[
        'django-grappelli>=2.6.3',
    ],
)
