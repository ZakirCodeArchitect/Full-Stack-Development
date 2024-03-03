const data = {
    name: 'zakir',
    gpa: 3.5,

    display()
    {
        console.log(`${this.name} got 4gpa`);   // to access name object in the object
        console.log(`${this.gpa} `);
    }
}
const hidden = data.display;

data.display();