import {
    clickButton,
    verifyContainsUrl,
    verifyElementVisible,
    login,
    createAndInsertsDataBase,
    dropAndTruncateDataBase,
    verifyElementContainsText,
    getDateAndMonth,
    buyOneProduct,
    accessOrdersClient,
    buyProducts,
  } from '../actions/actionBase';
    
  describe('12 - Criar Tela de Detalhes Pedidos', () => {
    beforeEach(() => {
      createAndInsertsDataBase();
      cy.visit(Cypress.config().baseUrl);
    });
  
    afterEach(() => {
      dropAndTruncateDataBase();
    }) 
  

    /*
    validar se acesa a pagina
   validar elementos
   validar se no cabecalho esta pendente ou entregue
   ver se tem quantidade,nome do produto,valor total do produto
   validar preco total do produto
   validar preco total do pedido
   se o pedido tiver pendente ter um botao para marcar como entregue
   ao clicar o botao deve desaparecer e statis passar a ser entregue
   
    */
   it('Será validado que é possível acessar a tela do detalhe do pedido do administrador', () => {
/*       login(Cypress.env('login'), Cypress.env('password'));
      buyOneProduct();
      accessOrdersClient();
      clickButton('[data-testid="0-order-number"]');
      verifyContainsUrl(`${Cypress.config().baseUrl}/orders/1`); */
    });
  
    it('Será validado que contém os atributos descritos no protótipo', () => {
 /*      login(Cypress.env('login'), Cypress.env('password'));
      buyOneProduct();
      accessOrdersClient();
      clickButton('[data-testid="0-order-number"]');
      verifyElementVisible('[data-testid="top-title"]');
      verifyElementVisible('[data-testid="order-number"]');
      verifyElementVisible('[data-testid="order-date"]');
      verifyElementVisible('[data-testid="0-product-qtd"]');
      verifyElementVisible('[data-testid="0-product-name"]');
      verifyElementVisible('[data-testid="0-product-total-value"]');
      verifyElementVisible('[data-testid="order-total-value"]'); */
    });
  
    it('', () => {
/*       const date = getDateAndMonth();
      login(Cypress.env('login'), Cypress.env('password'));
      buyOneProduct();
      accessOrdersClient();
      clickButton('[data-testid="0-order-number"]');
      verifyElementContainsText('[data-testid="order-number"]','Pedido 1');
      verifyElementContainsText('[data-testid="order-date"]', date); */
    });
  
    it('', () => {
 /*      login(Cypress.env('login'), Cypress.env('password'));
      buyOneProduct();
      accessOrdersClient();
      clickButton('[data-testid="0-order-number"]');
      verifyElementContainsText('[data-testid="0-product-qtd"]','1');
      verifyElementContainsText('[data-testid="0-product-name"]','Skol Lata 250ml');
      verifyElementContainsText('[data-testid="0-product-total-value"]','R$ 2,20'); */
    });
  
    it('', () => {
/*       login(Cypress.env('login'), Cypress.env('password'));
      buyProducts();
      accessOrdersClient();
      clickButton('[data-testid="0-order-number"]');
      verifyElementContainsText('[data-testid="0-product-qtd"]','2');
      verifyElementContainsText('[data-testid="0-product-name"]','Skol Lata 250ml');
      verifyElementContainsText('[data-testid="order-total-value"]','R$ 4,40'); */
    });
  });
  