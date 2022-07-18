// User basket

let userBasket = {
    banana: 0,
    berries: 0,
    grapes: 0,
    watermelon: 0,
    };
    
// Select elements 
const basketButton = document.querySelectorAll(".basket-button button");

// Function to run when event handler fires when add to basket button in clicked

function updateBasket(e) {
    let value = e.target.dataset.fruit;

    userBasket[value]++;
}

// Function to add event listener to add to basket buttons on fruit cards 
function addEventListenerBasket(button) {
    button.addEventListener('click', updateBasket)
}

// Add event listener on basket buttons 
basketButton.forEach(addEventListenerBasket);







