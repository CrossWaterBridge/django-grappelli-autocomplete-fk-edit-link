from distutils.core import setup

setup(
    name='django-grappelli-autocomplete-fk-edit-link',
    version='1.0.0dev',
    packages=['grappelli_autocomplete_fk_edit_link',],
    license='MIT',
    description='ModelAdmin mixin that adds edit links to Django Grappelli autocomplete lookups.',
    long_description=open('README.md').read(),
    install_requires=[
        'django-grappelli==2.6.3',
    ],
)
