// ================== binarySearch ======================

// Question:
// Given an array of integers that are sorted in ascending order and a target integer, write a function to search for the target within the array. 
// If the target exists, then return its index, otherwise return -1.
// Do not use any array methods to accomplish this. 

// Hint. Look into binary search. 1s and 0s that is.
const testArray = [1, 5, 6, 7, 10, 15, 17, 18, 21, 25, 30, 32, 34, 35, 38, 40, 55, 85, 99, 101, 137, 185, 203, 224]

// ======================================================

// Solution:
function binarySearch(list, item) {
    let low = 0;
    let high = list.length - 1;
  
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let guess = list[mid];

        if (guess === item) {
            return mid;
        }
        if (guess > item) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
  
    return -1;
}