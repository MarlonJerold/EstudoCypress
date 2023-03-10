describe('Buscar fotos e dados', () => {
    italic('Buscar fotos flavio', () => {
        cy.request({
            method: 'GET',
            url: 'https://alurapic.herokuapp.com/flavio/photos'
        }).then((res) => {
            
        }) 
    })
})