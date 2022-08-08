# Founders-and-coders-Fruit-shop

Fruit Shop project for Founders and Coders skills bootcamp application

This project is to build a fruit shop that lists fruits and allows a user to create a shopping basket. The user can add and remove items from the basket, and can see the contents of their basket on the page.

## Future refactoring

After revisiting this code I'm aware that I could refactor

- add `class='buttons'` to all buttons on page and use `buttons.forEach((button) => { button.addEventListener("click", updateBasket); });` to add an event listener that calls the function `updateBasket`.
- use only 2 data attributes `data-fruit` `data-action` with different values rather than different property names _and_ values.
- use dot notation rather than referencing variables that reference data attributes that hold string values such as `'banana'` when I could just write `userBasket.banana` for example.
