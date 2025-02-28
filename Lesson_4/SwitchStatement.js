const {userInput} = require("../utils/userInput");

// Task 1: Basic Calculator
// Objective:
// Create a simple calculator that takes two numbers and an operator (+, -, *, /) as input, then performs the corresponding mathematical operation using a switch statement.

// Steps:

//  1. Ask the user to enter the first number. Convert it to a number type if necessary.
//  2. Request the user to enter an operator (+, -, *, /).
//  3. Require the user to enter the second number.
//  4. Use a switch statement to check the operator and perform the corresponding operation:
//  5. If +, add the two numbers.
//  6. If -, subtract the second number from the first.
//  7. If *, multiply the two numbers.
//  8. If /, divide the first number by the second (ensure no division by zero).
//  9. Display the result of the calculation.
// 10. If the user enters an invalid operator, show an error message.
// Write your code here:

let firstNumber = userInput("Please provide the first number: ");
const operator = userInput("Please provide one of these operators +, -, *, /: ");
let secondNumber = userInput("Please provide the second number: ");

if (isNaN(firstNumber) || isNaN(secondNumber)) {
    console.log("Arithmetic operations can be done only by numbers! Please enter a number!");
} else {
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);

    switch (operator) {
        case "+":
            console.log(`Your addition result is ${firstNumber + secondNumber}!`);
            break;
        case "-":
            console.log(`Your subtraction result is ${secondNumber - firstNumber}!`);
            break;
        case "*":
            console.log(`Your multiplication result is ${firstNumber * secondNumber}!`);
            break;
        case "/":
            if (secondNumber !== 0) {
                console.log(`Your division result is ${firstNumber / secondNumber}!`);
            } else {
                console.log('Division by 0 is not possible!');
            }
            break;
        default:
            console.log('Invalid operator! Please type *, /, - or + operators!');
    }
}

// Task 2: Season Finder
// Objective:
// Write a program that takes the name of a month and logs which season it belongs to (Winter, Spring, Summer, or Fall).

// Steps:

//  1. Request the user to enter a month name (e.g., January, February).
//  2. Use a switch statement to check the month and log the season(e.g. if January is entered log "Winter"):
//  3. Winter: December, January, February
//  5. Spring: March, April, May
//  6. Summer: June, July, August
//  7. Autumn: September, October, November
//  8. Log the corresponding season.
//  9. If the user enters an invalid month name, log "Invalid month! Please enter a valid month name."
// Write your code here:

let monthName = userInput("Please provide a month name!");

switch (monthName){
    case "December":
    case "January":
    case "February":
        console.log("Winter!")
        break;
    case "March":
    case "April":
    case "May":
        console.log("Spring!")
        break;
    case "June":
    case "July":
    case "August":
        console.log("Summer!")
        break;
    case "September":
    case "October":
    case "November":
        console.log("Autumn!")
        break;
    default:
        console.log("Invalid month! Please enter a valid month name.")
}


// Task 3: Determine the Age Group
// Objective:
// Write a program that takes an age as input and determines which age group the person belongs to using switch(true).

// Steps:

//  1. Request the user to enter their age.
//  2. Use a switch(true) statement to evaluate the age and categorize it into one of the following groups:
//     -If the age is less than 0, print "Invalid age".
//     -If the age is between 0 and 12 (inclusive), print "Child".
//     -If the age is between 13 and 17 (inclusive), print "Teenager".
//     -If the age is between 18 and 64 (inclusive), print "Adult".
//     -If the age is 65 or older, print "Senior".
//  3. If the user enters a non-numeric value, print "Please enter a valid age."
// Write your code here:

let age = +userInput("Please enter your age!");

switch (true){
    case age < 0:
        console.log("Invalid age")
        break
    case age > 0 && age <= 12:
        console.log("Child")
        break
    case age >= 13 && age <= 17:
        console.log("Teenager")
        break
    case age >= 18 && age <= 64:
        console.log("Adult")
        break
    case age >= 65:
        console.log("Senior")
        break
    default:
        console.log("Please enter a valid age!")
}