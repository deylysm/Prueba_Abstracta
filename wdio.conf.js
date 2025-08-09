// wdio.conf.js
export const config = {
  runner: 'local',
  automationProtocol: 'devtools',
  services: ['devtools'],

  framework: 'mocha',
  specs: ['./test/specs/**/*.e2e.js'],
  reporters: ['spec'],


  capabilities: [
    {
      browserName: 'chrome',
      'goog:chromeOptions': { args: ['--start-maximized'] },
    },
  ],

  baseUrl: 'http://opencart.abstracta.us/',
  waitforTimeout: 10000,
  mochaOpts: { ui: 'bdd', timeout: 60000 },

  afterTest: async function (test, context, { error }) {
    if (error) {
      await browser.saveScreenshot(`./screenshots/ERROR_${Date.now()}.png`);
    }
  },
};
