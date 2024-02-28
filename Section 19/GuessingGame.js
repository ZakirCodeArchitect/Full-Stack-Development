prompt = require("prompt-sync")();

let max = parseInt(prompt("Enter the maximum number : "));

while(!max)
{
    max = parseInt(prompt("Enter the maximum number : "));
}

const TargetNum = Math.floor(Math.random()* max)+1;
console.log(TargetNum);

let guess = parseInt(prompt("Guess the number : "));
let attempts = 1;

while(parseInt(guess) !== TargetNum)
{
    if(guess === 'q') break;

    guess = parseInt(guess);
    if(guess > TargetNum)
    {
        guess = parseInt(prompt("Your guess is too high !!! , Guess again : " ));
        attempts++;
    }
    else if(guess < TargetNum)
    {
        guess = parseInt(prompt("Your guess is too low !!! , Guess again : " ));    
        attempts++;
    }
    else
    {
        guess = parseInt(prompt("Enter a valid guess !!! , Guess again : " ));  
    }
    

}
if(guess === 'q')
{
    console.log("OK!! Quiting ");
}
else
{
    console.log("Congratulations !!! ");
    console.log(`It took you ${attempts} guesses`);
}
