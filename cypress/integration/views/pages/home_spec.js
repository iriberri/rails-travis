/// <reference types="Cypress" />

context('Window', () => {
  beforeEach(() => {
    //connect on website
    cy.visit('http://127.0.0.1:3000/');
    
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

  describe('Testing Home', () => {
    it('can i have Hello Worl add numbers', () => {
      cy.get('#app').contains('Hello World')
    });
  });

});