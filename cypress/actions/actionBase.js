export function verifyContainsText(text) {
  cy.contains(text).should('be.visible');
}

export function verifyNotContainsText(text) {
  cy.contains(text).should('not.exist')
}

export function clickLinkOrText(text) {
  cy.contains(text).first().click();
}

export function clickLastElement(element) {
  cy.get(element).last().click();
}

export function clickButton(element) {
  cy.get(element).click();
}

export function verifyElementVisible(element) {
  cy.get(element).should('to.be.visible');
}

export function verifyElementNotVisible(element) {
  cy.get(element).should('not.be.visible');
}

export function verifyContainsUrl(url) {
  cy.url().should('includes', url);
}

export function getValueInput(element, text) {
  cy.get(element).should('have.value', text);
}

export function insertText(element, text) {
  cy.get(element).type(text);
}
