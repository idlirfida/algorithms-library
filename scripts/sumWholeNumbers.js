//If the question is given verbally, write it down
// Read the question out loud, make sure you understand what is being asked of you, clarify anything if need be
// Write out an intended input and output for the question, clarify to make sure that you're working with the proper information
// Highlight words in the question that are key points that you must deliver (function, object, array, variable, etc)
// Write out pseudocode as steps to execute in order to solve the problem
// Write your solution as code, if you can
// Test your solution by running through it line by line using your intended input and confirming that you get your intended output

// ================== sumTo100 =====================

// Question: 
// What is the sum of all the whole numbers from 1 to 100 (inclusive)?

// =================================================

// there is a formula to find the sum of whole numbers n (n+1)/2

const sumWholeNumbers = () => {

    let sum = 0;
    
    for (let i =0; i <= 100; i++) {
        
        sum = sum + i;
        
    }
        return sum
    }
    console.log('The sum, arrived at with for loop: ', sumWholeNumbers())
    
    //--------------------------------------------------------------------
    
    // How to write recursion 
    // 
    //let count = 1
    
    function sumRecursion(num){
        if(num === 1){
            return 1
        }
        else{
            return num + sumRecursion(num - 1);
        }
        
    }
    console.log('The sum, arrived at through recursion: ', sumRecursion(100))
    
    //--------------------------------------------------------------------
    
    let numbersArray = Array.from({ length: 100 }, (_, index) => index + 1);
    let sum = numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    
    console.log("Sum of numbers from 1 to 100:", sum);     