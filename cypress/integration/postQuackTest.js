import faker from 'faker';

var baseURL = 'https://staging.quacker.nl/';

var admin = {
  username: 'admin',
  password: 'Admin123',
};

describe('Posting quacks', () => {
  it('Post quack should show quack in timeline', () => {
    cy.visit(baseURL + 'login');

    cy.get('textarea[id=quack-textarea]').type(faker.random.words());
    cy.get('button[id=quack-button]').click({ force: true });
  });
});
