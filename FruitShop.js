// User basket

let userBasket = {
    banana: 0,
    berries: 0,
    grapes: 0,
    watermelon: 0,
    };
    
// Select elements 
const basketButton = document.querySelectorAll(".basket-button button");
const basketPlus = document.querySelectorAll(".basket-plus");
const basketMinus = document.querySelectorAll(".basket-minus");
const basketFruitEmpty = document.querySelectorAll(".empty-fruit-button button");
const emptyEntireBasket = document.querySelector("#empty-basket");
// Function to run when event handler fires when add to basket buttons are clicked

function updateBasket(e) {
    let value = e.target.dataset.fruit;
    let value0 = e.target.dataset.fruit0;
    let value1 = e.target.dataset.fruit1;
    let value2 = e.target.dataset.fruit2;
    let value3 = e.target.dataset.fruit3;
    let checkDataSet = e.target.dataset.check;
    let emptyDataSet = e.target.dataset.empty;
    let basketEmpty = e.target.dataset.basketempty;

    if (checkDataSet) {
        userBasket[value]--;
    }  else if (emptyDataSet) {
        userBasket[value] = 0;
    } else if (basketEmpty) {
        userBasket[value0] = 0;
        userBasket[value1] = 0;
        userBasket[value2] = 0;
        userBasket[value3] = 0;
    } else if (!checkDataSet && !emptyDataSet && !basketEmpty) {
        userBasket[value]++;
    }

    
}

// Function to add event listener to add to basket buttons on fruit cards 
function addEventListenerBasket(button) {
    button.addEventListener('click', updateBasket)
}

// Add event listener on basket buttons 
basketButton.forEach(addEventListenerBasket);
basketPlus.forEach(addEventListenerBasket);
basketMinus.forEach(addEventListenerBasket);
basketFruitEmpty.forEach(addEventListenerBasket);

// Add event listener on empty basket button and call updateBasket function
emptyEntireBasket.addEventListener('click', updateBasket);



