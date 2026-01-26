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