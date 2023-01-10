describe('Home Page', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
  })
  
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Should have a title', () => {
    cy.contains('The Source')
  })

  it('Should contain all available music', () => {
    cy.get('.tracks-container').within(() => {
      // cy.get('.tracks-container').should('have.length', 5)
      cy.get('.track-card-img-container').eq(0).should('contain', 'Future')
      cy.get('.track-card-img-container').eq(1).should('contain', 'Bob Marley')
    })
  })
      // cy.get('tbody').should('contain', )
      // .and('contain', 'Puffin on Zooties')
      // cy.get(':nth-child(2) > td > .card').should('contain', 'Puffin on Zooties')
      // cy.get(':nth-child(2) > td > .card > :nth-child(3)').should('contain', 'Puffin on Zooties')
      
      
    // it('Should organize music by category', () => {
    //   cy.get('.tracks-container').within(() => {
    //     cy.get('tbody').should('contain', 'Hip Hop')
    //   })
    // })    
})