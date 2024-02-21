// ================== countArray =====================

// Question:
// Given an array of integers, return an array where the first element is the count of positives numbers and the second element is sum of negative numbers.

// ===================================================

/**
    Steps in solving whiteboard challenges
    If the question is given verbally, write it down
    Read the question out loud, make sure you understand what is being asked of you, clarify anything if need be
    Write out an intended input and output for the question, clarify to make sure that you're working with the proper information
    Highlight words in the question that are key points that you must deliver (function, object, array, variable, etc)
    Write out pseudocode as steps to execute in order to solve the problem
    Write your solution as code, if you can
    Test your solution by running through it line by line using your intended input and confirming that you get your intended output
*/
//input: arrays of integers
// output: array two numbers one the count and the other sum

// positive numbers: x > 0 (expected count: 10)
// negative numbers: x < 0 (expected sum: -65)
// Math.sign() - returns 1 if number is positive, returns -1 if number is negative

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]



// develop function
function checkSign(array) {
    
    let positivesCount = 0;
    let negativesSum = 0;
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            positivesCount += 1;
        }
        if (array[i] < 0) {
//             console.log(array[i])
            negativesSum += array[i];
        }
    }
    return [positivesCount, negativesSum];
}

console.log(checkSign(array));