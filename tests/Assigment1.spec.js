import{test, expect} from '@playwright/test';

test('Assigment1', async({ page })=> {
await page.goto("https://practice-automation.com/form-fields/")
await page.locator("#name-input").fill("Farheen")
await page.getByLabel("Password").fill("password")
await page.getByLabel("Coffee").check()
await page.locator("#color1").click()
await page.locator("#automation").selectOption("Yes")
await page.locator("#email").fill("demo@test.com")
await page.getByPlaceholder("Enter message here").fill("Hello, this is my first automation script")
await page.waitForTimeout(4000);
await page.locator("#submit-btn").click()
await page.waitForTimeout(4000);
console.log("Application submitted successfully")
});