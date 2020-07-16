let settingsPage = require('../pages/SettingPage');
let loginPage = require('../pages/LoginPage');
let applicationPage = require('../pages/ApplicationPage');
let createFolder = require('../pages/CreateFolder');
let yargs = require('yargs');
let globalParams = require('../resources/GlobalParams.json');
const { browser } = require('protractor');

describe("Create new folder", function()
{
    var alertMessageTryADifferentName  = "There's already a folder with this name. Try a different name.";
    var alertTestDeletedMessage = globalParams.folderName+" deleted";

    it('navigate to settings page',function(){
        settingsPage.get(globalParams.settingsPageURL);
        expect(browser.getCurrentUrl()).toBe(globalParams.settingsPageURL);
    });

    it('select provider name and proceed', function(){
        settingsPage.selectProvoiderNameOption(globalParams.providerName);
        settingsPage.clickApplyButton();
    });

    it('navigate to login page', function(){
        expect(browser.getCurrentUrl()).toBe(globalParams.loginPageURL);
    });

    it('provide login details and proceed', function(){
        loginPage.enterUserNameText(yargs.argv.userName);
        loginPage.enterPassWordText(yargs.argv.passWord);
        loginPage.clickSignInButton();
        expect(browser.getCurrentUrl()).toBe(globalParams.homePageURL);
    });

    it('navigate to files page', function(){
        applicationPage.get(globalParams.filesPageURL);
        expect(browser.getCurrentUrl()).toBe(globalParams.filesPageURL);
    });

    it('create new folder', function(){
        createNewFolder(globalParams.folderName);
        createNewFolder(globalParams.folderName);
        var messagePopup = element(by.cssContainingText('div[class="cdk-global-overlay-wrapper"]', alertMessageTryADifferentName));
        expect(messagePopup.getText()).toBe(alertMessageTryADifferentName);
        createFolder.clickCancelButton();
    });

    it('delete created folder name', function(){
        applicationPage.deleteCreatedFolder(globalParams.folderName);
        var messagePopup = element(by.cssContainingText('div[class="cdk-global-overlay-wrapper"]', alertTestDeletedMessage));
        expect(messagePopup.getText()).toBe(alertTestDeletedMessage);
    });

    function createNewFolder(folderName){
        applicationPage.clickCreateNewFolderButton();
        createFolder.enterFolderNameText(folderName);
        createFolder.clickCreateButton();
    };

});