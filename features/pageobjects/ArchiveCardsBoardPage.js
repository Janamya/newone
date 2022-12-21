const AbstractPage = require("./AbstractPage");

class ArchiveCardsBoardPage extends AbstractPage {
    get elypsisBtn() {
        return $('//*[@class="list-header-extras-menu dark-hover js-open-list-menu icon-sm icon-overflow-menu-horizontal"]')
    }
    get archiveCardsBtn() {
        return $('//*[@class="js-archive-cards"]')
    }
    get archiveAllBtn() {
        return $('//*[@class="js-confirm full nch-button nch-button--danger"]')
    }
    get assertCardTitle() {
        return $('//*[@class="list-card-title js-card-name"]')
    }

    async visit() {
      await browser.url("https://trello.com/b/wYIdWjr5/hh")
    }
    async archiveCards() {
        await (await this.elypsisBtn).waitForEnabled()
        await (await this.elypsisBtn).click()
        await (await this.archiveCardsBtn).waitForEnabled()
        await (await this.archiveCardsBtn).click()
        await (await this.archiveAllBtn).waitForEnabled()
        await (await this.archiveAllBtn).click()
        await browser.pause(3000)
    }


    async assertCardsArchived() {
        await (await this.assertCardTitle).isExisting()
    }
}

module.exports = new ArchiveCardsBoardPage()