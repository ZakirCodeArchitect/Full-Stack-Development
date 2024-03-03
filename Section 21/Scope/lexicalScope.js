function name()
{
    const names = ['Zakir' , 'QuaidEAzam'];

    function safety()   // nested function
    {
        for(let heroes of names)
        {
            console.log(`Our Heroe : ${heroes}`);
        }
        
    }
    safety();
}

name();