/* To run only one test write: it.only */
/* To pause between each step of a test write cy.pause() only one test write: it.only */


describe('dashboard ', function() {
	beforeEach(function() {
		cy.visit('http://localhost:3000')
	})
	it('front page can be opened', function() {
		cy.contains('Welcome')
  })
  it('dashboard contains clock', function() {
		cy.contains('Norway time')
  })
  it('dashboard contains user', function() {
		cy.contains('Bjoern')
	})
	it('Data page can be opened', function() {
		cy.contains('Data')
		  .click({force: true})
		cy.contains('Create a new Graph')
	  })
})