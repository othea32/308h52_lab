const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];

// Every
// using the expession method Determine if every number is greater than or equal to 0 .

console.log(nums.every((num) => num >= 0));

// Determine if every word shorter than 8 characters.

console.log(panagram.every((word) => word.length < 8));

// Filter
// Filter the array for numbers less than 4

console.log(nums.filter((num) => num < 4));

// Filter words that have an even length

console.log(panagram.filter((word) => word.length % 2 === 0));

// Find
// Find the first value divisible by 5

 console.log(nums.find((nums) => nums % 2 === 0));

// Find the first word that is longer than 5 characters
console.log(panagram.find(word => word.length > 5));

// Find Index
// Find the index of the first number that is divisible by 3

console.log(nums.findIndex(num => num % 3 === 0));

// Find the index of the first word that is less than 2 characters long

console.log(panagram.findIndex(word => word.length < 2));

// For Each
// Log each value of the array multiplied by 3.

nums.forEach(num => console.log(num * 3));

// Log each word with an exclamation point at the end of it.

panagram.forEach(word => console.log(word + '!'));

// Map
// Make a new array of each number multiplied by 100

console.log(nums.map(nums => nums * 100));

// Make a new array of all the words in all uppercase

console.log(panagram.map(word => word.toUpperCase()));

// Some
// Find out if some numbers are divisible by 7

console.log(nums.some(num => num % 7 === 0));

// Find out if some words have the letter a in them

console.log(panagram.some(word => word.includes('a')));












