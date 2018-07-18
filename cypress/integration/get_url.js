// <reference types="Cypress" />

// context('Window', () => {
describe('Testing', () => {
  it('can i access to 127.0.0.1', () => {
    cy.request('127.0.0.1:3000');
  });

  it('can i access to localhost', () => {
    cy.request('localhost:3000');
  });

  it('default url', () => {
    cy.request('/');
  });
});