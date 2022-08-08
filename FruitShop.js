// User basket
let userBasket = {
    banana: 0,
    berries: 0,
    grapes: 0,
    watermelon: 0,
    };


// Declare these variables to update later with Object methods Object.keys and Object.values
let values;
let keys;


// Select buttons 
const addToBasketButton = document.querySelectorAll(".basket-button button");
const basketPlus = document.querySelectorAll(".basket-plus");
const basketMinus = document.querySelectorAll(".basket-minus");
const basketFruitEmpty = document.querySelectorAll(".empty-fruit-button button");
const emptyEntireBasket = document.querySelector("#empty-basket");


// Select paragraph elements in the fruit basket section of the page so I am able to update them later based on the value of the let variable `values` 
let bananaCounter = document.querySelectorAll(".fruit-counter");
let banCount = document.getElementById("ban-count0");
let berriesCount = document.getElementById("ban-count1");
let grapesCount = document.getElementById("ban-count2");
let watermelonCount = document.getElementById("ban-count3");
let totalBasketCount = document.getElementById("total-fruits");


// This updateBasket function will run when any buttons with event handlers on the page are clicked
function updateBasket(e) {
    let value = e.target.dataset.fruit;
// value0 through value3 are defined in index.html on the Empty Basket button as data attributes with the fruit names as strings as values.
    let value0 = e.target.dataset.fruit0;
    let value1 = e.target.dataset.fruit1;
    let value2 = e.target.dataset.fruit2;
    let value3 = e.target.dataset.fruit3;
// The below variables are declared as data attributes on minus buttons, Empty banana, berries, grapes and watermelon buttons and Empty basket buttons in the fruit basket section of the page
    let checkDataSet = e.target.dataset.check;
    let emptyDataSet = e.target.dataset.empty;
    let basketEmpty = e.target.dataset.basketempty;
    

// If statement to enable updating of fruit basket values. 
    if (checkDataSet) {
        userBasket[value]--;
    }  else if (emptyDataSet) {
        userBasket[value] = 0;
    } else if (basketEmpty) {
// I could have used dot notation here instead of referencing a variable which points toward a string value that is equal to the fruit name.
        userBasket.banana = 0;
        userBasket[value1] = 0;
        userBasket[value2] = 0;
        userBasket[value3] = 0;
    } else if (!checkDataSet && !emptyDataSet && !basketEmpty) {
        userBasket[value]++;
    }

    values = Object.values(userBasket);
    keys = Object.keys(userBasket);
    console.log(value);
    console.log(value0);
    console.log(value1);
    console.log(value2);
    console.log(value3);
    console.log(values);

    // using innerHTML method on each counter individually. Would like to refactor in the future to make code more dry.
    const banCountVal = values[0];
    banCount.innerHTML = `
            <p>${banCountVal}</p>
            `;

    const berriesCountVal = values[1];
    berriesCount.innerHTML = `
                    <p>${berriesCountVal}</p>
                    `;
            
    const grapesCountVal = values[2];
    grapesCount.innerHTML = `
                    <p>${grapesCountVal}</p>
                    `;
                    
    const watermelonCountVal = values[3];
    watermelonCount.innerHTML = `
                    <p>${watermelonCountVal}</p>
                    `;


    // Use array.reduce to return a single value for total fruits basket counter  
    function tallyValues (tally, currentTotal) {
        
        return tally + currentTotal;
    }
        
    const basketTotal = values.reduce(tallyValues, 0);

    totalBasketCount.innerHTML = `
    <p>Total Fruits: ${basketTotal}</p>
    `;
    
}

// Function to add event listener to add to buttons on fruit cards 
function addEventListenerBasket(button) {
    button.addEventListener('click', updateBasket)
}


// Add event listener on fruit basket buttons 
addToBasketButton.forEach(addEventListenerBasket);
basketPlus.forEach(addEventListenerBasket);
basketMinus.forEach(addEventListenerBasket);
basketFruitEmpty.forEach(addEventListenerBasket);


// Add event listener on empty basket button and call updateBasket function
emptyEntireBasket.addEventListener('click', updateBasket);




