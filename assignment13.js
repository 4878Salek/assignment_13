//  . Write a program to print the numbers from 1 to 10 using a for 
// loop in JavaScript.

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// write a function to check if a number is even or odd in 
// JavaScript.

function isEven(number) {
    // Check if the input is a number
    if (typeof number !== 'number') {
        throw new Error('Input must be a number');
    }
    // Return true if the remainder when divided by 2 is 0
    return number % 2 === 0;
}
// Helper function to check if a number is odd
function isOdd(number) {
    return !isEven(number);
}
// i can write a similar function to check it but this time i give help from CHATgPT


// . Write a function to count the number of vowels in a string.
function countVowels(str) {
    const lowerCaseStr = str.toLowerCase();
    // because we set the vowels as a lowerCase in vowels variable
    const vowels = 'aeiou';
    let count = 0;
    for (let char of lowerCaseStr) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}










