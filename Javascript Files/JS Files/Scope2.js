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