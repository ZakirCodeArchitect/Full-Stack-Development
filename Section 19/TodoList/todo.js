//prompt = require("prompt-sync")();

let enter = prompt("Enter -> || List | new | list | quit || <-");

const todos = [
    'Submit the Fees',
    'Collect the Recommendation Letter'
];

while(enter !== 'quit' && enter !== 'q')
{
    if(enter === 'list')
    {
        console.log("Todo's of Today : ")
        //console.log("*****************");
        for(let i=0;i<todos.length;i++)
        {
            console.log(`${i+1}: ${todos[i]}`);
        }
        
    }
    else if(enter === 'new')
    {
        const Newtodo = prompt("Enter New todos : ");
        todos.push(Newtodo);
        console.log(`${Newtodo} added to the list`);
    }
    else if(enter === 'delete')
    {
        // splice(2,1) --> splice(index number of array , how many elements)

        const index = prompt("Enter the index of the element to delete : ");
        if(!Number.isNaN(index))
        {
            const del = parseInt(index); // -> so that to convert any data type to integer.
            todos.splice(del,1);
            console.log("Element deleted successfully !! ");
        }
        else
        {
            console.log("Index is not available");
        }
        
    }
    enter = prompt("Enter -> || List | new | list | quit || <-");
}

console.log("OK! You Quit");