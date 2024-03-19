// ================== alternatingCase ======================

// Question: 
// Create a function that takes a string as a parameter and alternates the casing of each individual letter within the string. 
// Eg. Hello World! => hELLO wORLD!

// ==========================================================

const arrayTest1 = "hELLO wORLD";
const arrayTest2 = "gooD ThuRSDay MoRnIng";

const alternate = (str) => {
    const letters= str.split('').map((letter) => {
        if (letter === letter.toUpperCase()) {
            return letter.toLowerCase();
        } else {
            return letter.toUpperCase();
        }
    })

    return letters.join('');  
}

console.log('Method 1 solution 1: ', alternate(arrayTest1));
console.log('Method 1 solution 2: ', alternate(arrayTest2));

const alternateLetterCasing  = (str) => {
        const letters = str.split('')
                    .map(letter =>letter === letter.toUpperCase() ? letter.toLowerCase():letter.toUpperCase())
                    .join('');
        return letters;
}

console.log('Method 2 solution 1: ', alternateLetterCasing(arrayTest1));
console.log('Method 2 solution 2: ', alternateLetterCasing(arrayTest2));