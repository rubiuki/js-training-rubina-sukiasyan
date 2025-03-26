// Task 1. Convert to Arrow Functions
// Requirement: Convert the given regular functions into arrow functions.

function multiply(a, b) {
    return a * b;
}

// Writhe your code here
let toMultiply = (a, b) => a * b;
console.log(toMultiply(2, 3));

function cube(n) {
    return n * n * n;
}
// Writhe your code here
let numberCube = n => n * n * n;
console.log(numberCube(2));

function sayHello(name) {
    return "Hello, " + name + "!";
}
// Writhe your code here
let welcome = name => `Hello, ${name}!`;
console.log(welcome("Rubina"));

// Task 2. Arrow Function with Default Parameters
// Requirement:
// Create an arrow function greet that takes a name parameter.
// The parameter should have a default value of "Guest".
// The function should return "Hello, [name]!".
// Writhe your code here
let greet = (name = "Guest") => `Hello, ${name}!`;
console.log(greet());

// Task 3. Calculate Percentage
// Requirement:
// Write an arrow function that takes two arguments:
// total: the total value
// percentage: the percentage to calculate
// The function should return the calculated percentage of the total.
// Writhe your code here
let calculatePercentage = (total, percentage) => total * (percentage / 100);
console.log(calculatePercentage(10000, 50));