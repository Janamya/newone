const AbstractPage = require("./AbstractPage");
const { visit } = require("./BoardPage");

class CreateCardBoardPage extends AbstractPage {
    get addCardBtn() {
        return $('//*[@class="js-add-a-card"]')
    }
    get inputTitle() {
        return $('//*[@class="list-card-composer-textarea js-card-title"]')
    }
    get submitCard() {
        return $('//*[@class="nch-button nch-button--primary confirm mod-compact js-add-card"]')
    }
    get assertCardTitle() {
        return $('//*[@class="list-card-title js-card-name"]')
    }

    async visit() {
        await browser.url("https://trello.com/b/wYIdWjr5/hh")
    }
    async createCard() {
        await (await this.addCardBtn).waitForEnabled();
        await (await this.addCardBtn).click();
        await (await this.inputTitle).waitForEnabled();
        await (await this.inputTitle).setValue("My Awesome Card");
        //await browser.pause(2000)
        await (await this.submitCard).waitForEnabled();
        return (await this.submitCard).click()
    }
    async assertCardCreated() {
        await expect(this.assertCardTitle).toBeDisplayed()
    }
    //async assertCardCreated() {
        //await expect(this.assertCardTitle[0]).toExist()}, a tamo dva $$return jer je $$ array
    

}

module.exports = new CreateCardBoardPage()