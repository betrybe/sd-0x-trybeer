import {
    verifyContainsText,
    verifyElementVisible,
    login,
    clickButton,
    verifyElementIsDisable,
    createAndInsertsDataBase,
    dropAndTruncateDataBase,
    verifyElementContainsText,
    verifyElementContainsAttribute,
    verifyElementNotContainsAttribute,
    verifyContainsUrl,
    loginClientAndBuyProduct,
    logout,
  } from '../actions/actionBase';
  
describe('11 - Criar tela de pedidos de admin', () => {
  beforeEach( () => {
    createAndInsertsDataBase();
    cy.visit(Cypress.config().baseUrl);
 
  });

  afterEach(() => {
    dropAndTruncateDataBase();
  }) 
  /*
  --validar se e possivel acessar a tela de pedidos
  --validar se e tem todos os campos
  --validar se os pedidos tem a label pendentes
  --validar que clicar em qualquer parte do card vou para tela do detalhe do pedido
  --validar se ao finaliar com entregue fique com a label  entregue
  */

  it('Será validado que é possível acessar a tela do pedidos do administrador', () => {
    loginClientAndBuyProduct();
    logout();
    login(Cypress.env('loginAdmin'), Cypress.env('passwordAdmin'));
    clickButton('[data-testid="side-menu-item-orders"]');
    verifyContainsUrl(`${Cypress.config().baseUrl}/admin/orders`);
  });

  it('Será validado que a tela de pedidos contém os atributos descritos no protótipo', () => {
    loginClientAndBuyProduct();
    logout();
    login(Cypress.env('loginAdmin'), Cypress.env('passwordAdmin'));
    verifyElementVisible('[data-testid="0-order-number"]');
    verifyElementVisible('[data-testid="0-order-address"]');
    verifyElementVisible('[data-testid="0-order-total-value"]');
    verifyElementVisible('[data-testid="0-order-status"]');
  });

  it('Será validado que os dados do card estão corretos', () => {
    loginClientAndBuyProduct();
    logout();
    login(Cypress.env('loginAdmin'), Cypress.env('passwordAdmin'));
    clickButton('[data-testid="side-menu-item-orders"]');
    verifyElementContainsText('[data-testid="0-order-number"]','Pedido 1');
    verifyElementContainsText('[data-testid="0-order-address"]', 'Rua da pinga, 2');
    verifyElementContainsText('[data-testid="0-order-total-value"]', 'R$ 2,20');
    verifyElementContainsText('[data-testid="0-order-status"]', 'Pendente');
  });

  it('Será validado que é possível clicar no card do produto e ser redirecionado para tela de detalhes do produto', () => {
    loginClientAndBuyProduct();
    logout();
    login(Cypress.env('loginAdmin'), Cypress.env('passwordAdmin'));
    clickButton('[data-testid="side-menu-item-orders"]');
    clickButton('[data-testid="0-order-number"]');
    verifyContainsUrl(`${Cypress.config().baseUrl}/admin/orders/1`);
  });

  //ver sobre pendentes
});
