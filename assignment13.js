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
// i can write a similar function to check it but this time i  write this code bu using chat-gpt


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

// . Write a function to check if a string is a palindrome.
function isPalindrome(str) {
    // Check if the input is a string
    if (typeof str !== 'string' || str.length === 0) {
        return false;
    }
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();

    // Compare the cleaned string with its reverse
    return cleanStr === cleanStr.split('').reverse().join('');
}
// also i write this code bu using chat-gpt

// . Write a function to find the maximum number in an array.
function findMax(arr) {
    if (arr.length === 0) {
        return null; 
    }
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// . Write a JavaScript while loop that calculates the factorial of a 
// number.
function factorialize(num) {
    let result = 1;
    while (num > 1) {
        result *= num;
        num--;
    }
    return result;
}



















