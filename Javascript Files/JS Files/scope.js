//Scope var, let, const

// let's declare a variable using var
var globalVar = "I am a global variable";
var globalVar = "I can be redeclared";
console.log(globalVar); // Output: I can be redeclared


// let's declare a variable using let
let blockLet = "I am a block-scoped variable";
// let blockLet = "I cannot be redeclared"; // This will throw an error
blockLet = "I can be reassigned";
console.log(blockLet); // Output: I can be reassigned


// let's declare a variable using const
const constantConst = "I am a constant variable";
// const constantConst = "I cannot be
//redeclared"; // This will throw an error
// constantConst = "I cannot be reassigned"; // This will also throw an error
console.log(constantConst); // Output: I am a constant variable


// Demonstrating block scope with let and const
if (true) {
    let blockScopedLet = "I am block scoped";   
    const blockScopedConst = "I am also block scoped";
    console.log(blockScopedLet); // Output: I am block scoped
    console.log(blockScopedConst); // Output: I am also block scoped
}
// console.log(blockScopedLet); // This will throw an error
// console.log(blockScopedConst); // This will throw an error


// Demonstrating function scope with var
function functionScope() {
    var functionScopedVar = "I am function scoped";
    console.log(functionScopedVar); // Output: I am function scoped
}
functionScope();
// console.log(functionScopedVar); // This will throw an error


// Summary
// var is function-scoped and can be redeclared and reassigned.
// let is block-scoped and can be reassigned but not redeclared.
// const is block-scoped and cannot be redeclared or reassigned.





