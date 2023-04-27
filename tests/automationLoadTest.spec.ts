import { chromium, test , expect } from "@playwright/test";

const contacts={
    firstcontact:{
        firstname: "Ram",
        lastname: "bahadur",
        emailAddress:"rambdr@getnada.com",
        adressline1:"street4",
        country:"Nepal",
        City:"lahan",
        state:"madhesh",
        postal:"1254",
    },
    secondcontact:{
        firstname: "shyam",
        lastname: "sharma",
        emailAddress:"shyamsharma@getnada.com",
        adressline1:"street3",
        country:"Nepal",
        City:"katmanndu",
        state:"bagmati",
        postal:"1244",
    },
    thirdcontact:{
        firstname: "kaale",
        lastname: "singh",
        emailAddress:"kaalesingh@getnada.com",
        adressline1:"street4",
        country:"Nepal",
        City:"lahan",
        state:"madhesh",
        postal:"1254",
    },
}
const stripepayment={
    cardNumber:"4242 4242 4242 4242",
    date:"11/40",
    cvc:"111",
    zip:'11111'
}

test.describe.configure({ mode: 'parallel' });
 test("fill form 1", async({ page }) => {
    await page.goto("https://give-test4.keela.co/test-form3");
    await page.getByText("One-Time").click();
    await page.getByText("$20").click();
    await page.getByRole("checkbox").uncheck();
    await page.getByText("donate").click();
    await page.getByText("keep my one-time").click();

    await page.getByPlaceholder("First Name").fill(contacts.firstcontact.firstname);
    await page.getByPlaceholder("Last Name").fill(contacts.firstcontact.lastname);
    await page.getByRole("checkbox").uncheck();
    await page.getByPlaceholder("Email Address").fill(contacts.firstcontact.emailAddress);
    await page.getByText("continue").click();
    await page.getByPlaceholder("Address Line 1").fill(contacts.firstcontact.adressline1);
    await page.getByRole('combobox').selectOption(contacts.firstcontact.country);
    await page.getByPlaceholder("City").fill(contacts.firstcontact.City);
    await page.getByPlaceholder("State/Province").fill(contacts.firstcontact.state);
    await page.getByPlaceholder("Postal/Zip").fill(contacts.firstcontact.postal);
    await page.getByText("Continue").click();
    const stripeIframe = await page.waitForSelector('iframe');
    const stripeFrame = await stripeIframe.contentFrame();
    if (!stripeFrame) throw Error('stripe frame not found');
    const cardNumInput = await stripeFrame.waitForSelector('input[name="cardnumber"]');
    await cardNumInput.fill(stripepayment.cardNumber);
    const cardExpInput = await stripeFrame.waitForSelector('input[name="exp-date"]');
    const cardCVCInput = await stripeFrame.waitForSelector('input[name="cvc"]');
    const cardZipInput = await stripeFrame.waitForSelector('input[name="postal"]');
    await cardExpInput.fill(stripepayment.date);
    await cardCVCInput.fill(stripepayment.cvc);
    await cardZipInput.fill(stripepayment.zip);
    await page.getByText("donate").click();
    await page.waitForTimeout(10000);
})

test("fill form 2", async({ page }) => {
    await page.goto("https://give-test4.keela.co/test-form3");
    await page.getByText("One-Time").click();
    await page.getByText("$20").click();
    await page.getByRole("checkbox").uncheck();
    await page.getByText("donate").click();
    await page.getByText("keep my one-time").click();

    await page.getByPlaceholder("First Name").fill(contacts.secondcontact.firstname);
    await page.getByPlaceholder("Last Name").fill(contacts.secondcontact.lastname);
    await page.getByRole("checkbox").uncheck();
    await page.getByPlaceholder("Email Address").fill(contacts.secondcontact.emailAddress);
    await page.getByText("continue").click();
    await page.getByPlaceholder("Address Line 1").fill(contacts.secondcontact.adressline1);
    await page.getByRole('combobox').selectOption(contacts.secondcontact.country);
    await page.getByPlaceholder("City").fill(contacts.secondcontact.City);
    await page.getByPlaceholder("State/Province").fill(contacts.secondcontact.state);
    await page.getByPlaceholder("Postal/Zip").fill(contacts.secondcontact.postal);
    await page.getByText("Continue").click();
    const stripeIframe = await page.waitForSelector('iframe');
    const stripeFrame = await stripeIframe.contentFrame();
    if (!stripeFrame) throw Error('stripe frame not found');
    const cardNumInput = await stripeFrame.waitForSelector('input[name="cardnumber"]');
    await cardNumInput.fill(stripepayment.cardNumber);
    const cardExpInput = await stripeFrame.waitForSelector('input[name="exp-date"]');
    const cardCVCInput = await stripeFrame.waitForSelector('input[name="cvc"]');
    const cardZipInput = await stripeFrame.waitForSelector('input[name="postal"]');
    await cardExpInput.fill(stripepayment.date);
    await cardCVCInput.fill(stripepayment.cvc);
    await cardZipInput.fill(stripepayment.zip);
    await page.getByText("donate").click();
    await page.waitForTimeout(10000);
}) 

/* test("fill form 3", async({ page }) => {
    await page.goto("https://give-test4.keela.co/test-form3");
    await page.getByText("One-Time").click();
    await page.getByText("$20").click();
    await page.getByRole("checkbox").uncheck();
    await page.getByText("donate").click();
    await page.getByText("keep my one-time").click();

    await page.getByPlaceholder("First Name").fill(contacts.thirdcontact.firstname);
    await page.getByPlaceholder("Last Name").fill(contacts.thirdcontact.lastname);
    await page.getByRole("checkbox").uncheck();
    await page.getByPlaceholder("Email Address").fill(contacts.thirdcontact.emailAddress);
    await page.getByText("continue").click();
    await page.getByPlaceholder("Address Line 1").fill(contacts.thirdcontact.adressline1);
    await page.getByRole('combobox').selectOption(contacts.thirdcontact.country);
    await page.getByPlaceholder("City").fill(contacts.thirdcontact.City);
    await page.getByPlaceholder("State/Province").fill(contacts.thirdcontact.state);
    await page.getByPlaceholder("Postal/Zip").fill(contacts.thirdcontact.postal);
    await page.getByText("Continue").click();
    const stripeIframe = await page.waitForSelector('iframe');
    const stripeFrame = await stripeIframe.contentFrame();
    if (!stripeFrame) throw Error('stripe frame not found');
    const cardNumInput = await stripeFrame.waitForSelector('input[name="cardnumber"]');
    await cardNumInput.fill(stripepayment.cardNumber);
    const cardExpInput = await stripeFrame.waitForSelector('input[name="exp-date"]');
    const cardCVCInput = await stripeFrame.waitForSelector('input[name="cvc"]');
    const cardZipInput = await stripeFrame.waitForSelector('input[name="postal"]');
    await cardExpInput.fill(stripepayment.date);
    await cardCVCInput.fill(stripepayment.cvc);
    await cardZipInput.fill(stripepayment.zip);
    await page.getByText("donate").click();
    await page.waitForTimeout(5000);
}) */