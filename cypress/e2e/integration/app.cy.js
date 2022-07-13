
import { TODOS, TARGET_URL, INPUT_SELECTOR, TODOS_LIST} from './mockData'

describe("React TodoMVC", () => {


    beforeEach(() => {
        cy.visit(TARGET_URL) // load url
    })


    it('adds a single todo', () => {
        // cy.get('.new-todo') // select the newly created todo using class selector
        cy.get(INPUT_SELECTOR) // select the newly created todo  using custom data attr
            .type(`${TODOS.TODO_ITEM_ONE}{enter}`) // type specific todo + simulate 'enter' key click
        // cy.get('.todo-list li') 
        cy.get(TODOS_LIST) 
            .should('have.length', 1) 
    })

    it('adds three todos', () =>{
        cy.get(INPUT_SELECTOR) 
            .type(`${TODOS.TODO_ITEM_ONE}{enter}`)
            .type(`${TODOS.TODO_ITEM_TWO}{enter}`)
            .type(`${TODOS.TODO_ITEM_THREE}{enter}`)
            cy.get('.todo-list li') // select the newly created todo 
            .should('have.length', 3) 
        


    })


})