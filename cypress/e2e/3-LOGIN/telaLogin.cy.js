describe('Login e registro de usuarios', () => {

    beforeEach(() => {
        cy.visit('https://www.onlinegdb.com/login');
    })
    
    it.only('Verifica mensagens de validação', () => {
        cy.contains('a', 'Register').click();
        cy.contains('input', 'Register Now').click();
        cy.contains('Invalid email id.').should('be.visible');
        cy.contains('Name should contain alphabets or numbers.').should('be.visible');
        cy.contains('Password should be of minimum length 6.').should('be.visible');
    })

    it.only('Verifica mensagens de email inválido', () => {
        cy.contains('a', 'Register').click();
        cy.contains('input', 'Register Now').click();
        cy.get('#name').type('Marlon Jerold');
        
    })

    it.only('Fazer cadastro de usuario', () => {
        cy.contains('a', 'Register').click();
        cy.login('marlon jerold', 'jeroldmarlon12@gmail.com', '12345678')
    })

} )