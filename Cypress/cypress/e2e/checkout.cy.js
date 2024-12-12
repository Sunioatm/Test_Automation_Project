beforeEach(() => {
    cy.visit('https://magento.softwaretestingboard.com');
    cy.contains("Sign In").click();
    cy.get('#email').type('hellotestrandom_3@gmail.com')
    cy.get('#pass').type('1795@fs!d5')
    cy.get('#send2').click()
    cy.contains('Welcome,').should('be.visible');
    
    cy.get('.action.showcart').click();
    cy.wait(500)
    cy.get('#top-cart-btn-checkout', { timeout: 10000 }).should('be.visible');

    cy.get('#top-cart-btn-checkout').click();
    cy.url().should('include', '/checkout');

    cy.contains('Shipping Address').should('be.visible');
});

describe("Checkout test case", () => {

    it("Checkout page with all valid shipping address information", () => {

        cy.get('body').then(($body) => {
            // Check if the input field exists
            if ($body.find('[name="company"]').length > 0) {
                // Fill out the form
                cy.get('[name="company"]').type('Real and Valid Company');
                cy.get('[name="street[0]"]').type('Real and Valid Company Line 1');
                cy.get('[name="street[1]"]').type('Line 2');
                cy.get('[name="street[2]"]').type('Line 3');
                cy.get('[name="city"]').type('Bangkok');
                cy.get('[name="country_id"]').select('Thailand');
                cy.get('[name="region"]').type('Bangkok');
                cy.get('[name="postcode"]').type('10000');
                cy.get('[name="telephone"]').type('0800000000');
            } else {
                // If fields are not found, log a message and proceed to the next button
                cy.log("Form fields not found. Proceeding to click the next button.");
            }
        });

        cy.wait(2000)

        // Click the continue button after confirming the shipping methods have loaded
        cy.get('.button.action.continue.primary').click();

        cy.url().should('include', '/checkout/#payment');
    }) 

    it.only("Checkout page with missing field ", () => {

        cy.get('body').then(($body) => {
            // Check if the input field exists
        if ($body.find('[name="company"]').length > 0) {
            cy.get('.button.action.continue.primary').click();
            cy.contains('This is a required field.').should('be.visible');
        } else {
            cy.log("There are no fields to fill out. Proceeding to the next button.");
        }
    })

    }) 

    it("Place order button in payment page", () => {
        // Try to fill out the form and handle the case where fields might not be present
        cy.get('body').then(($body) => {
            // Check if the input field exists
            if ($body.find('[name="company"]').length > 0) {
                // Fill out the form
                cy.get('[name="company"]').type('Real and Valid Company');
                cy.get('[name="street[0]"]').type('Real and Valid Company Line 1');
                cy.get('[name="street[1]"]').type('Line 2');
                cy.get('[name="street[2]"]').type('Line 3');
                cy.get('[name="city"]').type('Bangkok');
                cy.get('[name="country_id"]').select('Thailand');
                cy.get('[name="region"]').type('Bangkok');
                cy.get('[name="postcode"]').type('10000');
                cy.get('[name="telephone"]').type('0800000000');
            } else {
                // If fields are not found, log a message and proceed to the next button
                cy.log("Form fields not found. Proceeding to click the next button.");
            }
        });
    
        // Ensure any loading or updates are completed before proceeding
        cy.wait(2000);
    
        // Click the continue button
        cy.get('.button.action.continue.primary').click();
    
        // Confirm redirection to the payment page
        cy.url().should('include', '/checkout/#payment');
    
        // Place the order
        cy.get('.action.primary.checkout').click();
    
        // Verify success message and final URL
        cy.contains('Thank you for your purchase!').should('be.visible');
        cy.url().should('include', '/checkout/onepage/success/');
    });    
})
