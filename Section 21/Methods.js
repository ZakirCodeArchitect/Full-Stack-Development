// every method is a function , but not every function is a method.

prompt = require("prompt-sync")();

// Math object or its an array
const myMath = {
    PI: 3.14,
    // square: function(num){
    //     return num*num;
    // },
    square(num){
        return num*num;
    },

    cube: function(num){
        return num ** 3;
    }
}

let num = prompt("Enter number : ");

let decision = prompt("Square OR Cube? : ");

if(decision === 'square')
{
    console.log("Square : ", myMath.square(num));
}
else if(decision === 'cube')
{
    console.log("Cube : ", myMath.cube(num));
}
else{
    decision = prompt("Wrong input");
}

// techinally arrays are objects in javascript
// string too , but wrapped in object.
