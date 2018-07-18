describe('Testing', () => {
  it('can i access to localhost', () => {
    cy.request('http://localhost:5002');
  });

  it('default url', () => {
    cy.request('/');
  });
}); 
