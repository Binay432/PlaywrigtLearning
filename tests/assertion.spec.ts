import { test, expect } from '@playwright/test';

test("Validate attributes", async ({ page }) => {
    page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const messageinfo = page.locator("input#user-message");
    await messageinfo.scrollIntoViewIfNeeded(); //it scroll the page if the element doesnot appear in the mainframe , useful for screenrecord
    console.log(await messageinfo.getAttribute("placeholder"));
    expect(messageinfo).toHaveAttribute("placeholder","Please enter your Message");

    let test_text = 'hey this is a test message';
    console.log("before entering data:" + await messageinfo.inputValue());
    await messageinfo.type(test_text);
    console.log("after entering data:" + await messageinfo.inputValue());
})
