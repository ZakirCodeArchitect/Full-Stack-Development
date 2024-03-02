// DEFINE YOUR FUNCTION BELOW:

//let arr = [3,5,7];
function lastElement(arr)
{
    for(let i=0;i<=arr.length;i++)
    {
        if(i === arr.length-1)
        {
            return arr[i];
        }
        else if( arr.length === 0)
        {
            return null;
        }
        
    }
    
}

console.log("Last Element : ",lastElement([3,5,7]));