const { test, expect } = require('@playwright/test');

process.env.PWDEBUG = '0';

test.describe("Example", () => { 

    test("Test Selectors", async ({ page }) => {
        await page.goto("https://demoqa.com/text-box");
        
        // Fill the form
        await page.fill("#userName", "John Doe");
        await page.fill("#userEmail", "example@email.com");
        await page.fill("#currentAddress", "123 Main St");
        await page.fill("#permanentAddress", "456 Elm St");
        await page.click("text=Submit"); // Submit the form
    
        // Correct locators for output area
        const name = page.locator("#output #name");
        const email = page.locator("#output #email");
        const currentAddress = page.locator("#output #currentAddress");
        const permanentAddress = page.locator("#output #permanentAddress");
    
        // Assertions for displayed results
        await expect(name).toBeVisible();
        await expect(name).toHaveText("Name:John Doe");
    
        await expect(email).toBeVisible();
        await expect(email).toHaveText("Email:example@email.com");
    
        await expect(currentAddress).toBeVisible();
        await expect(currentAddress).toHaveText("Current Address :123 Main St");
    
        await expect(permanentAddress).toBeVisible();
        await expect(permanentAddress).toHaveText("Permananet Address :456 Elm St");
    });
    
    test("Test URL assertions", async ({ page }) => {
        await page.goto("https://demoqa.com/text-box");
        await expect(page).toHaveTitle("DEMOQA");
        await expect(page.url()).toBe("https://demoqa.com/text-box");
    })

})