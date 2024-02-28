const data = {
    name: 'zakir',
    city: 'rawalpindi',
    country: 'pakistan'
};

// Iterating over object literals
for(let details in data)
{
    console.log(`${details} = ${data[details]}`);
    //console.log(Object.keys(data));
    //console.log(Object.entries(data));
}
