//let Message = alert("Hey Manorooban");
//let Message = confirm("Ok === True\n Cancel === false");

// let Message = prompt("Enter Your Name: ");
// if(Message)
// {
//     console.log(Message ?? "Didn't enter the value");
// }
// else {
//     console.log("You Didn't enter your name");
// }
// console.log(Message.trim().length);



alert("Hey buddies Welcome to Number guessing game : ");

let secret = Math.floor(Math.random() *10)+1;
let attempts = 3;

while(attempts > 0){
    let guess = prompt("Guess a number between 1 and 10\n Attempts left :  " + attempts);


    if(guess === null){
        alert("Game cancelled");
        break;
    }

    guess = Number(guess);

    if(guess === secret){
        alert("Correct! You Win!");
        break;
    } 
    else{
        alert("Wrong guess!");
    }

    attempts--;
}
 if(attempts === 0){
    alert("Game over! The correct number was " + secret);
 }