let homepage = require('../pages/homepage');

describe('demo calculator test', function () {

    it('addition test', function () {

        homepage.get('http://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNum('3');

        homepage.enterSecondNum('2');

        homepage.clickGo();

        homepage.verifyResult('5');

    });
});