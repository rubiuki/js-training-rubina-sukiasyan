// ✅ Task 1: Implement customForEach
// Description:
// Create a function customForEach that takes an array and a callback function.
// It should loop over each element of the array and apply the callback to each element — just like the built-in forEach() method.
// Requirements:
// Use a regular for loop or a while loop (do not use .forEach()).
// The callback should receive 3 arguments: currentValue, index, and array.

function customForEach(array, callback) {
    // your code here
    if (!Array.isArray(array)){
        console.log("Please provide an array!");
        return;
    }
    for(let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}
customForEach([1,2,3], function(value, index, arr) {
    console.log(`Index ${index} → ${value * 2}`);
    console.log(arr);
});

// ✅ Task 2: Implement customMap
// Description:
// Write a function customMap that works like Array.prototype.map().
// It should return a new array with the results of applying a given function to every element in the input array.
// Requirements:
// Do not use .map().
// Use your own logic with a loop.
// Must return a new array (do not modify the original array).

function customMap(array, callback) {
    let newArray = [];
    if (!Array.isArray(array)){
        console.log("Please provide an array!");
        return;
    }
    for(let i = 0; i < array.length; i++) {
        newArray.push(callback(array[i], i, array));
    }
    return newArray;
}
console.log(customMap([1,2,3], function(value,index, arr) {
    console.log(value, index, arr);
    return value * 2;
}));


// ✅ Task 3: Implement customReverse
// Description:
// Create a function customReverse that reverses the elements of an array and returns the reversed array.
// Requirements:
// Do not use .reverse().
// You may use a loop or swap elements manually.
// Should not use built-in methods that directly reverse arrays.

function customReverse(array) {
    // your code here
    for(let i = 0; i < array.length / 2; i++) {
        let temp = array[i];
        array[i] = array[array.length - i - 1]
        array[array.length - i - 1] = temp;
    }
    return array;
}
console.log(customReverse([1,2,3,5,8]))

// ✅ Task 4: Implement Bubble Sort
// Description:
// Write a function that sorts an array of numbers using the bubble sort algorithm.
// Requirements:
// Do not use .sort().
// Implement the bubble sort algorithm using loops.
// Return the sorted array.

// with do while loop
function bubbleSort(array) {
    // your code here
    let swapped;
    do {
        swapped = false;
        for(let i = 0; i < array.length; i++) {
            if (array[i] > array[i + 1]) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                swapped = true;
            }
        }
    }
    while (swapped)
    return array;
}

console.log(bubbleSort([3, 1, 10, 2, 5]))

// solution with 2 for
function bubbleSorting(array) {
    let len = array.length;

    for (let i = 0; i < len - 1; i++) { //
        for (let j = 0; j < len - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

console.log(bubbleSorting([15, 14, 13, 12, 1 ]))

// ✅ Task 5: Implement customReduce
// Description:
// Create a function customReduce that takes an array, a callback function, and an optional initial value.
// It should apply the callback to accumulate a single result from the array elements — just like the built-in reduce() method.
//
// Requirements:
// - If an initialValue is provided, use it as the starting accumulator and begin iteration from index 0.
// - If no initialValue is provided, use the first element of the array as the accumulator and start from index 1.
// - The callback should receive 4 arguments: accumulator, currentValue, index, and array.
// - Return the final accumulated value.
// - Do not use the built-in .reduce() method.
// - If the array is empty and no initialValue is provided, return undefined.

function customReduce(array, callback, initialValue) {
    if (!Array.isArray(array)) {
        return "Please provide an array!";
    }

    if (array.length === 0 && initialValue === undefined) {
        return undefined;
    }

    let accumulator;
    let startIndex;

    if (initialValue !== undefined) {
        accumulator = initialValue;
        startIndex = 0;
    } else {
        accumulator = array[0];
        startIndex = 1;
    }

    for (let i = startIndex; i < array.length; i++) {
        accumulator = callback(accumulator, array[i], i, array);
    }

    return accumulator;
}

const result = customReduce([1, 2, 3], function add(acc, val, i, arr) {
    console.log(i,arr)
    return acc + val;
}, 0);

console.log(result);
