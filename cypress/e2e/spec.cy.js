describe('Create and connect to an account', () => {
  it('Visits the Oc commerce site and creates then logs in a user', () => {
    cy.visit('/home')

    // 1) Création du compte
    cy.contains('SIGNUP').click()
    cy.url().should('include', '/user/signup')

    cy.get('#fname').type('fakeuser11211')
    cy.get('#lname').type('toto')
    cy.get('#username').type('fakeuser11211')
    cy.get('#email').type('fake@email.com')
    cy.get('#pass').type('1hstesh<23456789')
    cy.get('#re_pass').type('1hstesh<23456789')

    // on intercepte la requête d'inscription
    cy.intercept('POST', '/api/register').as('register')

    // on clique sur le vrai bouton submit
    cy.get('input[type="submit"][value="Register"]').click()

    // on attend la réponse puis on vérifie la redirection
    //cy.wait('@register')
    cy.url().should('include', '/user/login')

    // 2) Connexion avec le compte fraîchement créé
    cy.get('#your_name').type('fakeuser11211')
    cy.get('#your_pass').type('1hstesh<23456789')

    // idem pour la connexion
    cy.intercept('POST', '/api/login').as('login')
    cy.get("button[type='submit']").contains('Log in').click()
    //cy.wait('@login')

    cy.url().should('include', '/home')
    cy.contains('FAVOURITE').click()
  })
})
