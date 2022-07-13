describe("React TodoMVC", () => {

    const TODO_ITEM_ONE = 'Buy Milk'
    const TODO_ITEM_TWO = 'Pay Rent'
    const TODO_ITEM_THREE = 'Pickup Dry Cleaning'


    beforeEach(() => {
        cy.visit('http://127.0.0.1:8888') // load url
        

    })


    it('adds a single todo', () => {
        cy.get('.new-todo') // select element 
            .type(`${TODO_ITEM_ONE}{enter}`) // type specific todo + simulate 'enter' key click
        cy.get('.todo-list li') // select the newly created todo 
            .should('have.length', 1) 
    })

    it('adds three todos', () =>{
        cy.get('.new-todo') 
            .type(`${TODO_ITEM_ONE}{enter}`)
            .type(`${TODO_ITEM_TWO}{enter}`)
            .type(`${TODO_ITEM_THREE}{enter}`)
            cy.get('.todo-list li') // select the newly created todo 
            .should('have.length', 3) 
        


    })


})