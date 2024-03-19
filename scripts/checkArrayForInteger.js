// ================== isNumber =====================

// Question: 
// Write a function that checks if all items in an array are numbers. Return a boolean. 

// =================================================


// input: arrays.
// output: boolean;

const testArray1 = [1, 4,8,5,2,6,7,0,1,4,3, "J", "e", "f", "f"]
const testArray2 = ["3", "4", "a", "x", "f", "0", 2, "hello", 15, 8, 3.41]
const testArray3 = [1,2,3,4,5,6,7] 
const testArray4 = [1, "2", 3,4,5,6,7]
const testArray5 = [];


function checkArray(testArray){
    if(testArray.length <= 0){
        return "Input array is empty";
    }else {
        for (let item of testArray){
            if(typeof item !== "number"){
                return false;
            }
        }
        return true;
    }
}

console.log("test result", checkArray(testArray1));
console.log("test result", checkArray(testArray2));
console.log("test result", checkArray(testArray3));
console.log("test result", checkArray(testArray4));
console.log("test result", checkArray(testArray5));