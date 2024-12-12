const {test, expect} = require('@playwright/test');

// npx playwright codegen --save-storage=auth.json parabank.parasoft.com
// npx playwright codegen --load-storage=auth.json parabank.parasoft.com

// npx playwright show-trace test-results\test-example3.storageState-Authentication-Saving-Credentials-chrome\trace.zip

process.env.PWDEBUG = '0';

test.describe("Authentication", () => {
    
    test.use({ storageState: 'auth.json' });

    test.beforeEach(async ({ page }) => {
        await page.goto('https://parabank.parasoft.com');
    });

    test('Saving Credentials', async ({ page }) => {
      await page.goto('https://parabank.parasoft.com/parabank/index.htm;jsessionid=B70EE8AA996BC5DC92B14363CBDBA8D4');
      await page.locator('input[name="username"]').click();
      await page.locator('input[name="username"]').fill('testergohome');
      await page.locator('input[name="username"]').press('Tab');
      await page.locator('input[name="password"]').fill('testergohome');
      await page.getByRole('button', { name: 'Log In' }).click();

      await page.context().storageState({ path: 'auth.json' });

    });


    test("Test Transfer Funds", async ({ page }) => {

        // await page.locator('text=Transfer Funds').click();
        // locator in a tag
        // await page.locator('a:has-text("Transfer Funds")').click();
        await page.click('a[href*="transfer"]'); // Matches any href containing "transfer"

    })

    test("Test Bill Pay", async ({ page }) => {

        await page.click('a[href*="billpay"]'); // Matches any href containing "transfer"

    })

})