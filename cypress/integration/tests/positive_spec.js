describe('Add todo', function () {
    beforeEach(function () {
        cy.visit("https://todomvc.com/examples/angular2/")
    })

    it('Add new todo in the list', function () {
        cy.addNewToDo("New to do text called like this")
        cy.get('.todo-count').should('be.visible')
    })

    it('Remove a todo in the list', function () {
        cy.addNewToDo("First")
        cy.get('.todo-count').should('be.visible')
        cy.removeFirstToDoInTheList()
        cy.get('.destroy').should('not.exist')
        cy.get('.todo-count').should('not.exist')
    })

    it('Edit a todo', function () {
        cy.addNewToDo("Todo")
        cy.get('.view').contains(new RegExp(new RegExp("Todo", "g"))).dblclick()
        cy.get('.editing').type(" edited {enter}")
        cy.get('label').should('have.text', "Todo" + " edited")
    })

    it('Mark todo as completed>', function () {
        cy.addNewToDo("Todo")
        cy.get('.toggle').check()
        cy.get('li').should('have.class', 'completed')
    })
})