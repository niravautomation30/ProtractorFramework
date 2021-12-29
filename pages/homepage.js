let homepage = function () {

    var input1 = element(by.model('first'));

    var input2 = element(by.model('second'));

    var goButton = element(by.buttonText('Go!'));

    this.get = function (url) {
        browser.get(url);
    };

    this.enterFirstNum = function (firstNo) {
        input1.sendKeys(firstNo);
    };

    this.enterSecondNum = function (secondNo) {
        input2.sendKeys(secondNo);
    };

    this.clickGo = function () {
        goButton.click();
    };

    this.verifyResult = function (result) {
        var output = element(by.cssContainingText('.ng-binding', result));

        expect(output.getText()).toEqual(result);
    };
};
module.exports = new homepage();