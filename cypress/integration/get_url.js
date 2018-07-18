describe('Testing', () => {
  it('can i access to localhost', () => {
    cy.request('localhost:3000');
  });

  it('default url', () => {
    cy.request('/');
  });
});