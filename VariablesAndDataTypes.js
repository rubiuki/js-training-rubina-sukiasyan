// Task 1: Identify When to Use let or const
// Below are some situations. Decide whether let or const should be used and declare the variables accordingly.

// 1. A variable that stores a user's name and does not change.
const userName = 'Rubina'
// 2. A counter that starts from 0 and will be updated later.
let counter = 0
// 3. The value of Pi (3.14159).
const pi = 3.14159
// 4. A variable to hold a user’s age, which might be updated later.
let age = 28
// 5. A list of colors that should remain the same throughout the program.
const red = '#FF0000'
const yellow = '#FFFF00'
const blue = '#0000FF'
// Write your answers in JavaScript:

// Task 2: Use typeof to Check Data Types
// Declare variables of different types:

// - A number
let count = 15
console.log(typeof count)
// - A string
let name = 'Rubina'
console.log(typeof name)
// - A boolean
let isFound = true
console.log(typeof isFound)
// - null
let email = null
console.log(typeof email)
// - undefined
let phoneNumber;
console.log(typeof phoneNumber)
// - A symbol
let symbol1 = Symbol("boo")
console.log(typeof symbol1)
// - A BigInt
let milliseconds = 9007199254740991n
console.log(typeof milliseconds)
// Use typeof to check and log their types.
// Example:
// let num = 5
// console.log(typeof num)
// Write your answers in JavaScript:

// Task 3: Convert Different Values to Strings, Numbers and Booleans
// Log the result and write the answer next to the console.log() statement
// Example:
// Convert the following number to a string and log the result:

const orderNumber = 98765;
console.log(String(orderNumber)); // output -> "98765"
// Convert the following boolean to a string and log the result:

const isActive = true;
console.log(String(isActive)) // -> "true"

// Convert the following string to a number and log the result:

const price = "49.99";
console.log(Number(price)) // -> 49.99

// Convert the following boolean to a number and log the result:

const hasAccess = false;
console.log(Number
(hasAccess)) // -> 0

// Convert the following empty string to a number and log the result:

const emptyText = "";
console.log(Number(emptyText)) // -> 0

// Convert the following string to a boolean and log the result:

const username = "JohnDoe";
console.log(Boolean(username)) // -> true

// Convert the following number to a boolean and log the result:

const itemCount = 0;
console.log(Boolean(itemCount)) // -> false

// Convert the following undefined value to a number and log the result:

const notDefined = undefined;
console.log(Number(notDefined)) // -> NaN

// Convert the following string containing spaces to a boolean and log the result:

const spaceString = "   ";
console.log(Boolean(spaceString)) // -> true

// Convert the following null value to a string and log the result:

const emptyValue = null;
console.log(String(emptyValue)) // -> 'null'
