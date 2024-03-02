// To sync the prompt module : 
const prompt = require("prompt-sync")();

// Generate a random number for die1
let die1 = Math.floor(Math.random() * 6) + 1; // -> Random number from 1 to 6 ( range )
console.log("Random number (die1):", die1);

// Ask the user to input a number
let userInput = prompt("Enter any number: ");
// Convert the user input string to a number
let number = parseFloat(userInput);

// Calculate the sum of die1 and the user input number
let sum = die1 + number;

// Displaying the sum in the desired format
console.log(die1 + " + " + number + " = " + sum);
