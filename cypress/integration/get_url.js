describe('Testing', () => {
  it('can i access to localhost', () => {
    cy.request('http://localhost:3000');
  });

  it('default url', () => {
    cy.request('/');
  });
}); 