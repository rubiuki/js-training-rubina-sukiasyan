// Task1: Square a Number (Simple Callback)
// Requirements:
// Write a function calculateSquare(n, callback) that takes a number n
// and calls the callback function with the square of n.
// Write your code here
function calculateSquare(n, callback){
    return callback(n);
}

function square(n){
    return n * n;
}

console.log(calculateSquare(5, square));

// Task 2: Login Status (Simple Callback)
// Requirements:
// Write a function that checks if the provided username and password match the correct credentials.
// The function should call the callback function with a message indicating
// whether the user is logged in or if the credentials are wrong.
// Write your code here

let usernameInDb = "ruby";
let passwordInDb = "ruby5!";

function login(username, password, callback){
    return callback(username, password);
}

function validateCredentials(username, password){
    return username === usernameInDb && password === passwordInDb?
        "You are successfully logged in!" : "Wrong credentials! Try again!";
}

console.log(login('ruby', 'ruby5!', validateCredentials));
// Rubina jan the task is not implemented against the requirements
// Please read the requirements again
// You should have a function that checks if the username and password are correct or not
// And in the same function you should call the callback that logs the message
// The correct solution should be
let usernameInDb = "ruby";
let passwordInDb = "ruby5!";

function login(username, password, callback){
    // Call the callback with the result of validateCredentials
    const message = validateCredentials(username, password);
    return callback(message);
}

function validateCredentials(username, password){
    return username === usernameInDb && password === passwordInDb?
        "You are successfully logged in!" : "Wrong credentials! Try again!";
}

// Log the message returned by the callback
console.log(login('ruby', 'ruby5!', function(message) {
    console.log(message); // Output the message from the callback
}));


// Task 3: Sum of Numbers (Using for Loop and Callback)
// Requirements:
// Write a function sumNumbersUpTo(n, callback) that takes a number n
// and calculates the sum of numbers from 1 to n using a for loop.
// After the calculation, call the callback function with the result.
// Write your code here

function sumNumbersUpTo(n, callback){
    return callback(n);
}

function sum(n){
    let totalSum = 0;
    for(let i = 1; i <= n; i++){
        totalSum += i
    }
    return totalSum;
}

console.log(sumNumbersUpTo(8, sum));
// The same here, the task is not implemented in accordance to the requirements
// The correct solution should be
function sumNumbersUpTo(n, callback) {
  let totalSum = 0;
  for (let i = 1; i <= n; i++) {
    totalSum += i;
  }
  callback(totalSum);
}

function logSum(n) {
  console.log(n);
}

console.log(sumNumbersUpTo(8, logSum));
