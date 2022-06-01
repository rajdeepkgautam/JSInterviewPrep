//Explain call(), apply() and, bind() methods.
//These are different ways of invoking and calling function.
//1) Call invokes the function and allows us to pass in arguments one by one.
//2) Apply invokes the AND ARGUMENT passed in array form.
//3) Bind returns a new function, allowing you to pass in a this array and any number of arguments.

let emp1 ={
    Name: "RAJU",
    Desg: "Manager",
    ID : 1001,
    displayInfo : function() {
        console.log(this.Name, this.Desg, this.ID);
    }
}
emp1.displayInfo();

let emp2 ={
    Name: "SHYAM",
    Desg: "VP",
    ID : 1002,
}

let emp3 ={
    Name: "BABURAO",
    Desg: "CEO",
    ID : 1003,
}

console.log(emp1, emp2, emp3);

let arr =[1,2,3,4,5,6];

//======================================================

//Call, Apply, Bind - Process of borrowing function.



emp1.displayInfo.call(emp2);
emp1.displayInfo.call(emp3);

emp1.displayInfo.apply(emp2);
emp1.displayInfo.apply(emp3);

let res1 = emp1.displayInfo.bind(emp2);
let res2 = emp1.displayInfo.bind(emp3);

res1();
res2();


//Explain prototypes
//Protoype is an object that is associated with every function and onbejct by default in JS.
//A object/func prototype is always same as their parent fun/object from which it inherited.
//By default every and at the end every object and func prototype will  be object only and on the end it will be null.

//What is an event loop and call stack?

//call stack is a data structure that keeps track information of the functions being called and executed. Thus, if the user invokes a function for execution, the specified function gets the specified function gets pushed/added in the call stack, and when the user returns from a function, it means the function is popped out from the call stack. Thus, call stack is a normal stack data structure that follows the stack order principal, i.e., LIFO
//Event loop :An event loop is something that pulls stuff out of the queue and places it onto the function execution stack whenever the function stack becomes empty.

//What is prototype chain?
//Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype.

const studentPrototype = {
    calcAge(){
        console.log(2022-this.birthYear);
    },
    initialize(fname,lname,birthYear){
        this.fname=fname;
        this.lname=lname;
        this.birthYear=birthYear;
    }
}
let person = Object.create(studentPrototype);

console.log(person.__proto__);
console.log(person.__proto__.__proto__);
console.log(person.__proto__.__proto__.__proto__);

//What is the use of setTimeout?
//setTimeout is a web api . it will excecute after specified time in milliseconds.
setTimeout(() => {
    console.log("Hi");
}, 3000);
//it will print Hi after 3 sec.

//What is callback hell?
//callback hell is not like a normal functions it will not give output at a time it will give output after specified time.
//it creates a arrow shaped.

function print(){
    setTimeout(() => {
        console.log("1");
        setTimeout(() => {
            console.log("2");
            setTimeout(() => {
                console.log("3");
                setTimeout(() => {
                    console.log("4");
                    setTimeout(() => {
                        console.log("5");
                    }, 4000);
                }, 3000);  
            }, 2000);   
        }, 0000);
    }, 1000);
}
print();

//What is creation phase and execution phase?
//execution context : execution context has two phases 1. creation phase 2. execution phase
//creation phase : In this phase intrepreter creates the memory for the variables and creates a function expression.
//Execution phase : In this phase interpreter will executes the code that currently running. it allocates the actual values to the variables by removing undefined.

//What are objects in javascript?
//objects :  Every function, array and even object are an object in JavaScript. object has properties with key-value pair. this keyword is a property in object which refers to that object or its element.
let Student = {
    Name : "RAJDEEP KUMAR GAUTAM",
    RollNo : 1803240112,
    College : "ABES ENGINEERING COLLEGE",
    Branch : "M.E.",
    displayInfo : function() {
            console.log(`The Name of The Student is ${this.Name} and the Roll Number is ${this.RollNo} of ${this.College} and his branch is ${this.Branch}`)
    }
 }
 Student.displayInfo();


 //What are callbacks?
//callbacks : function which pass as an argument to the another function is called callback function.

function sayHi(friend){
    console.log("Hi",friend);
}

function friend(name,callbackfn){
    callbackfn(name);
}
friend("Hello",sayHi);
//It prints Hi Hello

//Give an example of inheritance using function constructor?

function Employee(name,domain,company){
    this.name=name;
    this.domain=domain;
    this.company=company;
}
function Developer(name,domain,company,specialization) {
  
    Employee.call(this,name,domain,company);

    this.specialization = specialization;
}

let em1 = new Employee("Raju","B.Tech","Infosys");
let em2 = new Developer("Shyam","B.Tech","Cognizant","Web-D");

em1.prototype.company="Accenture";
console.log(em1);
console.log(em2);

//What are function constructors?
//The Function constructor creates a new Function object. Calling the constructor directly can create functions dynamically
