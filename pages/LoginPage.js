const { element, browser } = require("protractor")
let globalParams = require('../resources/GlobalParams.json');

let loginPage = function(){

    let userNameText = element(by.id('username'));
    let passWordText = element(by.id('password'));
    let signInButton = element(by.id('login-button'));

    this.enterUserNameText = function(userName){

        userNameText.sendKeys(userName)
    };

    this.enterPassWordText = function(password){
        passWordText.sendKeys(password);
    };

    this.clickSignInButton = function(){
        signInButton.click();
    }

    this.get = function(url){
        browser.get(url);
    }
};

module.exports = new loginPage();