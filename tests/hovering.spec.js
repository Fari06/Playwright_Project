import { test } from '@playwright/test';

test('hover multiple layers', async ({ page }) => {

    await page.goto("https://tgsouthernpower.org/");

    console.log("Page opened successfully");

    await page.getByRole("link", { name: 'Renewable Energy '}).hover();

    await page.waitForTimeout(2000);

    // await page.getByRole("link", { name: 'Renewable Energy '}).hover();

    // await page.waitForTimeout(2000);

    // await page.waitForTimeout(3000);

})