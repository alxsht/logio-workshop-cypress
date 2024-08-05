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
      .should('contain.text', 'Physical mouse click and DOM event emulated click are differently handled by browsers');

    // Find the button by its id, check its class, text and click on it
    cy.get('#badButton')
      .should('have.class', 'btn-primary')
      .and('have.text', 'Button That Ignores DOM Click Event')
      .click();

    // Check that the button's class has changed
    cy.get('#badButton')
      .should('have.class', 'btn-success');
  });
  it('Go to the page "Dynamic ID" and proceed to locate an element with its class', () => {
    // Find a link to other page and click on it
    cy.contains('Dynamic ID')
      .click();

    // Check that you were redirected
    cy.url()
      .should('include', '/dynamicid');

    // Find the first container on the page and check the text
    cy.get('.btn.btn-primary')
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
    cy.get('.form-control')
      .eq(1)
      .type('pwd');

    // Check the text
    cy.get('#loginstatus')
      .should('contain.text', 'User logged out.');

    // Click on the "Login" button
    cy.get('#login')
      .click();

    // Check that the text has changed
    cy.get('#loginstatus')
      .should('contain.text', 'Welcome, login!');
  });
});
