//console.log("Hey Mr. Manorooban, Welcome to Javascript Beginner Course");
//console.log(typeof("This is your first Javascript code execution"));
//console.log(typeof(14));

// //Strings
// const myVariable="Arithmatical Logics";
// console.log(myVariable.length);

// //String Methods
// console.log(myVariable.toUpperCase());
// console.log(myVariable.toLowerCase());
// console.log(myVariable.slice(0,5));
// console.log(myVariable.replace("Logics","Operations"));     
// console.log(myVariable.concat(" in Javascript"));

// console.log(myVariable.charAt(5));
// console.log(myVariable.indexOf("L"));
// console.log(myVariable.lastIndexOf("a"));

// console.log(myVariable.lastIndexOf("a"));
// console.log(myVariable.split(" "));

// console.log(myVariable.startsWith("Ari"));
// console.log(myVariable.endsWith("ics"));
// console.log(myVariable.endsWith("Lo"));
// console.log(myVariable.includes("mat"));

// myinfo="  Manorooban  ";
// console.log(myinfo.trim());   
// console.log(myinfo.repeat(3));
// console.log(myinfo.trim().repeat(2));
// console.log(myinfo.trim().length);
// console.log(myinfo.length);
// console.log(myinfo.trim().toUpperCase());

// console.log(`Hello ${myinfo.trim().toUpperCase()}, Welcome to Javascript Beginner Course`);
// console.log('Hello ' + myinfo.toUpperCase() + ', Welcome to Javascript Beginner Course');


//Numbers
var num1=14;
var num2=3.5;
var num3="24";

console.log(Number.isInteger(num1));
console.log(Number.isInteger(num2));

console.log(Number.isNaN(num1));
console.log(Number.isNaN("Manorooban"));
console.log(Number.isNaN(NaN));

console.log(Number.parseInt(num2));
console.log(Number.parseFloat(num2));
console.log(num2.toFixed(1));
console.log(num2.toFixed(3));
console.log(num2.toPrecision(2));
console.log(num2.toPrecision(3));

console.log(Math.round(num2));
console.log(Math.ceil(num2));
console.log(Math.floor(num2));
console.log(Math.trunc(num2));

console.log(Math.pow(num1,2));
console.log(Math.sqrt(num1));
console.log(Math.abs(-num2));
console.log(Math.min(3,7,1,4,9,2));
console.log(Math.max(3,7,1,4,9,2));
console.log(Math.random());
console.log(Math.floor(Math.random()*10)+1); //Random number between 1 to 10
console.log(Math.floor(Math.random()*100)+1); //Random number between 1 to 100
console.log(Math.floor(Math.random()*50)+1); //Random number between 1 to 50


console.log(num1 === num2);
console.log(num1.isInteger);
console.log(Number(num3));


const auth="We definitely need to learn Javascript";
console.log(auth.length);
console.log(auth);
console.log(auth.includes("need"));
console.log(Math.random(auth.length));


//Math.PI; // 3.141592653589793
console.log(Math.PI);
console.log(Math.trunc(Math.PI));
console.log(Math.round(Math.PI));
console.log(Math.ceil(Math.PI));
console.log(Math.floor(Math.PI));
console.log(Math.floor(4.258));
console.log(Math.pow(5,4));
