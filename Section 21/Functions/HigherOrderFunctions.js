// function DiceRoll()
// {
//     const dice = Math.floor(Math.random()*5)+1;
//     console.log("Dice roll : ",dice);
// }

//callTwice(DiceRoll);

// callTenTime(DiceRoll);
// function callTwice(twice)   // With this above function is called twice
// {
//     twice();
//     twice();
// }

// function callTenTime(ten)
// {
//     for(let i=0;i<10;i++)
//     {
//         ten();  // it's number will tell how many times the function call will be invoked.
//     }
// }


function mystery()
{
    const rand = Math.random();
    if(rand > 0.5)
    {
        console.log("Congratulations !!! , You are Recommended.");
    }
    else{
        console.log("You are sick");
        console.log("Stop trying to close this window");
    }
}

mystery();