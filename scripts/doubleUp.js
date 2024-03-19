// ================== doubleUp ======================

// Question: 
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once. 
// "Hello World" => "HHeelllloo  WWoorrlldd"
// "Hi This is Aboslutely Not Jeff Ma" => "HHii  TThhiiss iiss AAbboosslluutteellyy  NNoott  JJeeffff  MMaa"
// ==================================================
const test1 = "Hello World"
const test2 = "Hi This is Aboslutely Not Jeff Ma"
const expected1 = "HHeelllloo WWoorrlldd";
const expected2 = "HHii TThhiiss iiss AAbboosslluutteellyy NNoott JJeeffff MMaa";

// SOLUTION 1

function doubleUp(test1) {
    let outputString = "";
    for (let i = 0; i < test1.length; i++) {
        outputString += test1[i];
        if (test1[i] !== ' ') {
            outputString += test1[i];
        }
    }
    return outputString;
}

// SOLUTION 2

let input = "Hello world"
let array = input.split('');
console.log(array);
let newArray=[];

array.forEach((e) => {
newArray.push(e,e);
}
)
console.log(newArray.join(''));

function doubleUp1(input){
    let array = input.split('');
    let newArray=[];
    
    array.forEach((e) => {
        newArray.push(e,e);
    });
    
    return newArray.join('')
}

// console.log("Expect true111 :", (doubleUp1(test1) === expected1));
// console.log("Expected Answer from test1: ", "HHeelloo  WWoorrlldd")
// console.log("Expected Answer from test2: ", "HHii  TThhiiss  AAbboosslluutteellyy  NNoott  JJeeffff  MMaa")

// console.log('function output: ', doubleUp(test1));

console.log("Expect true :", (doubleUp(test1) === expected1));
console.log("Expect true :", (doubleUp(test2) === expected2));
// console.log(doubleUp(test2));
// console.log("Expect true :", (doubleUp1(test1) === expected1));