const {test, expect} = require('@playwright/test');

// process.env.PWDEBUG = '0';

// test.describe.parallel("First suite", () => {
test.describe("First suite", () => {

    test.beforeEach(async ({page}) => {
        await page.goto('/')
    })
    test.afterEach(async ({page}) => {
        console.log("This is after each test when the test is done")
    })

    test("First test", async ({page}) => {
        await page.goto('https://playwright.dev/')
        const title = await page.title()
        expect(title).toContain('Playwright')
    });
    
    test("Simple click test @regression", async ({page, browserName}) => {
        // test.skip(browserName === 'firefox')    
        const element = page.locator('text=Add/Remove Elements')
        const addElement = page.locator('text=Add Element')
        // await element.click()
        // await addElement.click()
    
        await page.click('text=Add/Remove Elements')
        await page.click('text=Add Element')
        await page.screenshot({path: 'screenshot.png'})

    })
    
    test("Duplicate test 1 @smoke", async ({page}) => {    
        const element = page.locator('text=Add/Remove Elements')
        const addElement = page.locator('text=Add Element')
    
        await page.click('text=Add/Remove Elements')
        await page.click('text=Add Element')
        
    })
    
    test("Simple click test", async ({page}) => {    
        const element = page.locator('text=Add/Remove Elements')
        const addElement = page.locator('text=Add Element')
    
        await page.click('text=Add/Remove Elements')
        await page.click('text=Add Element')
        
    })
})

// test("First test @haha", async ({page}) => {
//     await page.goto('https://playwright.dev/')
//     const title = await page.title()
//     expect(title).toContain('Playwright')
// });

// test("Simple click test @regression", async ({page, browserName}) => {
//     test.skip(browserName === 'firefox')
//     await page.goto('https://the-internet.herokuapp.com/')

//     const element = page.locator('text=Add/Remove Elements')
//     const addElement = page.locator('text=Add Element')
//     // await element.click()
//     // await addElement.click()

//     await page.click('text=Add/Remove Elements')
//     await page.click('text=Add Element')
    
// })

// test("Duplicate test 1 @smoke", async ({page}) => {
//     await page.goto('https://the-internet.herokuapp.com/')

//     const element = page.locator('text=Add/Remove Elements')
//     const addElement = page.locator('text=Add Element')

//     await page.click('text=Add/Remove Elements')
//     await page.click('text=Add Element')
    
// })

// test("Duplicate test 2 @regression", async ({page}) => {
//     await page.goto('https://the-internet.herokuapp.com/')

//     const element = page.locator('text=Add/Remove Elements')
//     const addElement = page.locator('text=Add Element')

//     await page.click('text=Add/Remove Elements')
//     await page.click('text=Add Element')
    
// })

// test("Simple click test", async ({page}) => {
//     await page.goto('https://the-internet.herokuapp.com/')

//     const element = page.locator('text=Add/Remove Elements')
//     const addElement = page.locator('text=Add Element')

//     await page.click('text=Add/Remove Elements')
//     await page.click('text=Add Element')
    
// })