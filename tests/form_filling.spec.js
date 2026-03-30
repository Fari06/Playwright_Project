import{test, expect} from '@playwright/test';

test('form_filling', async({ page })=> {
await page.goto("https://testautomationpractice.blogspot.com/")
await page.getByPlaceholder("Enter Name").fill("Farheen")
await page.getByPlaceholder("Enter EMail").fill("farheen@example.com")
await page.getByRole("textbox", {name: "Phone"}).fill("123456")
await page.getByRole("textbox", {name: "Address"}).fill("R-202, New Delhi")
await page.locator("#female").click()
await page.getByLabel("Monday").check()
await page.locator ("#country").selectOption("Canada")
await page.locator ("#colors").selectOption("Yellow")
await page.locator ("#animals").selectOption("Elephant")
await page.locator ("#datepicker")
await page.waitForTimeout(4000);
});