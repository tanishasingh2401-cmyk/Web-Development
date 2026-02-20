// 1️⃣ String Question
let msg = "help!";
console.log(msg.trim().toUpperCase());   // HELP!

// 2️⃣ String Methods
let name = "ApnaCollege";

console.log(name.slice(4, 9));          // Colle
console.log(name.indexOf("na"));        // 2
console.log(name.replace("Apna","Our"));// OurCollege

// Separate "College" & replace
let part = name.slice(4);
console.log(part);                      // College
console.log(part.replace("l","t"));     // Cotlege
console.log(part.replaceAll("l","t"));  // Cottege


// 3️⃣ Array Modification Question
let arr = ['january', 'july', 'march', 'august'];

arr.shift();                    // remove january
arr.splice(1, 0, 'june');       // add june at index 1
console.log(arr);               // ['july', 'june', 'march', 'august']


// 4️⃣ Nested Array (Tic-Tac-Toe)
let game = [
  ['X', null, 'O'],
  [null, 'X', null],
  ['O', null, 'X']
];

console.log(game);