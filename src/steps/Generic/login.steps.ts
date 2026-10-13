import { step } from "../../common/decorators";
import Environment from "../../lib/environment";
import LoginPage from "../../page-objects/DEMO/login-page";
import { Page } from "@playwright/test";

export default class LoginSteps{
    public env = new Environment();
    public loginPage: LoginPage;

    public constructor(page: Page) {
        this.loginPage = new LoginPage(page);
    }

    @step
    public async openBaseUrl(){
        const baseUrl = this.env.baseUrl;
        await this.loginPage.goToUrl(baseUrl,{waitForState: 'domcontentloaded'});
    }
}