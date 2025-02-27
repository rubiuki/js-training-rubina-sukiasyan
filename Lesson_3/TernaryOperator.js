// Note: For all the tasks in this file, write the code using both and the conditional branching (if) and the ternary operator(?).
// Task 1: Even or Odd Number
// Write a program that checks if a number is even or odd.
// Write two programs one using the conditional branching if
// Another using the ternary operator (?)
// Write your code here
let number = -5

if(number > 0) {
    if (number % 2) {
        console.log("Odd number!")
    } else {
        console.log("Even number!")
    }
} else {
    console.log("Please enter only natural numbers!")
}

//With ternary operator
console.log(
    number > 0
        ? number % 2
            ? "Odd number!"
            : "Even number!"
        : "Please enter only natural numbers!"
);

// Task 2: Pass or Fail
// Ask the user for their exam score (0-100).
// If the score is 50 or above, print "Pass"; otherwise, print "Fail".
// Write two programs one using the conditional branching if
// Another using the ternary operator (?)
// Write your code here

let examScore = 15

if(examScore >= 50 && examScore <= 100){
    console.log("Pass!")
}
else if (examScore >= 0){
    console.log("Fail!")
}
else{
    console.log("Exam score should be a number in range of 0-100!")
}

//With ternary operator
console.log(
    examScore >= 50 && examScore <= 100
        ? "Pass!"
        : examScore >= 0
            ? "Fail!"
            : "Exam score should be a number in range of 0-100!"
);