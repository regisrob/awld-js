// Module: Papyri.info HTML

define(['jquery'], function($) {
    return {
        name: 'Papyri.info Text',
        dataType: 'html',
        type: 'text',
        corsEnabled: true,
        toDataUri: function(uri) {
            return uri;
        },
        parseData: function(html) {
            var getText = awld.accessor(html);
            var h3Arr = getText('h3')
            return {
                name: h3Arr[0],
                // description: ''
            };
        },
    };
});
