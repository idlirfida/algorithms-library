
// If the question is given verbally, write it down
// Read the question out loud, make sure you understand what is being asked of you, clarify anything if need be
// Write out an intended input and output for the question, clarify to make sure that you're working with the proper information
// Highlight words in the question that are key points that you must deliver (function, object, array, variable, etc)
// Write out pseudocode as steps to execute in order to solve the problem
// Write your solution as code, if you can
// Test your solution by running through it line by line using your intended input and confirming that you get your intended output

// ================== getAverages =====================

// Question:
// Write a function that takes in an array of integers and returns an object with keys minimum, maximum, with correct values.

// ====================================================

let arr = [1, -2, 3, 4, 5, 64, 78, 3, 5, 9, 1, 0, 6, 7, 8, 9, 18, 351, 112, 74, -3];

//function that takes an array of ints as param
//     return an empty object with keys for: 
//         - minimum
//         - maximum
//         - average

function morningChallenge(array) {
    
    const sortedArray = array.sort((a, b) => a - b)
    let sum = 0;
    
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    
    const objectToReturn = {
        minimum: sortedArray[0],
        maximum: sortedArray[array.length-1],
        average: sum/array.length
    }
    
    return objectToReturn;
    
}

// console.log("Last Item:", arr[-1])

console.log(morningChallenge(arr));

// let first element of array be the min and l
