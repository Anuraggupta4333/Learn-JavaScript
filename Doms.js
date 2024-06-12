console.log("Hello world");

// Get element by ID
let header = document.getElementById("myId");
console.dir(header);

// Get elements by class name
let abc = document.getElementsByClassName("Myclass");
console.log(abc);

// Get elements by tag name
let xyz = document.getElementsByTagName("p");
console.log(xyz);

// Query Selector Example
let queryExample = document.querySelector("#myId");
console.log(queryExample);

// Query Selector All Example
let queryAllExample = document.querySelectorAll(".Myclass");
console.log(queryAllExample);

let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i/>Hello world</i>";

document.querySelector("body").prepend(newHeading);