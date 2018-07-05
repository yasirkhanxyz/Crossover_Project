import {By, element} from 'protractor';

export class LoginPage {
    static get password() {
        return element(By.name('password'));
    }

    static get username() {
        return element(By.id('identifierId'));
    }

    static get passwordNextButton() {
        return element(By.id('passwordNext'));
    }

    static get UserNextButton() {
        return element(By.id('identifierNext'));
    }    
    
    static get ComposeButton(){
        
        return element(By.xpath(`//*[@role='button' and (.)='COMPOSE']`));
        }

    static get SendToTextBox() {
        return element(By.css('[name="to"]'));
    }

    static get SubjectTextBox() {
        return element(By.css('[name="subjectbox"]'));
    }

    static get BodyTextBox() {
        return element(By.className("Am Al editable LW-avf"));
    }

    static get SentButton() {
        return element(By.xpath('//*[@role="button" and text()="Send"]'));
    }

}
