module.exports = class homePage {
    constructor() {
        //Локаторы для входа в личный кабинете.
        this.buttonSignIn = element(by.xpath('//button[@data-test="signIn"]'));
        this.windowModalLogin = element(by.xpath('//div[@class="style__authModal___Q8_lM"]'));
        this.emailCustomerLocator = element(by.xpath('//input[@data-test="email"]'));
        this.passwordCustomerLocator = element(by.xpath('//input[@data-test="password"]'));
        this.buttonEnter = element(by.xpath('//button[@data-test="LogIn"]'));
        this.instagramPost = element(by.xpath('//a[@data-value="instagramSM"]'));
        this.titleCreateDasgin = element(by.xpath('//p[@class="style__leftPanelTitle___1Ln2s"]'));
        this.buttonDownload = element(by.xpath('//button[@data-test="load"]'));
        this.windowDownload = element(by.xpath('//div[@class="style__downloadModalWrapper___1XUXM"]'));
        this.buttonDownloadJpg = element(by.xpath('//button[@data-test="downloadJpg"]'));
    }
    setLoginCustomer(userName) {
        return this.emailCustomerLocator.sendKeys(userName);
    }
    setPasswordCustomer(userPassword) {
        return this.passwordCustomerLocator.sendKeys(userPassword);
    }
    async enterAccountCustomer(login, pass) {
        try {
            await this.setLoginCustomer(login);
            await this.setPasswordCustomer(pass);
            await this.buttonEnter.click();
        } catch (err) {
            fail(err)
        }
    }
};
