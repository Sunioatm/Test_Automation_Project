beforeEach(() => {
  cy.visit('https://magento.softwaretestingboard.com');
  cy.contains("Create an Account").click();
});

describe('Creating account test case', () => {
  
  it('Creating account with valid information', () => {  

    // Fill valid information
    cy.get('#firstname').type('John')
    cy.get('#lastname').type('Doe')
    cy.get("#email_address").type("hellotestrandom_3@gmail.com")
    cy.get("#password").type("1795@fs!d5")
    cy.get("#password-confirmation").type("1795@fs!d5")

    // Click on Create an Account button
    cy.contains('button', 'Create an Account').click();

    // Verify the success message
    cy.contains("Thank you for registering with Main Website Store.")
  })

  it('Creating account with missing information', () => {

    // Click on Create an Account button
    cy.contains('button', 'Create an Account').click();

    // Verify the error message
    cy.get("#firstname-error").should("have.text", "This is a required field.")
    cy.get("#lastname-error").should("have.text", "This is a required field.")
    cy.get("#email_address-error").should("have.text", "This is a required field.")
    cy.get("#password-error").should("have.text", "This is a required field.")
    cy.get("#password-confirmation-error").should("have.text", "This is a required field.")
  })

  it("Creating account with invalid email", () => {
    // Fill valid information
    cy.get('#firstname').type('John')
    cy.get('#lastname').type('Doe')
    cy.get("#email_address").type("hellotestrandom_2")
    cy.get("#password").type("1795@fs!d5")
    cy.get("#password-confirmation").type("1795@fs!d5")

    // Click on Create an Account button
    cy.contains('button', 'Create an Account').click();

    // Verify the error message
    cy.get("#email_address-error").should("have.text", "Please enter a valid email address (Ex: johndoe@domain.com).")
  })

  it("Creating account with short password", () => {
    // Fill valid information
    cy.get('#firstname').type('John')
    cy.get('#lastname').type('Doe')
    cy.get("#email_address").type("hellotestrandom_3@gmail.com")
    cy.get("#password").type("123")
    cy.get("#password-confirmation").type("123")

    // Click on Create an Account button
    cy.contains('button', 'Create an Account').click();

    // Verify the error message
    cy.get("#password-error").should("have.text", "Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.")

  })

  it("Creating account with a weak password", () => {

    // Fill valid information
    cy.get('#firstname').type('John')
    cy.get('#lastname').type('Doe')
    cy.get("#email_address").type("hellotestrandom_3@gmail.com")
    cy.get("#password").type("hello12345678")
    cy.get("#password-confirmation").type("hello12345678")

    // Click on Create an Account button
    cy.contains('button', 'Create an Account').click();

    // Verify the error message
    cy.get("#password-error").should("have.text", "Minimum of different classes of characters in password is 3. Classes of characters: Lower Case, Upper Case, Digits, Special Characters.")

  })

  it("Creating account with mismatch password and confrim password", () => {

    // Fill valid information
    cy.get('#firstname').type('John')
    cy.get('#lastname').type('Doe')
    cy.get("#email_address").type("hellotestrandom_3@gmail.com")
    cy.get("#password").type("1795@fs!d5")
    cy.get("#password-confirmation").type("s@methingDoesn'tMatch123")

    // Click on Create an Account button
    cy.contains('button', 'Create an Account').click();

    // Verify the error message
    cy.get("#password-confirmation-error").should("have.text", "Please enter the same value again.")

  })

})