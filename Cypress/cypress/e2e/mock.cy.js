describe("Result testing : https://magento.softwaretestingboard.com/", () => {

    describe("Creating account test case", () => {
        it("Creating account with valid information", () => {}) // 1
        it("Creating account with missing information", () => {}) // 2
        it("Creating account with invalid email", () => {}) // 3
        it("Creating account with a short password", () => {}) // 4
        it("Creating account with a weak password", () => {}) // 5
        it("Creating account with mismatch password and confrim password", () => {}) // 6
    })

    describe("Login test case", () => {
        it("Login with valid Email and Password ", () => {}) // 7
        it("Login with invalid Email", () => {}) // 8
        it("Login with valid Email but wrong Password", () => {}) // 9
        it("Login with invalid Email and invalid Password", () => {}) // 10
        it("Reset password (Forgot Your Password? button) with valid email", () => {})  // 11
        it("Reset password (Forgot Your Password? button) with missing email", () => {}) // 12
        it("Reset password (Forgot Your Password? button) with invalid email", () => {}) // 13
    })
    
    describe("Manage item test case", () => {
        it("Search Product Bar with valid product name", () => {}) // 14
        it("Search Product Bar with valid product name by using suggestion bars", () => {}) // 15
        it("Search Product Bar with invalid product name", () => {}) // 16
        it("Add to cart button on list item page", () => {}) // 17
        it("Add to cart button on detail page with a valid product quantity", () => {}) // 18
        it("Add to cart button on detail page with an invalid product quantity", () => {}) // 19
        it("Add to wish list", () => {}) // 20
        it("Add to wish list but the user is not logged in", () => {}) // 21
        it("Add product to comparison list", () => {}) // 22
        it("Testing Compare Products", () => {}) // 23
        it("Print compare products page", () => {}) // 24
        it("Remove product from comparison list", () => {}) // 25
        it("Add to cart button in compare products page", () => {}) // 26
        it("Product reviews button in compare products page", () => {}) // 27
        it("Add to wish list button in compare products page", () => {}) // 28
    })

    describe("Checkout test case", () => {
        it("Checkout page with all valid shipping address information", () => {}) // 29
        it("Checkout page with missing field ", () => {}) // 30
        it("Place order button in payment page ", () => {}) // 31
    })

})