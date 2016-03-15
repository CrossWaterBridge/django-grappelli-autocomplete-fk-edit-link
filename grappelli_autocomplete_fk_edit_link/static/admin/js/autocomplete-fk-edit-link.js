(function($) {
    $(document).ready(function() {
        // Make sure this runs after the Django Grappelli inline handlers
        $(function() {
            $('.grp-autocomplete-wrapper-fk').each(function () {
                var wrapper = $(this);
                var input = wrapper.find('.vForeignKeyRawIdAdminField');
                var lookupURL = wrapper.find('.related-lookup').attr('href');

                var editLink = null;
                var updateLink = function () {
                    if (editLink) {
                        editLink.remove();
                        editLink = null;
                    }

                    var baseURL = lookupURL.split('?', 1)[0];
                    var addURL = baseURL + 'add/';

                    var linksDiv = '<div style="position:relative;top:0px;display:inline-block;">';

                    var objectID = input.val();
                    if (objectID) {
                        var editURL = baseURL + objectID + '/';
                        linksDiv += '<a style="display:inline-block;width:25px;height:25px;" class="icons-tools-viewsite-link" target="_blank" alt="Edit" href="' + editURL + '"></a>';
                    }
                    linksDiv += '<a style="display:inline-block;width:25px;height:25px;" class="icons-add-another" target="_blank" alt="Add" href="' + addURL + '"></a>'+
                        '</div>';

                    links = $(linksDiv);
                    links.insertAfter(wrapper);
                };
                input.focus(updateLink);
                updateLink();
            });
        });
    });
})(grp.jQuery);
