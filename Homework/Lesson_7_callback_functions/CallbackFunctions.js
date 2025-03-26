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