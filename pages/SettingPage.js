const { element } = require("protractor");

let settingsPage = function(){

    let provoiderNameOption = element(by.id('adf-provider-selector'));
    let applyButton = element(by.id('host-button'));

    this.get = function(url){
        browser.get(url);
        browser.sleep(3000);
    }

    this.selectProvoiderNameOption = function(providerName){
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.elementToBeClickable(provoiderNameOption), 5000);
        provoiderNameOption.sendKeys(providerName);
    }

    this.clickApplyButton = function(){
        applyButton.click();
        browser.sleep(3000);
    }
};

module.exports = new settingsPage();