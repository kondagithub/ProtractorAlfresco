let createFolder = function(){

    let folderNameText = element(by.id('adf-folder-name-input'));
    let createButton = element(by.id('adf-folder-create-button'));
    let cancelButton = element(by.id('adf-folder-cancel-button'));

    this.enterFolderNameText = function(folderName){
        folderNameText.sendKeys(folderName);
    };

    this.clickCreateButton = function(){
        createButton.click();
    }

    this.clickCancelButton = function(){
        cancelButton.click();
    }

};

module.exports = new createFolder();