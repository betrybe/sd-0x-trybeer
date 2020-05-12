/// <reference types="cypress" />
describe('Register', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/registro');
  });

  const hasNotTopBarItems = () => {
    cy.viewport('iphone-6');
    cy.get('[data-testid="top-hamburguer"]').should('not.exist');
    cy.get('[data-testid="top-title"]').should('not.exist');
    cy.get('[data-testid="search-top-btn"]').should('not.exist');
    cy.viewport(1280, 720);
    cy.get('[data-testid="side-menu-item-orders"]').should('not.exist');
  };

  it('should have all elements and form validations', () => {
    hasNotTopBarItems();
    cy.viewport('iphone-6');
    cy.get('[data-testid="signup-btn"]').should('be.disabled');
    cy.get('[data-testid="signup-name"]').type('And');
    cy.get('[data-testid="signup-btn"]').should('be.disabled');
    cy.get('[data-testid="signup-name"]').type('erson Silva');
    cy.get('[data-testid="signup-email"]').type('maimail.com');
    cy.get('[data-testid="signup-btn"]').should('be.disabled');
    cy.get('[data-testid="signup-email"]').clear();
    cy.get('[data-testid="signup-email"]').type('mai@mail.com');
    cy.get('[data-testid="signup-btn"]').should('be.disabled');
    cy.get('[data-testid="signup-password"]').type('1234');
    cy.get('[data-testid="signup-password"]').clear();
    cy.get('[data-testid="signup-password"]').type('123456');
    cy.get('[data-testid="signup-btn"]').should('not.be.disabled');
    cy.get('[data-testid="signup-seller"]').check();
    cy.get('[data-testid="signup-btn"]').should('not.be.disabled');
    cy.get('[data-testid="signup-btn"]').click();

    const user = {
      name: 'Anderson Silva',
      email: 'mai8@mail.com',
      password: 'pwd123456',
    };

    cy.server();
    cy.request('POST', 'http://localhost:3001/register', user).then(
      (response) => {
        const { name, email } = response.body.user;
        const { token } = response.body;

        expect(name).to.eq(user.name);
        expect(email).to.eq(user.email);
        expect(token).to.not.eq(null);
      }
    );
  });
});
