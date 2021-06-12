var baseURL = 'https://staging.quacker.nl/';

Cypress.Commands.add('login', (username, pass) => {
  cy.visit('localhost/login');

  cy.get('input[id=username-input]').type(username);
  cy.get('input[id=password-input').type(pass);
  cy.get('button[id=login-button]').click();
});
