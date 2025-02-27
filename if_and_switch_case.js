const {userInput} = require("./userInput");
const myInput = userInput("Please provide number from 1-7: ");// Problem:

// You are building a scheduling application that requires converting a numeric input (1-7) into the corresponding day of the week.
// The application should handle the following:

// If the input number is 1, it should log "Monday".
// If the input number is 2, it should log "Tuesday".
// If the input number is 3, it should log "Wednesday".
// If the input number is 4, it should log "Thursday".
// If the input number is 5, it should log "Friday".
// If the input number is 6, it should log "Saturday".
// If the input number is 7, it should log "Sunday".
// If the input number is outside the range of 1-7, it should return an error message: "Invalid day number. Please enter a number between 1 and 7."
// The program should be able to process this input and output the correct day, or display an error message if the number is invalid.
let day = +myInput

switch (day){
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;
    case 7:
        console.log("Sunday")
        break;
    default:
        console.log("Invalid day number. Please enter a number between 1 and 7.")
}

if(day === 1){
    console.log("Monday")
}
else if(day === 2){
    console.log("Tuesday")
}
else if(day === 3){
    console.log("Wednesday")
}
else if(day === 4){
    console.log("Thursday")
}
else if(day === 5){
    console.log("Friday")
}
else if(day === 6){
    console.log("Saturday")
}
else if(day === 7){
    console.log("Sunday")
}
else{
    console.log("Invalid day number. Please enter a number between 1 and 7.")
}