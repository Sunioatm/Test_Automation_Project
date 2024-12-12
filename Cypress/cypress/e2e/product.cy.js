beforeEach(() => {
    cy.visit('https://magento.softwaretestingboard.com');
    cy.contains("Sign In").click();
    cy.get('#email').type('hellotestrandom_3@gmail.com')
    cy.get('#pass').type('1795@fs!d5')
    cy.get('#send2').click()
    cy.contains('Welcome,').should('be.visible');
});
  
describe('Creating product test case', () => {

    it('Search Product Bar with valid product name', () => {
            
        let item = 'Hero hoodie'
        cy.get('#search').type(item)

        cy.get('#search_autocomplete').should('be.visible');

        // Validate the dropdown contains the expected items
        cy.get('#search_autocomplete ul li').should('have.length.at.least', 1); // Ensure at least one item appears

        cy.get('#search').type('{enter}')

        cy.contains(`Search results for: '${item}'`)
    })

    it('Search Product Bar with valid product name by using suggestion bars', () => {

        const item = 'Hero hoodie';
    
        // Type into the search bar
        cy.get('#search').type(item);
    
        // Wait for the dropdown to appear
        cy.get('#search_autocomplete').should('be.visible');
    
        // Validate the dropdown contains at least one item
        cy.get('#search_autocomplete ul li').should('have.length.at.least', 1);
    
        // Click the first option in the dropdown
        cy.get('#search_autocomplete ul li')
          .first() // Select the first <li> element
          .click();
    
        // Verify the search result
        cy.contains(`Search results for: '${item}'`);
    });
    
    it("Search Product Bar with invalid product name", () => {
        let item = 'doraemon'
        cy.get('#search').type(item)

        cy.get('#search').type('{enter}')

        cy.contains('Your search returned no results.')

    })

    it("Add to cart button on list item page", () => {

        // Click on the Men section
        cy.get('#ui-id-5').click()
      
        cy.get('li.product-item') 
        .eq(1) 
        .find('button.action.tocart') 
        .scrollIntoView() 
        .click({ force: true });

        // Verify that the product was added to the cart
        cy.contains('You need to choose options for your item.').should('be.visible');

    }) 

    it("Add to cart button on detail page with a valid product quantity", () => {

        // Click on the Men section
        cy.get('#ui-id-5').click();

        cy.get('li.product-item')
        .eq(1) 
        .find('.product-item-name a')
        .invoke('text') 
        .then((productName) => {
            cy.get('li.product-item').eq(1).click();

            // Select item options
            cy.get('#option-label-size-143-item-170').click();
            cy.get('#option-label-color-93-item-49').click();
            cy.get('#qty').clear().type('3');

            // Add to cart
            cy.get('#product-addtocart-button').click();

            // Dynamically assert the success message
            cy.contains(`You added ${productName.trim()} to your shopping cart.`);

        })
    })

    it("Add to cart button on detail page with an invalid product quantity", () => {

            // Click on the Men section
            cy.get('#ui-id-5').click();

            cy.get('li.product-item').eq(1).click()


            // Select item options
            cy.get('#option-label-size-143-item-170').click();
            cy.get('#option-label-color-93-item-49').click();
            cy.get('#qty').clear().type('-1');

            // Add to cart
            cy.get('#product-addtocart-button').click();

            // Dynamically assert the success message
            cy.contains(`Please enter a quantity greater than 0.`).should('be.visible');
        })

        it.only("Add to wish list", () => {

            // Click on the Men section
            cy.get('#ui-id-5').click();
            cy.get('li.product-item').eq(1).click()

            // Extract product name and store it in a variable
            cy.get('.page-title span').invoke('text').then((productName) => {
                // Click on the "Add to Wish List" button

                cy.get('.product-addto-links a.action.towishlist', { timeout: 10000 }).should('be.visible');
                cy.get('.product-addto-links a.action.towishlist').click();

                // Assert that the success message contains the product name
                cy.contains(`${productName.trim()} has been added to your Wish List.`).should('be.visible');
            });
        })

        it("Add to wish list but the user is not logged in", () => {

            // Logout
            cy.get('button[type="button"][data-action="customer-menu-toggle"][class="action switch"]').first().click();

            cy.contains("Sign Out").click();
            
            // Click on the Men section
            cy.get('#ui-id-5').click();
            cy.get('li.product-item').eq(1).click()

            // Extract product name and store it in a variable
            cy.get('.page-title span').invoke('text').then((productName) => {
                // Click on the "Add to Wish List" button

                cy.get('.product-addto-links a.action.towishlist', { timeout: 10000 }).should('be.visible');
                cy.get('.product-addto-links a.action.towishlist').click();

                // Assert that the success message contains the product name
                cy.contains(`You must login or register to add items to your wishlist.`).should('be.visible');
            });
        })

        it("Add product to comparison list", () => {
            // Click on the Men section
            cy.get('#ui-id-5').click();
            cy.get('li.product-item').eq(1).click()

            // Extract product name and store it in a variable
            cy.get('.page-title span').invoke('text').then((productName) => {
                // Click on the "Add to Wish List" button

                cy.get('.product-addto-links a.action.tocompare', { timeout: 10000 }).should('be.visible');
                cy.get('.product-addto-links a.action.tocompare').click();

                // Assert that the success message contains the product name
                cy.contains(`You added product ${productName} to the`).should('be.visible');
            });

        })


        it("Testing Compare Products", () => {

            // Click on the Men section
            cy.get('#ui-id-5').click();
            cy.get('li.product-item').eq(1).click()

            // Extract product name and store it in a variable
            cy.get('.page-title span').invoke('text').then((productName) => {
                // Click on the "Add to Wish List" button

                cy.get('.product-addto-links a.action.tocompare', { timeout: 10000 }).should('be.visible');
                cy.get('.product-addto-links a.action.tocompare').click();

                cy.get('.action.compare').click();

                cy.url().should('include', '/product_compare');
                cy.contains('a', productName).should('be.visible');
            });
        })

        it("Print compare products page", () => {

            // Click on the Men section
            cy.get('#ui-id-5').click();
            cy.get('li.product-item').eq(1).click()

            // Extract product name and store it in a variable
            cy.get('.page-title span').invoke('text').then((productName) => {
                // Click on the "Add to Wish List" button

                cy.get('.product-addto-links a.action.tocompare', { timeout: 10000 }).should('be.visible');
                cy.get('.product-addto-links a.action.tocompare').click();

                // Click on the "Compare Products" button
                cy.get('.action.compare').click();


                // Verify the "Print This Page" button exists
                cy.contains('Print This Page').should('be.visible');

                // Stub the window.print method
                cy.window().then((win) => {
                    cy.stub(win, 'print').as('printFunction');
                });

                // Click the "Print This Page" button
                cy.contains('Print This Page').click();

                // Verify that the print function was called
                cy.get('@printFunction').should('have.been.called');
            });

        }) 

        it("Remove product from comparison list", () => {

            // Click on the Men section
            cy.get('#ui-id-5').click();
            cy.get('li.product-item').eq(1).click()

            // Extract product name and store it in a variable
            cy.get('.page-title span').invoke('text').then((productName) => {
                // Click on the "Add to Wish List" button

                cy.get('.product-addto-links a.action.tocompare', { timeout: 10000 }).should('be.visible');
                cy.get('.product-addto-links a.action.tocompare').click();

                // Click on the "Compare Products" button
                cy.get('.action.compare').click();

                cy.get('.action.delete[title="Remove Product"]').click();
                cy.get('.action-primary.action-accept span').click();

                cy.contains(`You removed product ${productName.trim()} from the comparison list.`).should('be.visible');
            });
        }) 

        it("Add to cart button in compare products page", () => {
            // Click on the Men section
            cy.get('#ui-id-5').click();
            cy.get('li.product-item').eq(1).click()

            // Extract product name and store it in a variable
            cy.get('.page-title span').invoke('text').then((productName) => {
                // Click on the "Add to Wish List" button

                cy.get('.product-addto-links a.action.tocompare', { timeout: 10000 }).should('be.visible');
                cy.get('.product-addto-links a.action.tocompare').click();

                // Click on the "Compare Products" button
                cy.get('.action.compare').click();

                cy.get('.action.tocart.primary').click();

                cy.contains(productName.trim()).should('be.visible');
                cy.contains(`You need to choose options for your item.`).should('be.visible');
            });
        }) 

        it("Product reviews button in compare products page", () => {
            // Click on the Men section
            cy.get('#ui-id-5').click();
            cy.get('li.product-item').eq(2).click()

            // Extract product name and store it in a variable
            cy.get('.page-title span').invoke('text').then((productName) => {
                // Click on the "Add to Wish List" button

                cy.get('.product-addto-links a.action.tocompare', { timeout: 10000 }).should('be.visible');
                cy.get('.product-addto-links a.action.tocompare').click();

                // Click on the "Compare Products" button
                cy.get('.action.compare').click();

                cy.get('.action.view').click();

                cy.url().should('include', '#reviews');
                cy.contains('Customer Reviews').should('be.visible');
            });
        })

        it("Add to wish list button in compare products page", () => {
            // Click on the Men section
            cy.get('#ui-id-5').click();
            cy.get('li.product-item').eq(2).click();
        
            // Extract product name and store it in a variable
            cy.get('.page-title span').invoke('text').then((productName) => {
                // Click on the "Add to Compare" button
                cy.get('.product-addto-links a.action.tocompare', { timeout: 10000 }).should('be.visible');
                cy.get('.product-addto-links a.action.tocompare').click();
        
                // Click on the "Compare Products" button
                cy.get('.action.compare').click();
        
                // Find the row containing the product name and click "Add to Wish List" button
                cy.get('tr')
                    .contains('td', productName) 
                    .parents('tr') 
                    .within(() => {
                        cy.get('a.action.towishlist').click();
                    });
        
                // Assert that the success message contains the product name
                cy.contains(`${productName.trim()} has been added to your Wish List.`).should('be.visible');

            });
        });
        
        

    })


