
import { TODOS, TARGET_URL, INPUT_SELECTOR, TODOS_LIST, TEN_TODOS, TEN_NUM_TODOS, ITEMS_LEFT_COUNTER} from './mockData'

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

    it('check text "TEN" in last todo', () =>{
        TEN_TODOS.forEach(todo => { cy.get(INPUT_SELECTOR).type(`${todo}{enter}`) })
        cy.create10Todos() // using commands.js
        cy.get(TODOS_LIST).eq(TEN_TODOS.length-1).should('contain', 'ten') 
    })

    it('check text inside "label" tag', () =>{
        cy.get(INPUT_SELECTOR).type(`${TODOS.TODO_ITEM_ONE}{enter}`) 
        cy.get(TODOS_LIST).eq(0).find('label').should('contain', TODOS.TODO_ITEM_ONE)

    })

    it("should display 10 numerical todos and '10 items left' counter ", () => {
        cy.create10NumTodos()
        TEN_NUM_TODOS.forEach((todo, idx) => { 
            cy.get(TODOS_LIST).eq(idx).find('label').should('contain', TEN_NUM_TODOS[idx])
        })

        cy.get(ITEMS_LEFT_COUNTER).should('contain', '10 items left')
    })
          
})