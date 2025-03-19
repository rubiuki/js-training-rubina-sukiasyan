// Note: For all the tasks in this file, use only conditional branching (if).
// Task 1: Check Positive, Negative, or Zero
// Write a program that takes a number as input and checks if it is positive, negative, or zero.
// Write your code here
let number = 45

if(number > 0){
    console.log("You entered a positive number!")
}
else if(number < 0){
    console.log("You entered a negative number!")
}
else if (number === 0) {
    console.log("Your entered number is 0!")
}
else {
    console.log("Your entered value is not a number, please, enter a number!")
}

// Task 2: Grade Calculator
// Write a program that takes a student's score (0-100) and assigns a letter grade:
// 90-100 → A
// 80-89 → B
// 70-79 → C
// 60-69 → D
// < 60 → F
// Write your code here
let grade = -2

if(grade >= 90 && grade <= 100 ){
    console.log("Your grade is A!")
}
else if(grade >= 80 && grade <= 89){
    console.log("Your grade is B!")
}
else if(grade >= 70 && grade <= 79){
    console.log("Your grade is C!")
}
else if(grade >= 60 && grade <= 69){
    console.log("Your grade is D!")
}
else if(grade >= 0 && grade < 60) {
    console.log("Your grade is F!")
}
else{
    console.log("The grade should be a number in range of 0-100!")
}

// Task 3: Weekend Checker
// Ask the user to enter a day of the week (e.g., "Monday", "Saturday").
// Print "It's the weekend!" if it's Saturday or Sunday, otherwise print "It's a weekday".
// Write your code here

let day = "Sunday"

if(day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday"){
    console.log("It's a weekday")
}
else if(day === "Saturday" || day === "Sunday"){
    console.log("It's the weekend!")
}
else{
    console.log("Invalid day, please enter a weekday!")
}

// Task4: Game Score Adjuster
// Problem Statement:
// You are developing a simple game where the player starts with 10 points.
// If they answer a question correctly, their score increases by 1 (++).
// If they answer incorrectly, their score decreases by 1 (--).
// The program should check if the player’s score has reached 0 and print "Game Over" if true.
// Steps to Implement:
// Initialize score = 10.
// Ask the user if their answer is correct (true/false).
// Use if-else with ++ and -- to update the score.
// If the score reaches 0, print "Game Over".
// Otherwise, print the updated score.
// Write your code here

let score = 5;
let answer = false;

if (score > 0) {
    if (answer) {
        score++;
    } else {
        score--;
    }

    if (score === 0) {
        console.log("Game Over!");
    } else {
        console.log(`Your score is ${score}!`);
    }
} else {
    console.log("Game Over!");
}