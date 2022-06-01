// Difference between == and ===

// == : checks only the both the values are same or not.
//=== : checks both datatypes and as well as values are same or not.

//2. What is the spread operator?
//A.  Spread operator will define as ... it allows iterable expand in place where 0+ arguments are expected. it will use for arrays where more than one element are present.

let fruits = ["apple","mango","banana"];
console.log(...fruits);

//3. What are the differences between var, let and const?
// var: var has a global scope. var can be intilized in one line and can be assigned in another line. var can be redeclered and reintilized.
// Let: let has a local scope. let can be intilized in one line and can be assigned in another line. let cannot be reclered but can be re intilized.
// const: const has a local scope. const cannot be relintilized and cannot be redeclered.

//4. What is execution context?
//execution context : execution context has two phases 1. creation phase 2. execution phase
//creation phase : In this phase intrepreter creates the memory for the variables and creates a function expression.
//Execution phase : In this phase interpreter will executes the code that currently running. it allocates the actual values to the variables by removing undefined.

//5. What is meant by first class functions?
//first class function : the function that can be passed as value or return the function as a value. This unique feature is called first class functions or first class citizens.
 
//6. What are closures?
//closures are functions that references variables in the outer scope from its inner scope.
 let funcOne = () => {
     let count=0;
     return innerfn = () => {
         console.log(count++);
     }

 }
let a = outerfn();
 a();
 a();
 a();