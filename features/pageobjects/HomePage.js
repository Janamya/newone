const AbstractPage = require("./AbstractPage");

class HomePage extends AbstractPage {
    get createWorkspaceBtn() {
        return $('//*[@class="icon-add icon-sm _9SWxH3f490pDnE"]')
    }
    get inputName() {
        return $('//*[@data-testid="header-create-team-name-input"]')
    }
    get selectBox() {
        return $('//*[@data-testid="header-create-team-type-input"]')
    }
    get option() {
        return $('//*[@id="react-select-3-option-2"]')
    }
    get continueButton() {
        return $('//*[@data-testid="header-create-team-submit-button"]')
    }
    get showLater() {
        return $('//*[@data-testid="show-later-button"]')
    }

    async visit() {
        await browser.url("https://trello.com/w/rrx63396246/home")
    }
   
    async assertWorkspaceForm() {
        await (await this.createWorkspaceBtn).waitForClickable()
        await (await this.createWorkspaceBtn).click()
        await (await this.inputName).waitForExist()
        await (await this.inputName).setValue("My Awesome Workspace")
        //await browser.keys['Enter'];
        
        await browser.pause(5000)
        await this.selectBox.click();
        await this.option.click();
        await browser.pause(3000)

        await (await this.continueButton).waitForEnabled()
        await (await this.continueButton).click()
        }
   
    async assertShowLater() {
        await (await this.showLater).waitForClickable()
        await this.showLater.click()
    }

}

module.exports = new HomePage()