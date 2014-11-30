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

                    var objectID = input.val();
                    if (objectID) {
                        var editURL = lookupURL.split('?', 1)[0] + objectID + '/';
                        editLink = $('<a style="position:relative;top:5px;margin-left:20px;white-space:nowrap;font-weight:bold;" href="' + editURL + '">Edit</a>');
                        editLink.insertAfter(wrapper);
                    }
                };
                input.focus(updateLink);
                updateLink();
            });
        });
    });
})(grp.jQuery);
