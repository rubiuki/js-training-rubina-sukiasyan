// ✅ Task 1: Create a User Object
// Description:
// Create a function createUser that takes three arguments: name, age, and isAdmin.
// It should return an object with those properties and values.
// Requirements:
// - Use object literal syntax to build the object.
// - The returned object should look like: { name: 'Alice', age: 30, isAdmin: true }

function createUser(name, age, isAdmin) {
    // your code here
      return {
        name,
        age,
        isAdmin,
    }
}
createUser("John", 25, false);

// ✅ Task 2: Calculate Total Sales
// Description:
// Write a function calculateTotalSales that takes a nested object representing products sold during the day.
// Each product key contains an object with price and quantitySold.
// The function should return the total revenue.
// Requirements:
// - Use a for...in loop to iterate over the object.
// - Multiply price * quantitySold for each product and sum the results.

let salesData = {
    apple: {
        price: 0.5,
        quantitySold: 30
    },
    banana: {
        price: 1.5,
        quantitySold: 50
    },
    orange: {
        price: 1.2,
        quantitySold: 40
    },
    mango: {
        price: 2,
        quantitySold: 20
    }
};

function calculateTotalSales(salesData) {
    // your code here
    let result = 0;
    for(let soldItem in salesData) {
        result += salesData[soldItem].price * salesData[soldItem].quantitySold;
    }
    return result;
}

calculateTotalSales(salesData);

// ✅ Task 3: Convert Array to Object
// Description:
// Create a function arrayToObject that takes an array and returns an object.
// The object should have the array indexes as keys and the elements as values.
// Requirements:
// - Use a loop to build the object manually (no Object.fromEntries).
// - Return the constructed object.

function arrayToObject(arr) {
    // your code here
    let users = {};
    for (let i = 0; i < arr.length; i++) {
        users[i] = arr[i];
    }
    return users;
}

arrayToObject(["Rubina", "Ani", "Zoya", "Marianna"]);

// ✅ Task 4: Get Keys with String Values Only
// Description:
// Create a function getStringKeys that takes an object and returns an array of keys
// whose values are strings.
// Requirements:
// - Use a loop or Object.keys() to iterate through the object.
// - Return only the keys where the value is of type 'string'.

let keys = {
    name : "Rubina",
    age : 25,
    profession: "QA",
    hobby : "music",
    employmentYears : 10
}

function getStringKeys(obj) {
    let strArr = [];
    // your code here
    for (let key in obj) {
        if(typeof obj[key] === "string") {
            strArr.push(key);
        }
    }
    return strArr;
}

getStringKeys(keys);

// ✅ Task 5: Merge Two Objects
// Description:
// Write a function mergeObjects that takes two objects and returns a new object that combines the properties of both.
// If the same key exists in both, the value from the second object should overwrite the first.
// Requirements:
// - Do not modify the original objects.

let obj1 = {
    name : "Rubina",
    age : 25,
    profession: "QA",
    hobby : "music",
    employmentYears : 10
};

let obj2 = {
    name: "Lilit",
    hair : "brunnete",
    eyes : "brown",
    age : 27
};

function mergeObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}

mergeObjects(obj1, obj2);