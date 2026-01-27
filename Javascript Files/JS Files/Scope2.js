//A closure is created when a function remembers variables from its outer scope,
//even after the outer function has finished execution.

function outer() {  
    let count = 0;

    function inner() {
        count++;
        console.log("Count:", count);
    }
    return inner;
}

let counter = outer();

counter(); // Count: 1
counter();  // Count: 3
counter();  // Count: 4

//Closure Data Hiding concept
function createCounter() {
    let password = "secret"; // private variable

    return {
        checkpassword: function(input) {
            return input === password;
        }
    };
}

let user = createCounter();

console.log(user.checkpassword("guess")); // false
console.log(user.checkpassword("secret")); // true


//this Vs Scope
let name = "Global";

let obj = {
    name: "Marooban",
    show : function() {
        console.log(this.name); // "Marooban"
        console.log(name);   // "Global"
    }
};

obj.show();
//In the above example, this.name refers to the name property of the obj object,
//while name refers to the global variable. 


//Arrow Functions Rules for this
let person = {
    name: "Mayback",
    show : () => {
        console.log(this.name); // undefined (or global name if exists)
    }
};

person.show();
//In arrow functions, this does not refer to the object itself but inherits from the surrounding scope. 
//Hence, this.name does not point to person.name.
//To access the object's properties, use regular function syntax instead of an arrow function.

//Corrected version:
let personCorrected = {
    name: "Mayback",
    show : function() {
        console.log(this.name); // "Mayback"
    }
};  
personCorrected.show();
//In this corrected version, show is defined using regular function syntax,
//so this correctly refers to the personCorrected object.   
//Arrow functions do not have their own this; they inherit it from the surrounding lexical scope.
//Therefore, they are not suitable for defining methods in objects when you need to access the object's properties using this.

//Use Cases of Closures
//1. Data Privacy
function secretHolder(secret) {
    return {
        getSecret: function() {
            return secret;
        },
        setSecret: function(newSecret) {
            secret = newSecret;
        }
    };
}
  
let mySecret = secretHolder("mySecret");
console.log(mySecret.getSecret()); // Output: mySecret
mySecret.setSecret("newSecret");
console.log(mySecret.getSecret()); // Output: newSecret 

//2. Function Factories
function makeMultiplier(factor) {
    return function(number) {
        return number * factor;
    };  
}

let double = makeMultiplier(2);
let triple = makeMultiplier(3); 
console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15   

//3. Maintaining State in Asynchronous Code
function fetchData(url) {
    let attempt = 0;
    return function() {
        attempt++;
        console.log(`Fetching data from ${url}, Attempt: ${attempt}`);
        // Simulate fetching data
    };
}

let fetchFromAPI = fetchData("https://api.example.com/data");
fetchFromAPI(); // Fetching data from https://api.example.com/data, Attempt: 1
fetchFromAPI(); // Fetching data from https://api.example.com/data, Attempt: 2

//4. Event Handlers
function setupButton(buttonId) {
    let clickCount = 0; 
    document.getElementById(buttonId).addEventListener('click', function() {
        clickCount++;
        console.log(`Button clicked ${clickCount} times`);
    });
}

setupButton("myButton"); // Assuming there's a button with id "myButton" in the HTML

// //In summary, closures are powerful tools in JavaScript that enable data privacy,
// //function factories, state maintenance in asynchronous code, and event handling, among other use cases.


//Let's declare a variable using const
const constantConst = "I am a constant variable";   
// const constantConst = "I cannot be
//redeclared"; // This will throw an error
// constantConst = "I cannot be reassigned"; // This will also throw an error
console.log(constantConst); // Output: I am a constant variable


// Demonstrating block scope with let and const
if (true) {
    let blockScopedLet = "I am block scoped";   
    const blockScopedConst = "I am also block scoped";
    ScopedConst = "I am also block scoped";
    console.log(blockScopedLet); // Output: I am block scoped
    console.log(blockScopedConst); // Output: I am also block scoped
}


//Loop scoping Bugs
for (var i=1; i<=3; i++){
    setTimeout(() => {
        console.log(i);
    }, 1000);
}


//Fix the bug Use let
for (let j=1; j<=3; j++){
    setTimeout(() =>{
        console.log(j);
    },1000)
} 


//older method to solve the fix
for (var m = 1; m <= 3; m++) {
  (function (t) {
    setTimeout(() => {
      console.log(t);
    }, 1000);
  })(m);
}


//Secure Quiz game
function createQuiz(){
    let score = 0;

    function ask(question, correct){
        let answer = prompt(question);
        if(answer === correct){
            score++;
            console.log("Correct!");
        }
        else{
            console.log("Wrong!")
        }
    }
    
    function showScore(){
        console.log("Final Scoer : "+score);
    }
    return {ask, showScore};
}

