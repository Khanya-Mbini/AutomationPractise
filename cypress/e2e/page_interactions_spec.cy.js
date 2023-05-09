describe('test components on practise page', () => {

    beforeEach(() => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    })

    it('handles radio buttons correctly', () => {
        //Click on radio button 3 and validate that only 1 radio button is checked
        cy.get('input[value="radio3"]').click()
        cy.get('input[value="radio3"]').should('be.checked')

        //Click on Radio button 2 and validate that button 2 is the only checked button
        cy.get('input[value="radio2"]').click()
        cy.get('input[value="radio1"]').should('not.be.checked')
        cy.get('input[value="radio3"]').should('not.be.checked')
    });

    it('handles checkboxes correctly', () => {
        //Check all the checkboxes and validate that they are all checked
        cy.get('[type="checkbox"]').check();
        cy.get('[type="checkbox"]').should('be.checked');

        //Uncheck the first checkbox and validate that the other two remain checked
        cy.get('#checkBoxOption1').uncheck();
        cy.get('#checkBoxOption1').should('not.be.checked');
        cy.get('#checkBoxOption2').should('be.checked');
        cy.get('#checkBoxOption3').should('be.checked');
    });

    it('handles autocomplete correctly', () => {
        //Type in the field ‘South’ and select ‘South Africa’ from the list of options
        cy.get('#autocomplete').clear().type('South', {waitForAnimations: true, delay: 100})
        cy.get('.ui-menu-item').contains('South Africa').click()

        //Clear the field and type ‘Republic’ and select the first option listed
        cy.get('#autocomplete').clear()
        cy.get('#autocomplete').type('Republic', {waitForAnimations: true, delay: 100})
        cy.get('.ui-menu-item').first().click()
    });

    it('handles element visibility', () => {
        //Click on the hide button and validate that the element is hidden
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')

        //Click on the show button and validate that the hidden element is shown
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')
    });

    it('handles web table elements', () => {
        //Validate that the Amount for ‘Joe Postman’ from ‘Chennai’ has an amount of 46
        cy.contains('td', 'Joe')
            .next('td').contains('Postman')
            .next('td').contains('Chennai')
            .next('td').should('have.text', '46')

        //Validate that the total amount collected is 296
        cy.get('.totalAmount').contains('296')
    });

    it('interacts with an iframe on page', () => {
        //Validate that the page has an iframe
        cy.get('#courses-iframe').should('be.visible')

        // Interact with any element within the iframe
        cy.get('#courses-iframe').then(iframe => {
            const body = iframe.contents().find('body');
            cy.wrap(body).as('iframeBody');

            cy.get('@iframeBody').find('.social-icon-one').click()
        });

    });

})


