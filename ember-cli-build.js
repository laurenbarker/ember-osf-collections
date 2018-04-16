'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const Funnel = require('broccoli-funnel');

module.exports = function(defaults) {
    const app = new EmberApp(defaults, {
        'ember-bootstrap': {
            bootstrapVersion: 3,
            importBootstrapFont: true,
            importBootstrapCSS: false,
        },
        sassOptions: {
            includePaths: [
                'node_modules/bootstrap-sass/assets/stylesheets',
                'node_modules/@centerforopenscience/osf-style/sass',
            ],
        },
        'ember-cli-babel': {
            includePolyfill: true,
        },
    });

    const assets = [
        new Funnel('node_modules/@centerforopenscience/osf-style/img', {
            srcDir: '/',
            destDir: 'img',
        }),
    ];

    return app.toTree(assets);
};
