import {CommonPageHelper} from '../common/common-page.helper';
import {By, element} from "protractor";

export class LoginPageHelper extends CommonPageHelper {
   public async goToPage() {
        return super.goTo('/mail');
        
          }


    public async SignInlabel() {
        return element(By.id("headingText")).getText();
    }
    
    public async LoggedIn(){
       return element(By.id("gbqfb")).isPresent();
    }
}
