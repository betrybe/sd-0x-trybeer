/// <reference types="cypress" />
describe('Client', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/login');
  });

  const formatDate = (data) => {
    const month = `00${data.getMonth() + 1}`.slice(-2);
    const day = `00${data.getDate()}`.slice(-2);
    return `${day}/${month}`;
  };
  let orderNumber = null;
  it('should complete an order', () => {
    cy.server();
    cy.route('products').as('productsAPI');
    cy.route('login').as('loginAPI');
    cy.route('finish-order').as('finishOrder');
    cy.route('my-orders').as('myOrders');
    cy.viewport('iphone-6');
    // login
    cy.get('[data-testid="login-submit-btn"]').should('be.disabled');
    cy.get('[data-testid="email-input"]').type('client@trybe.com');
    cy.get('[data-testid="password-input"]').type('123456');
    cy.get('[data-testid="login-submit-btn"]').should('not.be.disabled');
    cy.get('[data-testid="no-account-btn"]').should('not.be.disabled');
    cy.get('[data-testid="login-submit-btn"]').click();
    cy.wait('@loginAPI');
    // get product
    cy.wait('@productsAPI');
    cy.get('[data-testid="0-product-img"]');
    cy.get('[data-testid="0-product-name"]').contains(
      'Cerveja Skol Lata 250ml'
    );
    cy.get('[data-testid="0-product-price"]').contains('2,20');
    cy.get('[data-testid="0-product-qtd"]').contains('0');
    cy.get('[data-testid="checkout-bottom-btn-value"]').contains('0,00');
    cy.get('[data-testid="0-product-plus"]').click();
    cy.get('[data-testid="0-product-qtd"]').contains('1');
    cy.get('[data-testid="0-product-plus"]').click();
    cy.get('[data-testid="checkout-bottom-btn-value"]').contains('2,20');
    cy.get('[data-testid="0-product-qtd"]').contains('2');
    cy.get('[data-testid="checkout-bottom-btn-value"]').contains('4,40');
    cy.get('[data-testid="0-product-minus"]').click();
    cy.get('[data-testid="0-product-qtd"]').contains('1');
    cy.get('[data-testid="checkout-bottom-btn-value"]').contains('2,20');
    cy.get('[data-testid="0-product-minus"]').click();
    cy.get('[data-testid="0-product-qtd"]').contains('0');
    cy.get('[data-testid="checkout-bottom-btn-value"]').contains('0,00');
    cy.get('[data-testid="0-product-plus"]').click();
    cy.get('[data-testid="0-product-plus"]').click();
    // go to checkout
    cy.get('[data-testid="checkout-bottom-btn"]').click();
    cy.get('[data-testid="0-product-qtd-input"]').contains('2');
    cy.get('[data-testid="0-product-name"]').contains(
      'Cerveja Skol Lata 250ml'
    );
    cy.get('[data-testid="0-product-total-value"]').contains('4,40');
    cy.get('[data-testid="checkout-finish-btn"]').should('be.disabled');
    cy.get('[data-testid="order-total-value"]').contains('4,40');
    cy.get('[data-testid="checkout-street-input"]').type(
      'Rua Augusto de Oliveira Camargo'
    );
    cy.get('[data-testid="checkout-house-number-input"]').type('32');
    cy.get('[data-testid="checkout-finish-btn"]').click();
    cy.wait('@finishOrder');
    // confirm in my orders
    cy.visit('http://localhost:3000/meus-pedidos');
    cy.wait('@myOrders');
    cy.get('[data-testid="0-order-number"]').contains('Pedido');
    orderNumber = cy.get('[data-testid="0-order-number"]').text();
    cy.get('[data-testid="0-order-total-value"]').contains('4,40');
    const expectedDate = formatDate(new Date());
    cy.get('[data-testid="0-order-date"]').contains(expectedDate);
    cy.logout();
  });

  it('should have all elements in desktop', () => {
    cy.server();
    cy.route('login').as('loginAPI');
    cy.route('pending-orders').as('pendingOrdersAPI');
    cy.route('order/*').as('orderDetailsAPI');
    cy.viewport(1280, 720);
    // login
    cy.get('[data-testid="login-submit-btn"]').should('be.disabled');
    cy.get('[data-testid="email-input"]').type('admin@trybe.com');
    cy.get('[data-testid="password-input"]').type('123456');
    cy.get('[data-testid="login-submit-btn"]').should('not.be.disabled');
    cy.get('[data-testid="no-account-btn"]').should('not.be.disabled');
    cy.get('[data-testid="login-submit-btn"]').click();
    cy.wait('@loginAPI');
    // orders
    cy.wait('@pendingOrdersAPI');
    cy.get('[data-testid="side-menu-item-orders"]').contains('Pedidos');
    cy.get('[data-testid="side-menu-item-profile"]').contains('Perfil');
    cy.get('[data-testid="0-order-address"]').contains(
      'Rua Augusto de Oliveira Camargo'
    );
    cy.get('[data-testid="0-order-total-value"]').contains('4,40');
    cy.get('[data-testid="0-order-number"]').click();
    cy.wait('@orderDetailsAPI');
    cy.get('[data-testid="order-status"]').contains('Pendente');
    cy.get('[data-testid="0-product-qtd"]').contains('2');
    cy.get('[data-testid="0-product-name"]').contains(
      'Cerveja Skol Lata 250ml'
    );
    cy.get('[data-testid="0-product-total-value"]').contains('4,40');
    cy.get('[data-testid="order-total-value"]').contains('4,40');
    cy.get('[data-testid="mark-as-delivered-btn"]').should('not.be.disabled');
    cy.get('[data-testid="mark-as-delivered-btn"]').click();
    cy.wait('@orderDetailsAPI');
    cy.get('[data-testid="order-status"]').contains('Entregue');
    cy.get('[data-testid="0-product-qtd"]').contains('2');
    cy.get('[data-testid="0-product-name"]').contains(
      'Cerveja Skol Lata 250ml'
    );
    cy.get('[data-testid="0-product-total-value"]').contains('4,40');
    cy.get('[data-testid="order-total-value"]').contains('4,40');
  });
});
