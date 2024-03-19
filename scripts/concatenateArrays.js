// ================== mergeArrays =====================

// Question:
// Given two arrays, write a function that will combine both arrays into one by alternatly taking elements from each. 

// [a, b, c, d, e], [1, 2, 3, 4, 5] becomes  [a, 1, b, 2, c, 3, d, 4, e, 5]
// [a, b, c, d, e], [1, 2, 3, 4, 5, 6, 7, 8] becomes [a, 1, b, 2, c, 3, d, 4, e, 5, 6, 7, 8]

// ===================================================


const array1 = ["a", "b", "c", "d", "e"]
const array2 = [1, 2, 3, 4, 5]
const array3 = [1, 2, 3, 4, 5, 6, 7, 8]

//  MY SOLUTION

function concatenateArrays(arr1, arr2) {

     let output = [];
     let iterator = arr1.length < arr2.length ? arr2.length : arr1.length;

    
    for (let i = 0; i<iterator;i++) {
        if (i < arr1.length && arr1[i] !== null) {
            output.push(arr1[i]);
        }
        
        if (i < arr2.length && arr2[i] !== null) {
            output.push(arr2[i]);
        }
    }
    return output;
}

console.log(concatenateArrays(array1, array3));


// GIVEN SOLUTIONS
// SOLUTION 1

// function mergeArrays(a, b) {
//     let arr = []
//     let longer = a.length > b.length ? a : b
//     let shorter = a.length > b.length ? b : a

//     for (let i = 0; i < longer.length; i++) {
//         if (i < shorter.length) {
//             arr.push(a[i], b[i])
//         } else {
//             arr.push(longer[i])
//         }
//     }

//     return arr
// }

// SOLUTION 2
//using while & shift

// function mergeArraysWS(a, b) {
//     const result = [];
//     while (a.length || b.length) {
//         if (a.length)
//             result.push(a.shift());
//         if (b.length)
//             result.push(b.shift());
//     }
//     return result;
// }