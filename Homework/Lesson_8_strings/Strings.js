// Task 1: Get String Length
// Requirement: Write a function that receives
// a string as input and returns the length of the string.
// Write your code here!
function getStringLength(input) {
    return input.length;
}

console.log(getStringLength("Rubina"));

// Task 2: Print Each Character
// Requirement: Write a function that receives a string and prints each character on a new line.
// The function should validate that the input is a string and that its length is between 1 and 50 characters.
// If the input is invalid, display an appropriate message.
// Write your code here!

function printEachCharacter(input) {
    if (typeof input !== "string" || input.length < 1 || input.length > 50) {
        console.log("Your input must be a string with length between 1 and 50!");
        return;
    }
    for (let char of input){
        console.log(char);
    }
}

printEachCharacter("Rubina Sukiasyan");

// Task 3: Capitalize Name and Surname
// Requirement: Write a function that receives a string containing a name and surname.
// The function should convert the first letter of the name and surname to uppercase
// and return the updated string.
// The function should also validate that the input is a string and contains exactly two parts (name and surname).
// Write your code here!

function capitalizeNameAndSurname(fullName) {
    if (typeof fullName !== "string" || fullName.trim().split(" ").length !== 2) {
        console.log("Your full name must be a string with 2 parts: name and surname!");
        return;
    }

    let parts = fullName.trim().split(" ");

    parts[0] = parts[0][0].toUpperCase() + parts[0].slice(1);
    parts[1] = parts[1][0].toUpperCase() + parts[1].slice(1);

    return parts.join(" ");
}

capitalizeNameAndSurname("rubina sukiasyan");


// Task 4: Alternate Case
// Requirement: Write a function that receives a string with a minimum length of 10
// and a maximum length of 20 characters.
// The function should return the string with characters alternated between uppercase and lowercase.
// For example, "test" should become "TeSt".
// If the string length is outside the specified range, display an appropriate message.
// Write your code here!

function alternateBetweenLowerAndUpperCase(input) {
    if (typeof input !== "string" || input.length < 10 || input.length > 20) {
        console.log("Your input must be a string between the length of 10 to 20!");
        return;
    }
    let result = "";

    for (let i = 0; i < input.length; i++) {
        result += i % 2
            ? input[i].toLowerCase()
            : input[i].toUpperCase()
    }

    return result;
}

console.log(alternateBetweenLowerAndUpperCase("Good Morning!"))

// Task 5: Check Palindrome
// Requirement: Write a function that receives a string and checks if the string is a palindrome
// (i.e., the string is the same forwards and backwards).
// The function should return true if the string is a palindrome and false otherwise.
// Ignore spaces and punctuation.
// Example:
// Input: "racecar"
// Output: true
// Explanation: The string "racecar" is the same forwards and backwards, so the output is true.
// Write your code here!

function isPalindrome(input) {
    let filtered = input.toLowerCase().replace(/[^a-z0-9]/g, '');

    for (let i = 0; i < Math.floor(filtered.length / 2); i++) {
        if (filtered[i] !== filtered[filtered.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome("noon"))


// Task 6: Count Specific Character in String
// Requirement: Write a function that receives two values: a main string and a character.
// The function should return how many times the specified character appears in the string.
// Write your code here!

function findSpecificChar(input, character) {
    if(typeof character !== "string" || typeof input !== "string" || input.length < 1 || character.length < 1) {
        console.log("Your input must be a string with more than 1 character!");
        return;
    }
    let count = 0;
    for (let char of input) {
        if (char === character) {
            count++;
        }
    }
    return count;
}

console.log(findSpecificChar("hello", "l"));