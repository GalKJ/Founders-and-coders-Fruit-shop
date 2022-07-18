// User basket

let userBasket = {
    banana: 0,
    berries: 0,
    grapes: 0,
    watermelon: 0,
    };
    
// Select elements 
const basketButton = document.querySelectorAll(".basket-button button");

// Function to run when event handler fires when basket button in clicked

function logTarget(e) {
    console.log(e.target.dataset.fruit);
}

// Function to add event listener to add to basket buttons on fruit cards 
function addEventListenerBasket(button) {
    button.addEventListener('click', logTarget)
}

// Add event listener on basket buttons 
basketButton.forEach(addEventListenerBasket);







