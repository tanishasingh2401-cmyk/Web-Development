// Q1️⃣ Get first n elements of an array
let arr1 = [7, 9, 0, -2];
let n1 = 3;
console.log(arr1.slice(0, n1));  
// Output: [7, 9, 0]


// Q2️⃣ Get last n elements of an array
let arr2 = [7, 9, 0, -2];
let n2 = 3;
console.log(arr2.slice(arr2.length - n2));  
// Output: [9, 0, -2]


// Q3️⃣ Check whether a string is blank or not
let str = "   ";
if (str.trim().length === 0) {
    console.log("String is blank");
} else {
    console.log("String is not blank");
}


// Q4️⃣ Check whether character at given index is lowercase
let text = "ApnaCollege";
let index = 1;   // example index

if (text[index] === text[index].toLowerCase()) {
    console.log("Character is lowercase");
} else {
    console.log("Character is not lowercase");
}


// Q5️⃣ Strip leading and trailing spaces
let spacedStr = "   Hello World   ";
console.log(spacedStr.trim());  
// Output: "Hello World"


// Q6️⃣ Check if element exists in array
let arr3 = [10, 20, 30, 40];
let element = 20;

if (arr3.includes(element)) {
    console.log("Element exists");
} else {
    console.log("Element does not exist");
}