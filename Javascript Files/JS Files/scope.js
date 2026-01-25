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


