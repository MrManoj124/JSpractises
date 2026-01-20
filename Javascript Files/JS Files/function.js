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

