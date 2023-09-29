// 2 (a) Arrow function returning "Data Representation & Querying" 
// Assigned a variable myVariable and passed it into the console
const PartA = ()=>{
    return "Data Representation & Querying";
}

PartA();
console.log(PartA());

//2 (b)function now takes an argument called myValue and returns a variable and outputs function to console.
const PartB = (myValue)=>{
    return myValue;
}

PartB();
console.log(PartB("Something"));

//2 (c) Arrow function that takes sum of two numbers and outputs to the console.

const PartC = (Num1, Num2)=>{
    Argument = Num1 + Num2;
    console.log(Argument);
}

PartC(1,2);

//2 (d) Function that multiplies each number under 70 by two using a map function that takes an array of numbers as values within the function.
const myarray = [25, 31, 42, 77];

const test = myarray.map((element)=>{
    if(element < 70) {
        return element * 2;
    } else {
    return element;
    }
})

console.log(test);

//3(b) Created an addTask function that recieves a string called Task.
//Adds the task to the array and prints the message in the console and returns the number of elements in the array.
let myTasks = [];

let addTask = (task)=>{
    let length = myTasks.push(task);
    console.log("Task: "+task+" was added to Tasks!");
    task++;
    console.log("Elements in the array: "+myTasks.length);
}

//Created a listAllTasks function that itrerates over all the tasks in the array printing each array to the console.
let listAllTasks = ()=>{
    myTasks.forEach((item)=>{
        console.log(item);
    })
}

// deleteTask function recieves task as a paramater, removes the string from he array and lets the user know that it has been deleted and shows how many elements are left after deletion
let deleteTask = (task)=>{
    let index = myTasks.indexOf(task);
    if(index > -1) {
    myTasks.splice(index,1);
    console.log("Task: "+task+" has been removed from the array.");
    }
    else {
        console.log("Task: "+task+" not found in Tasks!");
    }
    console.log("Elements left in the array: "+myTasks.length);
}

//Calling the functions
addTask("Learn JS!")
addTask("Learn React!");

listAllTasks();

deleteTask("Learn JS!");


