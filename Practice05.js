// function countVowels(str) {
//      Convert the input string to lowercase to make the comparison case-insensitive
//     str = str.toLowerCase();
    
//      Define a variable to store the count of vowels
//     let count = 0;
    
//      Loop through each character in the string
//     for (let i = 0; i < str.length; i++) {
//          Check if the character is a vowel
//         if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
//              Increment the count if the character is a vowel
//             count++;
//         }
//     }
    
//      Return the count of vowels
//     return count;
// }

//Arrow function
const countVowels = (str) => {
    // Convert the input string to lowercase to make the comparison case-insensitive
    str = str.toLowerCase();
    
    // Define a variable to store the count of vowels
    let count = 0;
    
    // Loop through each character in the string
    for (let i = 0; i < str.length; i++) {
        // Check if the character is a vowel
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
            // Increment the count if the character is a vowel
            count++;
        }
    }
    
    // Return the count of vowels
    return count;
};


// Example usage:
console.log(countVowels("Hello World"));  // Output: 3
console.log(countVowels("JavaScript"));   // Output: 3
console.log(countVowels("Anurag Gupta"));   // Output: 3

// Arrow Example usage:
console.log(countVowels("Hello World"));  // Output: 3
console.log(countVowels("JavaScript"));   // Output: 3
console.log(countVowels("Anurag gupta"));   // Output: 3

// Prompt the user to enter a number
const n = parseInt(prompt("Enter a number:"));

if (isNaN(n) || n < 1) {
  console.log("Invalid input. Please enter a positive integer.");
} else {
  // Create an array of numbers from 1 to n
  const numbers = Array.from({ length: n }, (_, index) => index + 1);

  // Calculate sum of all numbers in the array
  const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  // Calculate product of all numbers in the array
  const product = numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);

  console.log("Array of numbers:", numbers);
  console.log("Sum of all numbers:", sum);
  console.log("Product of all numbers:", product);
}
