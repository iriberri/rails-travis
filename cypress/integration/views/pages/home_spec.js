// <reference types="Cypress" />

// context('Window', () => {
  describe('Testing', () => {
  // beforeEach(() => {
  //   //connect on website
  //   cy.visit('http://127.0.0.1:3000/')

  //   //connection
  //   cy.get('[href="/users/sign_in"]').click();
  //   cy.get('#user_email').then(($input) => {
  //     $input.val('user1@gmail.com')
  //   });
  //   cy.get('#user_password').then(($input) => {
  //     $input.val('testtest')
  //   });
  //   cy.get('.btn').click();
  // })

  // describe('Testing', () => {
  //   it('can i have Hello Worl', () => {
  //     cy.get('#app').contains('Hello World')
  //   });
  //   it('All products', () => {
  //     cy.get('.btn').click()
  //     cy.get('h1').contains('Mes produits')
  //   });
  // });

  it('can i access to 127.0.0.1', () => {
    cy.request('http://127.0.0.1:3000')
  });

  it('can i access to localhost', () => {
    cy.request('localhost:3000')
  });
});