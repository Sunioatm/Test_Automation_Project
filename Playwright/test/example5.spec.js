const {test, expect} = require('@playwright/test');

process.env.PWDEBUG = '0';

test.describe("Another Case", () => {

    test('Checkbox Test', async ({ page }) => {

        await page.goto('https://the-internet.herokuapp.com/checkboxes');
        await page.locator('input[type="checkbox"]').first().check();
        await page.locator('input[type="checkbox"]').nth(1).uncheck();

    });

    test("Drag and Drop Test", async ({ page }) => {

        await page.goto('https://the-internet.herokuapp.com/drag_and_drop');
        await page.dragAndDrop('#column-a', '#column-b');

        expect(await page.locator('#column-a').textContent()).toBe('B');

    })

    test("Dropdown Test", async ({ page }) => {

        await page.goto('https://the-internet.herokuapp.com/dropdown');
        await page.selectOption('select', '2');

        expect(await page.locator('option[selected]').textContent()).toBe('Option 2');

    })

    test("iFrame Test", async ({ page }) => {

        await page.goto('https://the-internet.herokuapp.com/iframe')
        const frame = page.frameLocator('#mce_0_ifr').locator('html')
        await frame.click()
        await frame.type('Hello World!')

    })

    test.only("Hover Test", async ({ page }) => {

        await page.goto('https://the-internet.herokuapp.com/hovers')
        await page.hover('[alt="User avatar"]')
        await expect(page.locator('text=name: user1')).toBeVisible()

        await page.locator('text=View profile').first().click()

    })

})