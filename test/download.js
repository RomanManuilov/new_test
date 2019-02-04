const HomePage = require('../pageObjects/homePage.js');
const fs = require('fs');
const homePage = new HomePage();
const EC = protractor.ExpectedConditions;

describe('Проверка скаченого файла', function () {
    beforeAll(() => {
        browser.waitForAngularEnabled(false);
        browser.get(global.crello);
    });
    afterAll(() => {
        fs.unlinkSync('C:\\Users\\Роман\\Desktop\\download\\Untitled design.jpeg');
    });
    it('Проверка скачивания файлов', async () => {
        try {
            await homePage.buttonSignIn.click();
            await browser.wait(EC.presenceOf(homePage.windowModalLogin), 5000, 'Окно логина не появилось');
            await homePage.enterAccountCustomer('m1r@inbox.ru','944908roman');
            await browser.wait(EC.presenceOf(homePage.titleCreateDasgin), 5000, 'ArtBoard не появилось');
            await homePage.instagramPost.click();
            await homePage.buttonDownload.click();
            await browser.wait(EC.presenceOf(homePage.windowDownload), 5000, 'Модалка download не понявилось');
            await homePage.buttonDownloadJpg.click();
            await browser.sleep(10000);
            const sizeFile = fs.statSync('C:\\Users\\Роман\\Desktop\\download\\Untitled design.jpeg');
            expect(sizeFile['size'] > 0).toBeTruthy();
            console.log(sizeFile['size']);
        } catch (err) {
            console.log(err)
        }
    });
});