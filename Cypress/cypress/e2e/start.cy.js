describe('template spec', () => {
  it('search babymonster in google', () => {  
    cy.visit('https://www.google.com')

    cy.get('textarea[name="q"]').type('babymonster');
    cy.get('textarea[name="q"]').type('{enter}');

    cy.contains("รูปภาพ").click()

    // cy.get('textarea').click()
    
  })
})