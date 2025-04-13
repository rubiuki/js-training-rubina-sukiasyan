// Task 1: Shopping List Manager
/*
You should create a function `manageShoppingList()` to manage a shopping list.

Requirements:
1. Create an array called `shoppingList` with some initial items (e.g., `["Milk", "Bread", "Eggs"]`).
2. Add a new item `"Butter"` to the list.
3. Remove the last item from the list.
4. Add a new item `"Juice"` to the beginning of the list.
5. Remove the first item from the list.
6. Print the final shopping list after all operations.

Example Call:
manageShoppingList();
*/
// Write your code here:

function manageShoppingList() {
    let shoppingList = ["Milk", "Bread", "Eggs"];
    shoppingList.push("Butter");
    shoppingList.pop();
    shoppingList.unshift("Juice");
    shoppingList.shift();
    console.log(shoppingList);
}

manageShoppingList();

// Task 2: Character Collector
/*
You should create a function `collectCharacters(str)` that takes a string and stores each character in an array, except for spaces.

Requirements:
1. The function should accept a string as input.
2. It should go through each character of the string and add it to an array.
3. Spaces should be ignored and not added to the array.
4. The function should return the final array of characters.

Example Call:
console.log(collectCharacters("hello world"));
// Expected output: ["h", "e", "l", "l", "o", "w", "o", "r", "l", "d"]
*/
// Write your code here:
function collectCharacters(str){
    let chars = [];
    if(typeof str !== "string"){
        return "Please enter a string";
    }
    for (let char of str.trim()){
        if (char !== " "){
            chars.push(char);
        }
    }
    return chars;
}

console.log(collectCharacters("hello world"));

// Task 3: Store Earnings Tracker
/*
You should create a function `recordSale(amount)` to track store earnings and another function `getTotalEarnings()` to calculate total earnings.

Requirements:
1. Create an array called `earnings` to store sale amounts.
2. Implement the function `recordSale(amount)`, which records a sale amount.
3. Implement the function `getTotalEarnings()`, which calculates and returns the total earnings.
4. Use `recordSale()` to add the following sales: `100`, `50`, `200`, `75`.
5. Call `getTotalEarnings()` and print the total earnings.

Example Call:
recordSale(100);
recordSale(50);
recordSale(200);
recordSale(75);
console.log(getTotalEarnings()); // Expected output: 425
*/
// Write your code here:
let earnings = [];
function recordSale(amount){
    earnings.push(amount);
}

function getTotalEarnings() {
    let total = 0;
    for (let i = 0; i < earnings.length; i++) {
        total += earnings[i];
    }
    return total;
}
recordSale(100);
recordSale(50);
recordSale(200);
recordSale(75);
console.log(getTotalEarnings());

// Task 4: Remove Duplicates from an Array
/*
You should create a function `removeDuplicates(arr)` that accepts an array of numbers and removes all duplicate values,
returning a new array with only the unique values.

Requirements:
1. The function should accept an array of numbers as input.
2. It should remove all duplicate numbers from the array.
3. The function should return the new array containing only unique numbers.
4. You are only allowed to use simple for loops and basic array methods such as:
   `push()`, `pop()`, `shift()`, or `unshift()` to solve this. You **cannot use methods like `sort()`, `filter()`, or `Set()`**.

Example Call:
console.log(removeDuplicates([11, 11, 2, 3, 4, 4, 55, 6, 2, 1]));
// Expected output: [11, 2, 3, 4, 55, 6, 1]
*/
// Write your code here:
function removeDuplicates(arr){
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!newArr.includes(arr[i])){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
console.log(removeDuplicates([11, 11, 2, 3, 4, 4, 55, 6, 2, 1]));