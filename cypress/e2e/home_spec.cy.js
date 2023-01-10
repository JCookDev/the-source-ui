describe('Home Page Flows', () => {
  beforeEach(() => {
    cy.intercept('https://the-source-backend.herokuapp.com/api/v1/music', {
      method: 'GET',
      fixture: '../fixtures/tracks.json'
    })
    cy.visit('http://localhost:3000/')
  })

  it('Should see title and add my music button upon page load', () => {
    cy.get('h1').contains('The Source')
      .get('.addMusicButton').contains('Add my Music')
  })

  it('Should display all available music upon page load', () => {
    cy.get('.tracks-section').within(() => {
      cy.get('.tracks-container >').should('have.length', 5)
        .get('.cover-text').eq(0).should('contain', 'Future')
        .get('.cover-text').eq(1).should('contain', 'Bob Marley')
        .get('.cover-text').eq(2).should('contain', 'Miss Aphrodite')
        .get('.cover-text').eq(3).should('contain', 'Bobby Blue Bland')
        .get('.cover-text').eq(4).should('contain', 'Metallica')
    })
  })

  it('Should go to form view', () => {
    cy.get('.addMusicButton').click()
    cy.visit('http://localhost:3000/form')
    cy.get('form').should("exist")
  })
})