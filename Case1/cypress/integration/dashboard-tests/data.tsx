/* To run only one test write: it.only */
/* To pause between each step of a test write cy.pause() only one test write: it.only */


describe('dashboard ', function() {
	beforeEach(function() {
		cy.visit('http://localhost:3000/data')
	})
	it('data page can be opened', function() {
		cy.contains('Create a new Graph')
  })
  it('Data page can be opened', function() {
    cy.contains('Show data')
      .click({force: true})
    cy.contains('Time')
  })
  it('Graph can be added', function() {
    cy.contains('Add graph')
      .click({force: true})
    cy.contains('Feb 17')
    cy.contains('Remove element')
  })
  it('Graph can be added and removed', function() {
    cy.contains('Add graph')
      .click({force: true})
    cy.contains('Feb 17')
    cy.contains('Remove element')
        .click()
    cy.contains('Feb 17')
        .should('not.exist')
  })
  it('LineGraph can be selected and added', function() {
    cy.get('#graphs')
      .select('LineGraph')
    cy.contains('Add graph')
      .click()
    cy.contains('LineGraph')
    cy.contains('Remove element')
  })
  it('Can add 3 elements', function() {
    cy.get('#graphs')
    .select('LineGraph')
  cy.contains('Add graph')
    .click()
    .click()
    .click()
    cy.get('#shownGraphs')
        .find('.graphComponent')
        .should('have.length', 3)
  })
  
})