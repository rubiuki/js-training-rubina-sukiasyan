// Function to get input synchronously
function userInput(message) {
    const readlineSync = require("readline-sync");
    let input = readlineSync.question(message ?? "Please enter your input: "); // Synchronously ask for input
    return input;
}

module.exports = { userInput };