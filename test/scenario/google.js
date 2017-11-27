
this.demoTestGoogle = function (browser) {
      browser
        .url('http://www.google.com')
        .waitForElementVisible('body', 1000)
        .setValue('input[type=text]', 'developer klarna')
        .waitForElementVisible('input[name=btnK]', 1000)
        .click('input[name=btnK]')
        .pause(1000)
        .assert.containsText('#main', 'developer klarna')
    };