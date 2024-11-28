// @ts-check
const { devices, expect } = require('@playwright/test');


const config = {
testDir: './tests',
  /* Run tests in files in parallel */
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
timeout: 30 * 1000,
expect: {
  timeout: 5000
},
reporter: 'html',
  use: {
    screenshot : 'only-on-failure',
    headless : false,
    trace : 'on'
  }
};
