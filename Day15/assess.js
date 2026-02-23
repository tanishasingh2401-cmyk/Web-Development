//JAVASCRIPT N0-04
// Q1: Delete all occurrences of num in array
// Q2: Find number of digits in a number

// ----- Q1 -----
let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;

arr = arr.filter(element => element !== num);

console.log("Array after deleting:", arr);

// ----- Q2 -----
let number = 287152;
let count = number.toString().length;

console.log("Number of digits:", count);