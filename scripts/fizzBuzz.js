/*
  Spicy Peas, also known as FizzBuzz
  
  create a function that does the following: 
  input of number to go up to: 100 input is a single number
  
  print the output, e.g. console.log
  output: 1, 2, Spicy, 4, Peas, Spicy, 7, 8, Spicy, Peas, 11, Spicy, 13, 14, SpicyPeas, 16, 17, Spicy, 19, Peas ... for the rest up to n e.g. 100
  
  
  for every number divisible by 3, print 'spicy'
  for every number divisible by 5, print 'Peas'
  for every number divisble by 3 and 5, print 'spicyPeas'
  for every other number, print it directly
*/

function fizzBuzz ( inputNumber ){
    
    for( let number = 1; number <= inputNumber; number++){
     if( number%3 === 0 && number%5 === 0){
        console.log("Spicy Peas")
     }
    else if (number%3 === 0){
        console.log("Spicy");
    }
    else if (number%5 === 0){
        console.log("Peas");
    }
    else{
        console.log(number);
    }
}
      
}

fizzBuzz(100);