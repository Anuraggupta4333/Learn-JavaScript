let num1 = 100;
let num2 = parseInt(prompt("Enter a number"));

while (num1 !== num2) {
    if (isNaN(num2)) {
        num2 = parseInt(prompt("Invalid input. Please enter a number:"));
    } else if (num2 > num1) {
        console.log("Nope! Your number is too large.");
        num2 = parseInt(prompt("Try again. Enter another number:"));
    } else if (num2 < num1) {
        console.log("Nope! Your number is too small.");
        num2 = parseInt(prompt("Try again. Enter another number:"));
    }
}

console.log("Congratulations! You guessed the correct number.");
