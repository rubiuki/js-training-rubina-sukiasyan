// Task 1: Function Declaration
// Requirement: Declare a function using the function declaration syntax.
// The function should accept two parameters: 'firstName' and 'lastName',
// and return a full name by combining both parameters with a space in between.
// Write your code here
function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

fullName("Rubina", "Sukiasyan");

// Task 2: Function Expression
// Requirement: Declare a function using a function expression.
// The function should accept a number as a parameter and return whether the number is even or odd.
// Write your code here
let oddOrEven = function (number) {
    return +number % 2? "odd" : "even";
}

oddOrEven(10);

// Task 3: Default Value with an Optional Parameter
// Requirement: Create a function that accepts a 'discount' parameter for an item price.
// If no 'discount' is provided, it should default to 0%. The function should calculate and return the final price after applying the discount.
// Write your code here
function applyDiscount(itemPrice, discount = 0){
    return itemPrice * (1 - discount/100);
}

applyDiscount(50000, 15);