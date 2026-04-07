// Scope of Variables in JavaScript
//Global scope -- variables declared outside of any function or block have global scope and can be accessed from anywhere in the code.
//Local scope -- variables declared inside a function or block have local scope and can only be accessed within that function or block.

// // Example of global scope
// var globalVar = "I am a global variable";

// function myFunction() {
//     console.log(globalVar); // can access global variable
// }       
// myFunction(); // Output: I am a global variable

// //Local scope example
// function myLocalFunction() {
//     var localVar = "I am a local variable";
//     console.log(localVar); // can access local variable
// }
// myLocalFunction(); // Output: I am a local variable
// console.log(localVar); // Uncaught ReferenceError: localVar is not defined
//
//3 keywords we can use 

//1.let
//2.const
//3.var
//

let fullName ="Debasish Sahu";

let age = 24;

console.log(fullName); 
    
// Output: Debasish Sahu

console.log(age); 

// Output: 24

// var = Variable can be re-declared and updated. A Global scope variable 

// let = Variable can not be re declared but can be updated . A block scope variable 

// update example of let

let salary = 50000;

salary =60000;

console.log(salary);


// const = Variable can not be re declared and can not be updated . A block scope variable

/// blocked scope example 

{
    let x = 10;
    console.log(x);
}
{
    let x= 20;
    console.log(x);
}