// ================== findSmallestInteger =====================

// Question:
// Given an array of integers, find the smallest integer.

// ============================================================

/**
If the question is given verbally, write it down
Read the question out loud, make sure you understand what is being asked of you, clarify anything if need be
Write out an intended input and output for the question, clarify to make sure that you're working with the proper information
Highlight words in the question that are key points that you must deliver (function, object, array, variable, etc)
Write out pseudocode as steps to execute in order to solve the problem
Write your solution as code, if you can
Test your solution by running through it line by line using your intended input and confirming that you get your intended output
*/

const testArray1 = [78, 33, 81, 3215, 12, 1938, 11, 57, -13] //expected: 11
const testArray2 = [78, -11, -232, 12, 8, 6, 12, 1, 8] //expected: 1



function testSmallestInteger(arr) {
    
    let smallestInt = arr[0];
    
    arr.forEach((integer) => {
       
//         if(integer < smallestInt) {
//             smallestInt = integer;
//         }
//      (integer < smallestInt) ? smallestInt = integer : smallestInt = smallestInt;
      smallestInt = (integer < smallestInt ? integer : smallestInt);
    });
    

    return smallestInt;
}


let res = testSmallestInteger(testArray2);
console.log("The smallest integer is : ", res);






















