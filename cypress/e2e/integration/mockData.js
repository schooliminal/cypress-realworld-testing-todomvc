const TODOS = {
    TODO_ITEM_ONE:'Buy Milk',
    TODO_ITEM_TWO:'Pay Rent',
    TODO_ITEM_THREE:'Pickup Dry Cleaning'
}

const TEN_TODOS = [
    'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'
]


const TEN_NUM_TODOS = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10
]

const TARGET_URL = 'http://127.0.0.1:8888'

// select elements using custom data attrs over css class
// select input field
const INPUT_SELECTOR = '[data-cy=".0.0"]' // '.new-todo'
// select todo's list
const TODOS_LIST = '[data-cy=".0.1.1"] li' // '.todo-list li'

const ITEMS_LEFT_COUNTER = '[data-reactid=".0.2.0"]' // '.todo-list li'


export {
    TODOS, 
    TARGET_URL,
    INPUT_SELECTOR,
    TODOS_LIST, 
    TEN_TODOS,
    TEN_NUM_TODOS,
    ITEMS_LEFT_COUNTER
} 

