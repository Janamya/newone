const AbstractPage = require("./AbstractPage");

class LogoutPage extends AbstractPage {
    get profileBtn() {
        return $('//*[@class="p6oJr7SHjK+vLr aqePx81u4BGHTH Glb3QqRGpd64YB"]')
    }
    get logoutBtn() {
        return $('//*[@data-testid="header-member-menu-logout"]')
    }
    get atlassianLogoutBtn() {
        return $('//*[@id="logout-submit"]')
    }
    //data-testid="logout-button"

    get homeText() {
        return $('//h1')
    }

    async visit() {
        await browser.url("https://trello.com/w/workspace86156b488eea22c537b353b793b7881c/home")
        await browser.pause(4000)
    }
    async logout() {
        await (await this.profileBtn).waitForEnabled()
        await (await this.profileBtn).click()
        await this.logoutBtn.waitForEnabled()
        await this.logoutBtn.click()
        await (await this.atlassianLogoutBtn).waitForEnabled()
        await (await this.atlassianLogoutBtn).click()
    }
    async assertLogout() {
        await (await this.homeText).waitForDisplayed()
        await expect(this.homeText).toHaveTextContaining("Trello brings all your tasks, teammates, and tools together")
    }
}

module.exports = new LogoutPage()