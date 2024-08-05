describe('Example of a successful tests', () => {
  beforeEach(() => {
    // Go to the main page
    cy.visit('/');
  });

  it('Go to the page "Click" and proceed to click on the element', () => {
    // Find a link to other page and click on it
    cy.contains('Click')
      .click();

    // Check that you were redirected
    cy.url()
      .should('include', '/click');

    // Find the first container on the page and check the text
    cy.get('.container')
      .eq(0)
      .should('contain.text', 'asdasdasd');

    // Find the button by its id, check its class, the text inside and click on it
    cy.get('#badButton')
      .should('have.class', 'btn-primary')
      .and('have.text', 'Button That Ignores DOM Click Event')
      .click();

    // Check that the button's class has changed !!!!

  });
  it('Go to the page "Dynamic ID" and proceed to locate an element with its class', () => {
    // Find a link to other page and click on it
    cy.contains('Dynamic ID')
      .click();

    // Check that you were redirected
    cy.url()
      .should('include', '/dynamicid');

    // Find a button by its class !!!
    cy.get('#7b5e4750-d2ff-3515-c045-82ad966b87dd')
      .should('contain.text', 'Button with Dynamic ID')
      .click();
  });

  it('Go to the page "Sample App" and intercat with inputs', () => {
    // Find a link to other page and click on it
    cy.contains('Sample App')
      .click();

    // Check that you were redirected
    cy.url()
      .should('include', '/sampleapp');

    // Find a LOGIN input and type in any value
    cy.get('.form-control')
      .eq(0)
      .type('login');

    // Find a PASSWORD input and type in "pwd"


    // Check the text "User logged out." is correct
    cy.get('#loginstatus')
      .should('contain.text', 'asdasdasd');

    // Click on the "Login" button


    // Check that the text "User logged out." has changed

  });
});
