prompt = require("prompt-sync")();

let n = prompt("Enter the number of students : ");

// Now creating a dynamic array
let data = [];

for(let i=0;i<n;i++)
{
    let name = prompt("Enter the name of the student : ",i+1);
    let semester =  prompt("Enter the semster : ",i+1);
    let gpa =  prompt("Enter the gpa : ");

    data.push({name:name , semester: semester, gpa: gpa});
}

let enter = prompt("Enter the name of the student : ");

let found = false;
//checking for the strinf entered by the user
for(let i=0;i<n;i++)
{
    if(data[i].name == enter)
    {
        console.log("Student Details : ");
        console.log("Name : ",data[i].name);
        console.log("Semster : ", data[i].semester);
        console.log("Gpa : ", data[i].gpa);
        found = true;
        break;
    }
}

if(!found)
{
    console.log("Student not found");
    found = false;
}