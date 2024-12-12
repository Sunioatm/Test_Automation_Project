const { PlaywrightTestConfig } = require('@playwright/test');

const config = {
    retries: 0,
    // reporter: './reporter.js',
    timeout: 30000,
    use: {
        // baseURL: 'https://the-internet.herokuapp.com',
        headless: false, // Show browser window
        viewport: { width: 1280, height: 720 },
        // video: "retain-on-failure",
        video: "off",
        screenshot: "off",
        trace: "off",
    },
    projects: [
        {
            name: 'chrome',
            use: { browserName: 'chromium' }
        },
        // {
        //     name: 'firefox',
        //     use: { browserName: 'firefox' }
        // },
        // {
        //     name: 'webkit',
        //     use: { browserName: 'webkit' }
        // }
    ]
}

module.exports = config;