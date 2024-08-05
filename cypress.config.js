const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://uitestingplayground.com/',
    chromeWebSecurity: false,
    experimentalRunAllSpecs: true,
    specPattern: 'cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.js',
    fixturesFolder: false,
    testIsolation: true,
    screenshotOnRunFailure: true,
    video: false,
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 1000,
    pageLoadTimeout: 10000,
    retries: {
      runMode: 2,
      openMode: 0
    }
  }
});
