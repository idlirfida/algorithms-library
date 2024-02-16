/*
  Write a function that will count the number of vowels in any given string.
  
  input: string
  output: number of vowels in string
  
  input: hello
  output: 2
  
  input: supercalifragilisticexpialidocious
  output: 16
*/

function countVowels(input) {
    const inputString = input.toLowerCase();
    let count = 0;
    const vowelsArray = ['a', 'e', 'i', 'o', 'u'];
    
    for (let i = 0; i < inputString.length; i++) {
        if (vowelsArray.includes(inputString[i])) {
            count++;
        }
    }
    
    return count;
}

console.log(countVowels('supercalifragilisticexpialidocious'));