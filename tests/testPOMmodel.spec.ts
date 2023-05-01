import {test, expect} from "@playwright/test";
import LoginPage from "../pages/loginPage";


const Email= "binay@getnada.com";
const Paas = "Binay@keela123";
test("tesing login data", async ({ page, baseURL }) => {
    const loginpage = new LoginPage(page);
    await loginpage.loginKeela(Email,Paas);
    await page.waitForTimeout(5000);
})