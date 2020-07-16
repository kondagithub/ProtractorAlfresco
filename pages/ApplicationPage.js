const { browser } = require("protractor");

let applicationPage = function(){

    let createNewFolderButton = element(by.cssContainingText('span[class="mat-button-wrapper"]', 'create_new_folder'));
    let tableData = element.all(by.css('.adf-datatable-body adf-datatable-row'));

    this.get = function(url){
        browser.get(url);
    }

    this.clickCreateNewFolderButton = function(){
        createNewFolderButton.click();
    }

    this.deleteCreatedFolder = function(folderNameParam){
        tableData.each(function(rows){
            var cells = rows.all(by.css('div[role="gridcell"]'));
            cells.get(1).getText().then(function(folderName){
                if(folderName == folderNameParam){
                    cells.get(7).$('button').click();
                    element.all(by.css('.mat-menu-content button')).get(4).click();
                }
            });
            
        });
    }
};

module.exports = new applicationPage();