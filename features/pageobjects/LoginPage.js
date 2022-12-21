const AbstractPage = require("./AbstractPage");

class LoginPage extends AbstractPage{
    get inputEmail() {
        return $('//*[@id="user"]')
    }
    get continueBtn() {
        return $('//*[@value="Continue"]')
    }
    get inputPassword() {
        return $('//*[@id="password"]')
    }
    get loginSubmit() {
        return $('//*[@id="login-submit"]')
    }
    get trelloHomepage(){
        return $('//*[@id="popover-boundary"]')
    }

    //This getter is for negative test
    get loginError() {
        return $('//*[@id="login-error"]')
    }


    async visit() {
        await browser.url("https://trello.com/login")
    } 
    
    async login(password) {
        await (await this.inputEmail).setValue('lamija.pehilj@gmail.com')
    
        await (await this.continueBtn).waitForEnabled()
        await (await this.continueBtn).click()
        //await browser.pause(7000)
        await (await this.inputPassword).waitForDisplayed()
        await (await this.inputPassword).setValue(password)
        await (await this.loginSubmit).waitForEnabled()

        return (await this.loginSubmit).click()

    }

    async assertLogin() {
        await browser.pause(7000)

        await expect(this.trelloHomepage).toBeDisplayed()
    }

    async errorMessage() {
        await expect(this.loginError).toHaveTextContaining('Incorrect email address and / or password.')
    }

}


module.exports = new LoginPage()