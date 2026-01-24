function toPropercase(myname){
    return myname.charAt(0).toUpperCase() + myname.slice(1);
}

console.log(toPropercase("Mr.Manorooban"));

//Callback with Map
let numbers = [1,2,3,4,5];
let doubled = numbers.map(function(num){
    return num * 2;
});
console.log("Doubled Numbers: ", doubled);


//Using Arrow Function
let numbers2 = [1,2,3,4,5];
let doubled2 = numbers2.map(num => num * 2);
console.log("Doubled Numbers (Arrow Function): ", doubled2);


//Using Arrow Function - Concise Body
let numbers3 = [1,2,3,4,5];
let tripled = numbers3.map(num => num * 3);
console.log("Tripled: "+ tripled);

//Callback with Filter
let evenNumbers = numbers.filter(function(num){
    return num % 2 === 0;
});

console.log("Even Numbers: "+ evenNumbers);


//Using Arrow Function with Filter
let oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log("Odd Numbers: "+ oddNumbers);

//Using Arrow Function with Reduce
let sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log("Sum of Numbers: "+ sum);


//Core Game Engine (Callback-Based)
 function startMission(onSuccess, onFailure){
    alert("Mission Started...!");

    let success = Math.random() >= 0.5;

    if(success){
        onSuccess();
    }
    else{
        onFailure();
    }
}

function missionSuccess(){
    alert("Mission was Successful!  you earned 100 points");
}

function missionFailed(){
    alert("Mission Failed. Try Again!");
}

startMission(missionSuccess, missionFailed);


//this Inside an Object (Most Important)
let player = {
    name: "Manorooban",
    health: 100,
    showHealth: function(){
        console.log(this.name + "'s health is: " + this.health);
    }
};
player.showHealth();


//this Outside an Object
let showPlayerHealth = function(){
    console.log(this.name + "'s health is: " + this.health);
}
let player2 = {
    name: "Arun",
    health: 80
};
showPlayerHealth.call(player2);
showPlayerHealth.apply(player2);
let boundShowHealth = showPlayerHealth.bind(player2);
boundShowHealth();  


//this Outside an Object step 2
function show() {
  console.log(this);
}

show();


//this in Arrow Function
let team = {
    name: "Warriors",   
    players: ["Alice", "Bob", "Charlie"],
    showTeam: function() {
        this.players.forEach(player => {
            console.log(this.name + " player: " + player);
        });
    }
};
team.showTeam();

// //this in Arrow Function - Example 2
// let counter = {
//     count: 0,
//     increment: function() {
//         setInterval(() => {
//             this.count++;
//             console.log("Count: " + this.count);
//         }
//         , 1000);
//     }
// };
// counter.increment();


//default Parameters
function greet(name = "Guest") {
    console.log("Hello, " + name + "!");
}

greet(); 
greet("Manorooban");    


//Rest Parameters
function sumAll(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log("Sum All: " + sumAll(1, 2, 3, 4, 5));
console.log("Sum All: " + sumAll(10, 20, 30));


//Spread Operator
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2];
console.log("Combined Array: " + combined);

let obj1 = {a: 1, b: 2};
let obj2 = {c: 3, d: 4};
let mergedObj = {...obj1, ...obj2};
console.log("Merged Object: ", mergedObj);


//Destructuring Assignment - Array
let rgb = [255, 200, 100];
let [red, green, blue] = rgb;
console.log("Red: " + red + ", Green: " + green + ", Blue: " + blue);


//Destructuring Assignment - Object
let person = {name: "John", age: 30, city: "New York"};
let {name, age, city} = person;
console.log("Name: " + name + ", Age: " + age + ", City: " + city); 


//Destructuring Assignment - Function Parameters
function displayUser({name, age, city}) {
    console.log("Name: " + name + ", Age: " + age + ", City: " + city);
}

let user = {name: "Abinaya", age: 23, city: "Los Angeles"};
 displayUser(user);


//Template Literals
let userName = "Manorooban";
let userAge = 25;
let greeting = `Hello, my name is ${userName} and I am ${userAge} years old.`;
console.log(greeting);


//Multiline String with Template Literals
let multiLineString = `Hi Friends.
This is Manoj.
Welcome to the JavaScript World!`;
console.log(multiLineString);


//Tagged Template Literals
function highlight(strings, ...values){
    return strings.reduce((result, str, i) => {
        return result + str + (values[i] ? `<strong>${values[i]}</strong>` : '');
    }, '');
}
let nameTag = "Manorooban";
let ageTag = 25;
let message = highlight`My name is ${nameTag} and I am ${ageTag} years old.`;
console.log(message);


//Again this problem with callbacks 
let game = {
    name : "Battle",
    start : function(){
        setTimeout(function(){
            alert(this.name);
    },1000);
    }
};


game.start(); //undefined because this inside setTimeout refers to global object


//Arrow function
let game2 = {
    name : "Battle",
    start : function(){
        setTimeout(() => {
            alert(this.name);
    },1000);
    }
};

game2.start(); // "Battle" because arrow function inherits this from start method


//Problem with Async callbacks (Callback hell)
setTimeout(() => {
    alert("Level 01");

    setTimeout(() =>{
        alert("Level 02");

        setTimeout(() =>{
            alert("Level 03");
        }, 1000);
    }, 1000)
}, 900) ;


//converting Callback into promise
// Callback Version
function loadlevel(callback){
    setTimeout(() =>{
        callback("Level Loaded");
    }, 1000);
}


//Promise Version
function loadlevel(){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve("Level Loaded");
        }, 1000);
    });
}