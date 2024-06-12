//Questiopn 01
// let num= prompt("enter a number :");
// if( num%5 ==0){
//     console.log(num ,"It is a multiple of 5");
// }
// else{
//     console.log(num, "Not a multiple of 5");
// }

//Question 02
// Prompting the user to input their marks
let marks = parseFloat(prompt("Enter your marks:"));

// Checking if the input is valid
if (!isNaN(marks)) {
    // Checking if the input marks are within the valid range
    if (marks > 100) {
        console.log("Invalid input. Marks cannot be greater than 100.");
    } else {
        // Calculating and displaying the grade
        if (marks >= 90) {
            console.log("Your grade is: A");
        } else if (marks >= 80) {
            console.log("Your grade is: B");
        } else if (marks >= 70) {
            console.log("Your grade is: C");
        } else if (marks >= 60) {
            console.log("Your grade is: D");
        } else {
            console.log("Your grade is: F");
        }
    }
} else {
    console.log("Invalid input. Please enter a valid number.");
}
