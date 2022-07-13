import { INPUT_SELECTOR, TEN_TODOS, TEN_NUM_TODOS } from '../e2e/integration/mockData'


Cypress.Commands.add("create10Todos", () => {
    TEN_TODOS.forEach(todo => { cy.get(INPUT_SELECTOR).type(`${todo}{enter}`) })
})

Cypress.Commands.add("create10NumTodos", () => {
    TEN_NUM_TODOS.forEach(todo => { cy.get(INPUT_SELECTOR).type(`${todo}{enter}`) })
})