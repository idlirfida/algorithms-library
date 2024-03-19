// ================== removeFirstAndLast =====================

// Question: 
// Create a function that removes the first and last characters of a word.

// ==========================================================

// An additional upgrade to this existing problem - what we have multiple words, separated by " ", can you perform removeFirstAndLast once to all of them 
// (optional with **no** bonus mark)

inputString1 = "supercalifragilisticexpialidocious";  
inputString2 = "deoxyribonucleic acid";
inputString3 = "supercalifragilisticexpialidocious bb123o456b thisidisaname";


function removeFirstAndLast(word) {
    return word.substring (1, word.length -1 );
} 

console.log(removeFirstAndLast(inputString3));


function mySolution(words) {
    return words.split(" ").map(removeFirstAndLast).join(" ");
}
console.log(mySolution(inputStringArray))