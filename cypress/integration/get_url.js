// <reference types="Cypress" />

// context('Window', () => {
describe('Testing', () => {
  it('can i access to 127.0.0.1', () => {
    cy.request('/');
  });

  it('can i access to localhost', () => {
    cy.request('localhost:3000');
  });
});