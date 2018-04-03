'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
    const app = new EmberApp(defaults, {
        'ember-bootstrap': {
            bootstrapVersion: 3,
            importBootstrapFont: true,
            importBootstrapCSS: false,
        },
        sassOptions: {
            includePaths: [
                'node_modules/@centerforopenscience/osf-style/sass',
            ],
        },
        'ember-cli-babel': {
            includePolyfill: true,
        },
    });

    return app.toTree();
};
