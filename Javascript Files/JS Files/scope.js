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


//use let
let y = 10;
// let y = 20; ❌ Error

//Example
if (true) {
  let b = 5;
}
console.log(b); // ❌ Error (out of scope)


//use const
const z = 10;
// z = 20; ❌ Error


const PI = 3.14;
// PI = 3.14159; ❌ Error

//Example   
if (true) {
  const c = 15;
}   

//Variable values (Primitive vs Reference)
let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20


//Reference Type
let obj1 = { name: "Manoj" };
let obj2 = obj1;

obj2.name = "Kumar";

console.log(obj1.name); // Kumar
console.log(obj2.name); // Kumar


//Primitive Type
let p1 = 30;
let p2 = p1;    

p2 = 40;

console.log(p1); // 30
console.log(p2); // 40


//Global Scope
let globalVare = "I am global";

function test() {
  console.log(globalVare);
}

test();
console.log(globalVare);

//Local Scope
function localTest() {
  let localVar = "I am local";
  console.log(localVar);
}

localTest();
// console.log(localVar); // ❌ Error (out of scope)


//Example 02 for Function Scope
function demo() {
  let x = 10;
  console.log(x);
}

demo();
console.log(x); // ❌ Error


//Block Scope (let & const)
if(true){
    let m= 5;
    const t= 10;
}
console.log(m); // ❌ Error
console.log(t); // ❌ Error

