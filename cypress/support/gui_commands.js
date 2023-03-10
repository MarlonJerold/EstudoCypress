Cypress.Commands.add('login', (nome, email, senha) => {
    cy.get('#name').type(nome)
    cy.get('#email').type(email)
    cy.get('#password').type(senha)
    cy.get('#register-submit').click()
})