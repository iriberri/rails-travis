/// <reference types="Cypress" />

context('Window', () => {
  beforeEach(() => {
    //connect on website
    cy.visit('http://127.0.0.1:3000/')
    cy.visit('localhost:3000')
    cy.visit('/');


    cy.request('http://127.0.0.1:3000/')
    cy.request('localhost:3000')
    cy.request('/');
    
    //connection
    cy.get('[href="/users/sign_in"]').click();
    cy.get('#user_email').then(($input) => {
      $input.val('user1@gmail.com')
    });
    cy.get('#user_password').then(($input) => {
      $input.val('testtest')
    });
    cy.get('.btn').click();
  })

  describe('Testing', () => {
    it('can i have Hello Worl', () => {
      cy.get('#app').contains('Hello World')
    });
    it('All products', () => {
      cy.get('.btn').click()
      cy.get('h1').contains('Mes produits')
    });
  });
  
});