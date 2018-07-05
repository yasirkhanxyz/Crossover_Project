import {LoginPage} from '../page-objects/pages/login/login.po';
import {LoginPageHelper} from '../page-objects/pages/login/login-page.helper';
import {browser,ExpectedConditions} from 'protractor';


describe('G mail suite', () => {
    let loginPageHelper: LoginPageHelper;
    

    beforeEach(() => {
        loginPageHelper = new LoginPageHelper();
    });

    it('Send email', async () => {
        const user1 = browser.params.user1;
        await loginPageHelper.goToPage();
        const X1 = await loginPageHelper.SignInlabel();
        console.log(X1 + 'Page Loaded Successfully');
        await LoginPage.username.sendKeys(user1.username);

        await LoginPage.UserNextButton.click();
        await browser.wait(ExpectedConditions.visibilityOf(LoginPage.password));

        await LoginPage.password.sendKeys(user1.password);

        await browser.sleep(5000);
        await LoginPage.passwordNextButton.click();
        await browser.sleep(50000);
        const X2 = await loginPageHelper.LoggedIn();
        if (X2 == true)
        {
            console.log("User Logged In Succesfully");
        }
        else {
            console.log("User Failed To log in or Element Failed to Locate");
        }
        await browser.wait(ExpectedConditions.visibilityOf(LoginPage.ComposeButton));
        await LoginPage.ComposeButton.click();
        await browser.sleep(3000);
        await LoginPage.SendToTextBox.clear();
        await LoginPage.SendToTextBox.sendKeys(user1.username);
        await LoginPage.SubjectTextBox.clear();
        await LoginPage.SubjectTextBox.sendKeys('Yasir sent you this with this subject');
        await LoginPage.BodyTextBox.click();
        await LoginPage.BodyTextBox.sendKeys('Yasir sent you with this Body');
        await LoginPage.SentButton.click();

        await browser.sleep(5000);
    });
});
