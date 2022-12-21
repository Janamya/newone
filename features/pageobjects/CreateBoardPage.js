const AbstractPage = require("./AbstractPage");

class CreateBoardPage extends AbstractPage {
    get createNewBoardBtn() {
        return $('//*[@data-testid="create-board-tile"]')
    }
    get inputTitle() {
        return $('//*[@data-testid="create-board-title-input"]')
    }
    get createButton() {
        return $('//*[@data-testid="create-board-submit-button"]')
    }
    get board() {
        return $('//*[@id="board"]')
    }

    async visit() {
        await browser.url("https://trello.com/w/workspace86156b488eea22c537b353b793b7881c/home")
    }
    async fillBoardForm() {
        await (await this.createNewBoardBtn).click()
        await browser.pause(2000)
        await (await this.inputTitle).waitForEnabled()
        await (await this.inputTitle).setValue("My awesome board")
        await (await this.createButton).waitForClickable()
        await (await this.createButton).click();
    }
    async assertBoardCreated() {
        await this.board.waitForExist()
        await expect(this.board).toBeDisplayed()
    }
}

module.exports = new CreateBoardPage();