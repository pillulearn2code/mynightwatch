const seleniumHost = 'hub-cloud.browserstack.com';
const seleniumPort = 80;

const BROWSERSTACK_CONFIG = {
  selenium: {
    start_process: false,
    host: seleniumHost,
    port: seleniumPort
  },
  test_settings: {
    default: {
      desiredCapabilities: {
        'browserstack.user': '',
        'browserstack.key': '',
        'browserstack.local': false,
        browser: 'chrome',
        acceptSslCerts: true
      },
      selenium_host: seleniumHost,
      selenium_port: seleniumPort
    }
  },
  src_folders: ['./test/scenario/google.js'],
  //page_objects_path: 'test/functional/pages'
};

module.exports = BROWSERSTACK_CONFIG;