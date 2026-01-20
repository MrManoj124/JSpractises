//function

function operations(num1,num2){
    if(num2== undefined){
    return num1+num1;
    }
    else{
        return num1+num2;
    }
}

console.log(operations(10,20));


function emailvalidation(email){
    return "manoj@gmail.com";
}
console.log(emailvalidation());

console.log("Mr. "+"manoj");

function findValue(obj, searchString)
{
    for(let key in obj){
        if(typeof obj[key] === 'string' && obj[key].includes(searchString))
        {
            return obj[key];
        }
    }
}
let data = {email: 'krisha@gmail.com', name:'krisha'};
let email = findValue(data, "@");

console.log(email);

//Greet function
let greet = function () {
  alert("Hello, welcome to JavaScript!");
};

greet();

//Addition function
let add = function (a, b) {
  return a + b;
};

alert(add(8, 12));


sayHello();
function sayHello(){
    alert("Hello Manorooban...!");
}


//sayHi(); // ❌ Error

let sayHi = function () {
  alert("Hi");
};


let checkAnswer = function (user, correct){
    return user === correct ? "true" : "false";
}

alert("checkAnswer: "+ checkAnswer(12, 12));
alert("checkAnswer: "+ checkAnswer(14, 24));


//Function varialble inside Another function
function game(){
    let result = function(){
        alert("Game Over");
    };
    result();
}
game();

//Function variable with confirm() 
let IsAllowed = function(){
    return confirm("Are you allowed to access this site?");
};

alert(isAllowed() ? "Access granted" : "Access denied");

//Arrow function
let multiply = (x, y) => x * y;

alert("Multiply: "+ multiply(4, 5));

//Arrow function with single parameter
let square = x => x * x;

alert("Square: "+ square(6));

let subtraction = (a,b) =>{
    return a - b;
}
console.log("Subtraction: "+ subtraction(20, 8));


//Arrow function without parameters
let greetUser = () => alert("Welcome User!");

greetUser();


//Immediately Invoked Function Expression (IIFE)
(function(){
    alert("This is an IIFE!");
})();


//Funtion Variable as Event Logic
let showMessage = function(){
    alert("Button Clicked!");
}

//Later usage
//<button onclick="showMessage()">Click</button>


//Recursive Function
function factorial(n){
    if(n <= 1){
        return 1;
    }
    else{
        return n * factorial(n - 1);
    }   
}

console.log("Factorial of 5: "+ factorial(5));
console.log("Factorial of 7: "+ factorial(7));
console.log("Factorial of 10: "+ factorial(10));


//Function with Default Parameters
function greetUser(name = "Guest"){
    return "Hello, " + name + "!";
}
console.log(greetUser("Manoj"));
console.log(greetUser());

//Function with Rest Parameters
function sumAll(...numbers){
    return numbers.reduce((total, num) => total + num, 0);
}
console.log("Sum: "+ sumAll(1, 2, 3, 4, 5));
console.log("Sum: "+ sumAll(10, 20, 30));


//Function with Callback
function fetchData(callback){
    let data = "Sample Data";
    callback(data);
}

fetchData(function(data){
    console.log("Fetched Data: " + data);
});
fetchData((data) => {
    console.log("Fetched Data with Arrow Function: " + data);
});


//Function variable Stored in Object
let calculator = {
    add: function(a, b){
        return a + b;  
    },
    subtract: function(a, b){
        return a - b;
    }
};
console.log("Calculator Add: "+ calculator.add(15, 10));
console.log("Calculator Subtract: "+ calculator.subtract(25, 5));

//Function variable Stored in Array
let operationsArray = [
    function(a, b){ return a + b; },    
    function(a, b){ return a - b; },    
    function(a, b){ return a * b; },    
    function(a, b){ return a / b; }    
];
console.log("Array Add: "+ operationsArray[0](10, 5));
console.log("Array Subtract: "+ operationsArray[1](10, 5));
console.log("Array Multiply: "+ operationsArray[2](10, 5));
console.log("Array Divide: "+ operationsArray[3](10, 5));

