const {test, expect} = require('@playwright/test');

process.env.PWDEBUG = '0';

test.describe("Another Case", () => {

    test('Download file Test', async ({ page }) => {

        await page.goto('https://the-internet.herokuapp.com/download');

        const [ download ] = await Promise.all([
            page.waitForEvent('download'),
            page.locator('a[href="download/test.txt"]').click()
        ]);

        await download.saveAs('./downloads/text.txt');

    });


    test('Upload file Test', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/upload');
    
        await page.setInputFiles('input[type="file"]', './downloads/text.txt');
        await page.locator('#file-submit').click();
    
        await expect(page.locator('text=File Uploaded!')).toBeVisible();
    
        const uploadedFileName = await page.locator('#uploaded-files').textContent();
        expect(uploadedFileName.trim()).toBe('text.txt');
    });

    // npx playwright pdf https://parabank.parasoft.com/parabank/services.htm sample.pdf
    test.only("PDF Test", async ({ page }) => {

        await page.goto('parabank.parasoft.com/parabank/services.htm');

    })

})