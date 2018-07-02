import {LoginPage} from '../page-objects/pages/login/login.po';
import {LoginPageHelper} from '../page-objects/pages/login/login-page.helper';
import {browser, By, element, ExpectedConditions} from 'protractor';

describe('G mail suite', () => {
    let loginPageHelper: LoginPageHelper;

    beforeEach(() => {
        loginPageHelper = new LoginPageHelper();
    });

    it('Send email', async () => {
        const user1 = browser.params.user1;
        await loginPageHelper.goToPage();
        await LoginPage.username.sendKeys(user1.username);

        await element(By.id('identifierNext')).click();
        await browser.wait(ExpectedConditions.visibilityOf(LoginPage.password));

        await LoginPage.password.sendKeys(user1.password);

        await browser.sleep(5000);
        await LoginPage.passwordNextButton.click();
        await browser.wait(ExpectedConditions.visibilityOf(element(By.xpath(`//*[@role='button' and (.)='COMPOSE']`))));

        await element(By.xpath(`//*[@role='button' and (.)='COMPOSE']`)).click();

        await browser.sleep(15000);
        await element(By.css('[name="to"]')).clear();
        await element(By.css('[name="to"]')).sendKeys('secondUser@gmail.com');

        await loginPageHelper.click(element(By.xpath('//*[@role="button" and text()="Send"]')));

        await browser.sleep(15000);
    });
});
