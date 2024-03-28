// ================== invertString ======================

// Question:
// You are given a string of words, for each word within the string you need to turn the word 'inside out'.
// The internal letters will move out, and the external letters will move toward the centre.
// If the word is even in length, all letters will move.
// If the word in length is odd, you are expected to leave the 'middle' letter of the word where it is. 

// ======================================================

// ChatGPT solution, if anyone needs it:

function insideOutWords(str) {
    // Helper function to reverse a string
    function reverseString(s) {
      return s.split('').reverse().join('');
    }
  
    // Helper function to process each word
    function processWord(word) {
      if (word.length <= 1) {
        return word;
      }
  
      const midIndex = Math.floor(word.length / 2);
      let leftPart, rightPart, middle;
  
      if (word.length % 2 === 0) {
        leftPart = word.substring(0, midIndex);
        rightPart = word.substring(midIndex);
        return reverseString(rightPart) + reverseString(leftPart);
      } else {
        leftPart = word.substring(0, midIndex);
        rightPart = word.substring(midIndex + 1);
        middle = word[midIndex];
        return reverseString(rightPart) + middle + reverseString(leftPart);
      }
    }
  
    // Split the string into words, process each word, and join them back
    const words = str.split(' ');
    const result = words.map(processWord).join(' ');
  
    return result;
  }
  
  // Test the function
  const inputString = "Hello world this is a test";
  const outputString = insideOutWords(inputString);
  console.log(outputString);
  
  
    