prompt = require("prompt-sync")();


const square = {
    area(length)
    {
        return length * length;
    },
    perimeter(length)
    {
        return length * 4;
    }
}

let num = prompt("Enter number : ");

let decision = prompt("Area OR Perimeter? : ");

if(decision === 'area')
{
    console.log("Area : ", square.perimeter(num));
}
else if(decision === 'perimeter')
{
    console.log("Perimeter : ", square.perimeter(num));
}
else{
    decision = prompt("Wrong input");
}