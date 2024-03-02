// const prompt = require("prompt-sync")();

// let n = prompt("Enter your first name : ");
// let n2 = prompt("Enter your last name : ");

// arguments(n,n2);

// function arguments(firstName,lastName) // every method is a function. // -? what is camle casing??
// {
//     console.log(`Hi my name is ${firstName} ${lastName[0]}`);
// }

// define isSnakeEyes below:

// function isSnakeEyes(num1, num2) {
//     if (num1 === 1 && num2 === 1) {
//         console.log("Snake Eyes!");
//     } else {
//         console.log("Not Snake Eyes!");
//     }
// }

// // Test cases
// isSnakeEyes(1, 1); // Snake Eyes!
// isSnakeEyes(1, 5); // Not Snake Eyes!
// isSnakeEyes(4, 5); // Not Snake Eyes!


// using return keyword:   --> return keyword can return only one thing, but could be anything.

function add(num1, num2)
{
    return num1 + num2; // return keyword stops the execution if the function , when reached
}

let sum = add(5,6);

console.log("Sum = ",sum);