// ================= Q1 =================
// Q1: Try out events: mouseout, keypress, scroll, load

// load event
window.addEventListener("load", function () {
  console.log("Page loaded successfully!");
});

// mouseout event
document.body.addEventListener("mouseout", function () {
  console.log("Mouse left the page!");
});

// keypress event
document.addEventListener("keypress", function (event) {
  console.log("Key pressed:", event.key);
});

// scroll event
window.addEventListener("scroll", function () {
  console.log("Scrolling...");
});

// ================= Q2 =================
// Q2: Create a button and change color on click

let btn = document.createElement("button");
btn.innerText = "Click Me";

// add button to div
document.getElementById("button-container").appendChild(btn);

// change color on click
btn.addEventListener("click", function () {
  btn.style.backgroundColor = "green";
  btn.style.color = "white";
});

// ================= Q3 =================
// Q3: Allow only letters and spaces, display in H2

let input = document.getElementById("nameInput");
let heading = document.getElementById("displayName");

input.addEventListener("input", function () {
  // filter unwanted characters
  let filteredValue = input.value.replace(/[^a-zA-Z ]/g, "");

  // update input field
  input.value = filteredValue;

  // display in heading
  heading.innerText = filteredValue;
});
