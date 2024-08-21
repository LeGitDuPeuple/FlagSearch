describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:5500/')
    cy.get('#inputSearch').type("fr").type('{enter}')
    cy.get("#minToMax").click()
    cy.wait(3000)
    cy.get("#maxToMin").click()
    cy.wait(3000)
    cy.get("#alpha").click()
  })
})