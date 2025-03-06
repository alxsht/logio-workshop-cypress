exports.config = {
  runner: 'local',
  specs: ['./tests/**/*.js'],
  maxInstances: 100,
  capabilities: [{
      maxInstances: 5,
      browserName: 'chrome',
      acceptInsecureCerts: true
  }],
  logLevel: 'info',
  bail: 0,
  baseUrl: 'https://your-app-url.com',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  services: ['chromedriver'],
  framework: 'mocha',
  reporters: ['spec', [
      'html-nice', {
          outputDir: './reports/html-reports',
          filename: 'test-report.html',
          reportTitle: 'WDIO Test Report'
      }
  ]],
  mochaOpts: {
      ui: 'bdd',
      timeout: 60000
  },
  onPrepare: function () {
      console.log('Starting test execution...');
  },
  beforeTest: function (test) {
      browser.setTimeout({ 'pageLoad': 2000 });
  },
  afterTest: function (test, context, { error, result, duration, passed }) {
      if (!passed) {
          browser.saveScreenshot(`./reports/screenshots/${test.title}.png`);
      }
  },
  onComplete: function () {
      console.log('Tests completed!');
  }
};

// JMeter Configuration
const { exec } = require('child_process');
exec('jmeter -n -t ./jmeter-tests/load-test.jmx -l ./jmeter-results/result.jtl', (error, stdout, stderr) => {
  if (error) {
      console.error(`Error executing JMeter: ${error.message}`);
      return;
  }
  if (stderr) {
      console.error(`JMeter stderr: ${stderr}`);
      return;
  }
  console.log(`JMeter output: ${stdout}`);
});
