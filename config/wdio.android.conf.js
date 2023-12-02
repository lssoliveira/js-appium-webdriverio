const path = require('path');
const { config } = require('./wdio.shared.conf');

// ======Runner======
config.services = [
    ['appium', {
        args: {
            address: 'localhost',
            port: 4723,
            basePath: '/wd/hub',
            relaxedSecurity: true
        },
        logPath: './'
    }]
],

// ======Capabilities======
config.capabilities = [
    {
        platformName: "Android",
        "appium:platformVersion": "11.0",
        "appium:deviceName": "Pixel_3a_API_30",
        "appium:automationName": "UIAutomator2",
        "appium:app": path.join(process.cwd(), "app/android/colorNote.apk"),
        "appium:autoGrantPermissions": true
    }
];

// ======specs======
// config.specs = [
//     path.join(process.cwd(), './test/specs/android/colorNote/delete-note.spec.js')
// ];

exports.config = config;