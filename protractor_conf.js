let HtmlReporter = require('protractor-beautiful-reporter');
let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    /*suites: {
        smoke: './smoke/!*.js', // $ protractor protractor.conf.js --suite smoke
    },*/
    specs: ['./test/download.js',
    ],

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 120000,
        isVerbose: true
    },
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            prefs: {
                download: {
                    prompt_for_download: false,
                    default_directory: 'C:/Users/Роман/Desktop/download/',
                    directory_upgrade: true
                },
            }
        }
    },
    onPrepare: function () {
        // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: 'tmp/screenshots'
        }).getJasmine2Reporter());

        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
                displayStacktrace: true
            }
        }));
        global.crello = 'https://crello.com/ru/';
    }
};