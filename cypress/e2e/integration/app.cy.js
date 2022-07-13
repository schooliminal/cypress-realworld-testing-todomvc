
import { TODOS, TARGET_URL, INPUT_SELECTOR, TODOS_LIST, TEN_TODOS} from './mockData'

describe("React TodoMVC", () => {


    beforeEach(() => {
        cy.visit(TARGET_URL) // load url
    })


    it('adds a single todo', () => {
        cy.get(INPUT_SELECTOR) 
            .type(`${TODOS.TODO_ITEM_ONE}{enter}`) // type specific todo + simulate 'enter' key click
        cy.get(TODOS_LIST) 
            .should('have.length', 1) 
    })

    it('adds three todos', () =>{
        cy.get(INPUT_SELECTOR) 
            .type(`${TODOS.TODO_ITEM_ONE}{enter}`)
            .type(`${TODOS.TODO_ITEM_TWO}{enter}`)
            .type(`${TODOS.TODO_ITEM_THREE}{enter}`)
            cy.get(TODOS_LIST)
            .should('have.length', 3) 
    })

    it('adds 10 todos', () =>{
        TEN_TODOS.forEach(todo => { cy.get(INPUT_SELECTOR).type(`${todo}{enter}`) })
        cy.get(TODOS_LIST).should('have.length', TEN_TODOS.length) 
    })

})