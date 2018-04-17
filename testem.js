/* eslint-env node */

const DotReporter = require('testem/lib/reporters/dot_reporter');

module.exports = {
    framework: 'mocha',
    test_page: 'tests/index.html?hidepassed',
    disable_watching: true,
    reporter: new DotReporter(),
    launch_in_ci: [
        'Chrome',
        'Firefox',
    ],
    launch_in_dev: [
        'Chrome',
        'Firefox',
    ],
    browser_args: {
        Chrome: [
            '--headless',
            '--no-sandbox',
            '--remote-debugging-port=9222',
        ],
        Firefox: [
            '-headless',
        ],
    },
};
