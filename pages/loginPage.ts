import { chromium, Page } from '@playwright/test' ;
import{ test, expect } from '@playwright/test';

export default class LoginPage{
    constructor (public page:Page){
    }

     user_email_field = this.page.locator("//input[@id='user-email']");
     password_field = this.page.locator("//input[@id='user-password']");
     login_button = this.page.locator("//button[normalize-space()='Log in']");
     register_organization = this.page.locator(" //a[normalize-space()='Register Organization']");
     forgot_password = this.page.locator("//a[normalize-space()='Forgot Password?']");

     async loginKeela(email:string, password:string){
        await this.page.goto("./");
        await this.user_email_field.type(email);
        await this.password_field.type(password);
        await this.login_button.click();
     }
}

