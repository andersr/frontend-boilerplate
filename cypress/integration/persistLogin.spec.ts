describe('Cypress', () => {
  it('Works', () => {
    cy.visit('/') // display dashboard without login token
    cy.get('[data-testid=AppHeader]').should('have.text', 'APP HEADER')
  })
})
