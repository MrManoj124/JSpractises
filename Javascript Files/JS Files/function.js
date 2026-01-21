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


//Function variable Stored in Object
let player = {
  name: "Hero",
  attack: function () {
    alert("Player attacks!");
  }
};

player.attack();
alert("Player Name: " + player.name);

//Function variable Stored in Array
let actions = [
  function () { alert("Jump!"); },
  function () { alert("Run!"); },
  function () { alert("Shoot!"); }
];
actions[0]();
actions[1]();
actions[2]();

//Function variable with setTimeout
let delayedMessage = function () {
  alert("This message is shown after 2 seconds.");
};  
setTimeout(delayedMessage, 2000);

//Function variable with setInterval
let count = 0;
let intervalId = setInterval(function () {
  count++;
  alert("Count: " + count);
    if (count >= 5) {
        clearInterval(intervalId);
    }
}, 1000);

//Function variable with Promise
let fetchDataPromise = function () {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
        let data = "Fetched Data";
        resolve(data);
    }, 2000);
    });
};

fetchDataPromise().then(function (data) {
  alert(data);
});


function getRandomNumber() {
  return Math.floor(Math.random() * 5) + 1;
}

function checkGuess(guess, secret){
    return guess === secret ? "Correct!" : "Wrong!";
}

let secret = getRandomNumber();
let userGuess = Number(prompt("Guess a number (1–5)"));

alert(checkGuess(userGuess, secret));


//Function variable with async
let fetchDataAsync = async function () {
    return "Async Data";
};

fetchDataAsync().then(function (data) {
    alert(data);
});


//Function variable with async/await
let fetchDataAsyncAwait = async function () {
    return new Promise(function (resolve) { 
        setTimeout(function () {
            resolve("Async/Await Data");
        }, 2000);
    });
}
let displayData = async function () {
    let data = await fetchDataAsyncAwait();
    alert(data);
}

//displayData();

//Function variable with try/catch
let riskyOperation = function () {
    throw new Error("Something went wrong!");
};

try {
    riskyOperation();
} catch (error) {
    alert("Caught an error: " + error.message);
}   


//Function variable with typeof
let checkType = function (value) {
    return typeof value;
};
alert("Type of 42: " + checkType(42));
alert("Type of 'Hello': " + checkType("Hello"));
alert("Type of true: " + checkType(true));


//Quiz Game Using Functions
function askQuestion(question, correctAnswer) {
  let answer = prompt(question);
  return answer === correctAnswer ? 1 : 0;
}

let score = 0;

score += askQuestion("2 + 2 ?", "4");
score += askQuestion("Capital of Sri Lanka?", "Colombo");

alert("Final Score: " + score);


//Function variable with Math.max
let findMax = function (...numbers) {
    return Math.max(...numbers);
};
alert("Max: " + findMax(10, 5, 20, 15));
alert("Max: " + findMax(-10, -5, -20, -15));    


//Function variable with Math.min
let findMin = function (...numbers) {
    return Math.min(...numbers);
};
alert("Min: " + findMin(10, 5, 20, 15));
alert("Min: " + findMin(-10, -5, -20, -15));

//Function variable with Math.random
let getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
alert("Random Int (1-10): " + getRandomInt(1, 10));
alert("Random Int (50-100): " + getRandomInt(50, 100));

//Function variable with Math.sqrt
let calculateSqrt = function (num) {
    return Math.sqrt(num);
};
alert("Sqrt of 16: " + calculateSqrt(16));
alert("Sqrt of 25: " + calculateSqrt(25));


//Function variable with Math.pow
let calculatePower = function (base, exponent) {
    return Math.pow(base, exponent);
};
alert("2^3: " + calculatePower(2, 3));
alert("5^4: " + calculatePower(5, 4));

//Function variable with Math.abs
let calculateAbs = function (num) {
    return Math.abs(num);
};
alert("Abs of -10: " + calculateAbs(-10));
alert("Abs of 5: " + calculateAbs(5));

//Function variable with Math.floor
let floorValue = function (num) {
    return Math.floor(num);
};
alert("Floor of 4.7: " + floorValue(4.7));
alert("Floor of -3.2: " + floorValue(-3.2));

//Function variable with Math.ceil
let ceilValue = function (num) {
    return Math.ceil(num);
};  
alert("Ceil of 4.2: " + ceilValue(4.2));
alert("Ceil of -3.8: " + ceilValue(-3.8));


//Function variable with Math.round
let roundValue = function (num) {
    return Math.round(num);
};  
alert("Round of 4.5: " + roundValue(4.5));
alert("Round of 4.4: " + roundValue(4.4));

//Function variable with Math.trunc
let truncValue = function (num) {
    return Math.trunc(num);
};
alert("Trunc of 4.9: " + truncValue(4.9));
alert("Trunc of -3.7: " + truncValue(-3.7));

//Function variable with Math.log
let logValue = function (num) {
    return Math.log(num);
};
alert("Log of 10: " + logValue(10));
alert("Log of 2.718: " + logValue(2.718));

//Function variable with Math.exp
let expValue = function (num) {
    return Math.exp(num);
};
alert("Exp of 1: " + expValue(1));
alert("Exp of 2: " + expValue(2));

//Function variable with Math.sin
let sinValue = function (angle) {
    return Math.sin(angle);
};
alert("Sin of π/2: " + sinValue(Math.PI / 2));
alert("Sin of 0: " + sinValue(0));


//Life System Game
function damagePlayer(health){
    let damage = Math.floor(Math.random() * 30);
    return health - damage;
}

let health = 100;

health = damagePlayer(health);
alert("Health left: " + health);

//Menu - Driven Game (Functions  + Loop)
function showMenu(){
    return prompt("1. Play\n2. Exit")''
}

let choice;

do {
  choice = showMenu();

  if (choice === "1") {
    alert("Game Started");
  }

} while (choice !== "2");


//Simple Callback Example
function greet(callback) {
  alert("Hello");
  callback();
}

function bye() {
  alert("Goodbye");
}

greet(bye);
