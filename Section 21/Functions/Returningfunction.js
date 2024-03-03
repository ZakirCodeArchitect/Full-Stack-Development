
function range(min,max)
{
    return function(num)
    {
        return num>=min && num<=max;
    }
}

const child = range(0,18);
const adult = range(19,60);
const old = range(61,80);

console.log(adult(36));
