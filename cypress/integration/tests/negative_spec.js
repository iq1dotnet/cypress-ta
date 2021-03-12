describe('Add todo', function () {
    beforeEach(function () {
        cy.visit("https://todomvc.com/examples/angular2/")
    })

    it('Add todo without a title', function () {
        cy.get('.new-todo').focus().click().type("  "+ '{enter}')
        cy.get('.todo-list').should('not.exist')
        cy.get('.todo-count').should('not.exist')
    })

    it('Delete todo from an empty list', function () {
        cy.get('.todo-list').should('not.exist')
        cy.get('.destroy').should('not.exist')
        cy.get('.todo-count').should('not.exist')
    })

    it('Verify todo can not be edited with single click', function () {
        cy.addNewToDo("Todo")
        cy.get('.view').contains(new RegExp(new RegExp("Todo", "g"))).click()
        cy.get('.editing').should('not.exist')
        cy.get('label').should('have.text', "Todo")
    })

    it('Clear completed button does not clear not completed todos', function () {
        cy.addNewToDo("Todo")
        cy.addNewToDo("Todo1")
        cy.get('.toggle').first().check()
        cy.get('li').should('have.class', 'completed')
        cy.get('.clear-completed').should('exist')
        cy.get('.clear-completed').click()
        cy.get('li').should('not.have.class', 'completed')
        cy.get('.todo-list').should('exist')
    })
})