Cypress.Commands.add('addNewToDo', (data) => {
    cy.get('.new-todo').focus().click().type(data + '{enter}')
})

Cypress.Commands.add('removeFirstToDoInTheList', () => {
    cy.get('.destroy').first().invoke('show').click()
})