// function myFunction() {
//     console.log("My name is anurag");
//     console.log("I am Learn JS ");
// }

// function myFunction(msg) {
//     console.log(msg);
// }

// myFunction();
// myFunction("I love JS");

// function sumtwonum(n, m) {
//     var sum = n + m;
//     return sum;
//     // console.log(n+m);
// }

// sumtwonum(1, 3);
// console.log(sumtwonum(1, 3));


// // Simple function for sum
// function sum(a, b) {
//     return a + b;
// }

// // Arrow function for sum
// const sumArrow = (a, b) => {
    
//     return a + b;
// }

// // Simple function for multiplication
// function multiply(a, b) {
//     return a * b;
// }

// // Arrow function for multiplication
// const multiplyArrow = (a, b) => a * b;

// // Example usage:
// console.log(sum(5, 3));          // Output: 8
// console.log(sumArrow(5, 3));     // Output: 8
// console.log(multiply(5, 3));     // Output: 15
// console.log(multiplyArrow(5, 3));// Output: 15


console.log("-------------------------------------");
console.log("For each method");
let arr = [1, 2, 3, 4, 5, 6];
arr.forEach(function printval(val, index, arr) {
    console.log(val, index, arr);
});

console.log("Example 2");
let arr1 = ["Porsa", "Ambah", "Morena"];
arr1.forEach((val, index, arr1) => {
    console.log(val, index, arr1);
});

// Map- Method
let a = [1, 2, 3, 4, 5, 6, 7];
let b = a.map((val) => {
    return val;
});
console.log(b);

// Filter method
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0;
});
console.log("Even Numbers:", evenNumbers);

let greaterThanFive = numbers.filter(function(num) {
    return num > 5;
});
console.log("Numbers Greater Than 5:", greaterThanFive);

let names = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];
let longNames = names.filter(function(name) {
    return name.length > 5;
});
console.log("Long Names:", longNames);

//Reduce Method

let a1=[1,2,3,4]
let b1 =a1.reduce((prev, curr)=>{
    return prev+curr;
})
console.log(b1);


