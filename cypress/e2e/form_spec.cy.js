describe('Form Flows', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/form')
  })

  it('Should see title upon page load', () => {
    cy.get('h1').contains('The Source')
  })

  it('Should have a form for user', () => {
    cy.get('form').should("exist")
    cy.get('[placeholder="Enter Cover Art URL"]')
      .should('have.value', '')
    cy.get('[placeholder="Enter Artist Name"]')
      .should('have.value', '')
    cy.get('#genre')
      .should('have.value', '')
      .contains('Choose your Genre')
    cy.get('[placeholder="Enter Song Title"]')
      .should('have.value', "")
    cy.get('[placeholder="Enter Audio File Link"]')
      .should('have.value', "")
  })

  it('Should have a Submit my Music! button for the user to upload their music', () => {
    cy.get('.submitMusicButton').should("exist")
  })

  it('Should allow user to type URL for their cover art', () => {
    cy.get('[placeholder="Enter Cover Art URL"]')
      .type("https://upload.wikimedia.org/wikipedia/en/f/f5/Thestranger1977.jpg")
      .should('have.value', "https://upload.wikimedia.org/wikipedia/en/f/f5/Thestranger1977.jpg")
  })

  it('Should allow user to type the artist name', () => {
    cy.get('[placeholder="Enter Artist Name"]')
      .type("Billy Joel")
      .should('have.value', "Billy Joel")
  })

  it('Should allow user to select genre', () => {
    cy.get('#genre')
      .select("Rock")
      .should('have.value', "Rock")
  })
  
  it('Should allow user to type song title', () => {
    cy.get('[placeholder="Enter Song Title"]')
      .type("Vienna")
      .should('have.value', "Vienna")
  })
  
  it('Should allow user type URL for their audio file', () => {
    cy.get('[placeholder="Enter Audio File Link"]')
      .type("www.mysong.mp3")
      .should('have.value', "www.mysong.mp3")
  })

  it('Should enable submit button after user completes form and allow user to click', () => {
    cy.get('[placeholder="Enter Cover Art URL"]')
      .type("https://upload.wikimedia.org/wikipedia/en/f/f5/Thestranger1977.jpg")
      .should('have.value', "https://upload.wikimedia.org/wikipedia/en/f/f5/Thestranger1977.jpg")
    cy.get('[placeholder="Enter Artist Name"]')
      .type("Billy Joel")
      .should('have.value', "Billy Joel")
    cy.get('#genre')
      .select("Rock")
      .should('have.value', "Rock")
    cy.get('[placeholder="Enter Song Title"]')
      .type("Vienna")
      .should('have.value', "Vienna") 
    cy.get('[placeholder="Enter Audio File Link"]')
      .type("www.mysong.mp3")
      .should('have.value', "www.mysong.mp3")
    cy.get('.submitMusicButton').click()
  })

  it('Should post new data to server', () => {
    cy.get('h1').contains('The Source').click()
    cy.request({
      method: 'POST',
      url: 'http://localhost:3001/api/v1/music',
      form: true,
      body: {
        "coverart": "https://upload.wikimedia.org/wikipedia/en/f/f5/Thestranger1977.jpg",
        "artist": "Billy Joel",
        "genre": "Rock",
        "title": "Vienna",
        "audiofile": "www.mysong.mp3",
    }
    })

    it('Should display new track after clicking The Source to navigate back home')
    cy.intercept('http://localhost:3001/api/v1/music', {
      method: 'POST',
      fixture: '../fixtures/post.json'
    })
    cy.visit('http://localhost:3000/')
  })
})