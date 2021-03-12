Cypress.Commands.add('addNewToDo', (todoTitle) => {
    cy.get('.new-todo').focus().click().type(todoTitle+ '{enter}')
})

Cypress.Commands.add('removeFirstToDoInTheList', () => {
    cy.get('.destroy').first().invoke('show').click()
})