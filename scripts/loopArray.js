// ================== loopArray ======================

// Question:
// Write a function loopArray that loops array in a specified direction by some number of steps.

// By "looping array" it means removing elements from start and adding them to end of array one-by-one (if direction is "left") or removing from end and adding them to start one by-one (if direction is "right").

// Function should accept three arguments:

// array - non-empty array of elements of any type
// direction - 'left' or 'right' - tells how to loop array;
// steps - number of steps to loop array (less or equal to array size);

// Examples:

// loopArray([1, 5, 87, 45, 8, 8], 'left', 2);
// should produce result: [87, 45, 8, 8, 1, 5]

// loopArray([1, 5, 87, 45, 8, 8], 'right', 2);
// should produce result: [8, 8, 1, 5, 87, 45]

// ==================================================


function loopArray (arr, direction, steps) {
    
    // if direction is left?
        if (direction === "left") {
            for (let i = 0; i < steps; i++) {
          
    //            for every step, remove the 1st elem and then add it to the end 
                arr.push(arr.shift())
                //shift() method removes first element of the array
                // push() to add new item to end of array
    //             https://www.w3schools.com/jsref/jsref_push.asp
    //             https://www.w3schools.com/jsref/jsref_shift.asp
            }
            
        } 
        
    // if direction is right, then
    
        else if (direction === "right") {
            for (let i = 0; i < steps; i++) {
    //             for every step, remove the last elem and then add to the beginning of the arr
                arr.unshift(arr.pop())
    //             pop() to remove the last elem of the arr
    //             unshift() to add new elem to the beginning of the arr
                
            }
            
        } 
        
        else {
            return "Invalid direction!"
        }
        
        return arr
    }
    
    // const arr1 = [1, 5, 87, 45, 8, 8];
    
    // const loopedArray = loopArray(arr1, 'right', 2);
    
    // console.log(loopedArray)
    console.log(loopArray([1, 5, 87, 45, 8, 8], 'left', 2))
    console.log(loopArray([1, 5, 87, 45, 8, 8], 'right', 2))
    console.log(loopArray([1, 5, 87, 45, 8, 8], '', 2))
    // yay!
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    /// grand revealing
    // solution
    /*
    // Solution: 
    function loopArray(arr, direction, steps) {
        if (direction === 'left') {
            for (let i = 0; i < steps; i++) {
                arr.push(arr.shift())
            }
        } else {
            for (let i = 0; i < steps; i++) {
                arr.unshift(arr.pop())
            }
        }
        return arr;
    }
    
    console.log(loopArray([1, 5, 87, 45, 8, 8], 'left', 2))
    console.log(loopArray([1, 5, 87, 45, 8, 8], 'right', 2))
    */
    