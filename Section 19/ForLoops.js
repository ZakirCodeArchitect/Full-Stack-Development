const prompt = require('prompt-sync')(); // Importing prompt-sync module

const data = [
    {name:'zakir', gpa:3.5},
    {name:'ayesha', gpa:3.5}
];

let enter = prompt("Enter the name of the student: ");

let found = false; // Flag to check if the student is found

for(let i = 0; i < data.length; i++) {
    if(data[i].name === enter) {
        console.log("Student Details:");
        console.log("Name:", data[i].name);
        console.log("GPA:", data[i].gpa);
        found = true;
        break; // Exit loop once the student is found
    }
}

if(!found) {
    console.log("Student not found.");
}
