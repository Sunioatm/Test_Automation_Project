beforeEach(() => {
    cy.visit('https://magento.softwaretestingboard.com');
    cy.contains("Sign In").click();
});

describe("Login test case", () => {

    it("Login with valid Email and Password ", () => {

        cy.get('#email').type('hellotestrandom_3@gmail.com')
        cy.get('#pass').type('1795@fs!d5')
        cy.get('#send2').click()

        cy.contains('span.logged-in', 'Welcome');

        cy.url().should('eq', 'https://magento.softwaretestingboard.com/');

    })

    it("Login with invalid Email", () => {

        cy.get('#email').type('hellotestrandom_3')
        cy.get('#pass').type('1795@fs!d5')
        cy.get('#send2').click()

        cy.get('#email-error').should('have.text', 'Please enter a valid email address (Ex: johndoe@domain.com).');
    })

    it("Login with valid Email but wrong Password", () => {

        cy.get('#email').type('hellotestrandom_3@gmail.com')
        cy.get('#pass').type('123456789')
        cy.get('#send2').click()

        cy.get('div[data-ui-id="message-error"] div').should('have.text', 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.');
    })

    it("Login with invalid Email and invalid Password", () => {

        cy.get('#email').type('hellotestrandom_doesnotexist@gmail.com')
        cy.get('#pass').type('123456789')
        cy.get('#send2').click()

        cy.get('div[data-ui-id="message-error"] div').should('have.text', 'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.');
    })


    it("Reset password (Forgot Your Password? button) with valid email", () => {

        cy.contains("Forgot Your Password?").click();

        let email = "hellotestrandom_3@gmail.com"
        cy.get('#email_address').type(email)
        cy.contains('button', 'Reset My Password').click();

        cy.contains(`If there is an account associated with ${email} you will receive an email with a link to reset your password.`)
    })


    it.only("Reset password (Forgot Your Password? button) with missing email", () => {

        cy.contains("Forgot Your Password?").click();
        cy.contains('button', 'Reset My Password').click();

        cy.contains(`This is a required field.`) || cy.contains('Please enter your email.')
    })

    it("Reset password (Forgot Your Password? button) with invalid email", () => {

        cy.contains("Forgot Your Password?").click();
        cy.get('#email_address').type("hellotestrandom_3")
        cy.contains('button', 'Reset My Password').click();

        cy.contains(`Please enter a valid email address (Ex: johndoe@domain.com).`)    
    
    })
})