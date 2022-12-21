const AbstractPage = require("./AbstractPage");

class BoardPage extends AbstractPage {
  get addListBtn() {
    return $('//*[@class="open-add-list js-open-add-list"]')
  }
  get inputListName() {
    return $('//*[@class="list-name-input"]')
  }
  get submitBtn() {
    return $('//*[@class="nch-button nch-button--primary mod-list-add-button js-save-edit"]')
  }
  get listCreated() {
    return $('//*[@class="list-header-target js-editing-target"]')
  }

  async visit() {
        await browser.url("https://trello.com/b/wYIdWjr5/hh")
        await browser.pause(7000)
    }

    async createList() {
        await (await this.addListBtn).waitForEnabled()
        await (await this.addListBtn).click()
        //await (await this.inputListName).waitForEnabled()
        await (await this.inputListName).setValue("My Awesome List")
        await (await this.submitBtn).waitForEnabled()
        return this.submitBtn.click();
  }

   async assertListCreated() {
        await (await this.listCreated).waitForDisplayed()
        await expect(this.listCreated).toBeDisplayed()
   } 
}


module.exports = new BoardPage();