import { chromium, test } from "@playwright/test";

test("Login test demo", async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://ecommerce-playground.lambdatest.io/");
    await page.hover("//a[@data-toggle='dropdown']/div/span [contains(., 'My account')]");
    await page.click('text=login');
    await page.fill("input[name='email']", 'bijay@givmail.com');
    await page.fill("input[name='password']",'test@1234');
    await page.click("input[value='Login']");
    await page.waitForTimeout(5000);

    const context1 = await browser.newContext();
    const page1 = await context1.newPage();
    await page1.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/account');

    await page.waitForTimeout(5000);

})