// // Rock Paper Scissor
// let playGame = confirm("Shall we Play Rock, Paper, Scissors?");
// if (playGame){
//     let playChoice = prompt("Please enter rock, paper or scissors.");
//     if(playChoice){
//     let playerOne = playerChoice.trim().toLowercase();
//     if(
//         playerOne === "rock" || playerOne === "paper" || playerOne === "scissor"
//     ){
//         let computerCoice = Math.floor(Math.random() + 3 + 1);
//         let computer = computerCoice === 1 ? "rock" : computerCoice === 2 ? "paper" : "scissors";
    
//     let result = playerOne === computer ? "Tie Game!"
//     : playerOne === "rock" && computer === "paper"
//     ? `playerOne : ${playerOne}\n Computer : ${computer}\n Computer Wins!` : 
//     playerOne === "paper" && computer === "scissors"
//     ? `playerOne : ${playerOne}\n Computer : ${computer}\n Computer Wins!` : 
//     playerOne === "scissors" && computer === "rock"
//     ? `playerOne : ${playerOne}\n Computer : ${computer}\n Computer Wins!` : 
//      `playerOne : ${playerOne}\nComputer : ${Computer}\n playerOne Wins!`;
//         alert(result);
//         let PlayAgain = confirm("Play Again");
//         playAgain ? location.reload() : alert("Ok, Thanks for Playing .");

//     }else{
//         alert("You  Didn't Enter rock, paper, or Scissors.");
//     }
// }else{
//     alert("I guss you  Changed Your mind, Maybe Better luck next time.");
// }
// }
// else{
//     alert("Ok, Come back Again.");
// }



// //Simple Rock Paper Scissor game
// alert("You're Enter into Rock,Paper,Scissor Game !");

// let user = prompt("Enter rock, paper, scissors");
// let choices = ['rock', 'paper', 'scissors'];
// let computer = choices[Math.floor(Math.random() * 3)];

// alert("Computer choose : " + computer);

// if(user === computer){
//     alert("It's a tie...!");
// }
// else if(
//     (user === 'rock' && computer === 'scissors') ||
//     (user === 'paper' && computer === 'rock') ||
//     (user === 'scissors' && computer === 'paper')
// )
// {
//     alert("You Win the game..!");
// }
// else{
//     alert("Computer win the game...!");
// }



// //Secret Door Game 
// alert("Enter Secret Door Game ");

// let door = Math.floor(Math.random() * 3) +1;
// let choice = prompt("Choose a door : 1, 2 or 3");

// if(Number(choice) === door){
//     alert("You found the treasure!");
// }
// else{
//     alert("Wrong door! Treasure was behind door "+door);
// }


// //Continue / Quit Loop Game

// let play = true;

// while (play) {
//   let number = Math.floor(Math.random() * 5) + 1;
//   let guess = prompt("Guess a number between 1 and 5");

//   if (Number(guess) === number) {
//     alert("Correct!");
//   } else {
//     alert("Wrong! Number was " + number);
//   }

//   play = confirm("Do you want to play again?");
// }

// alert("Thanks for playing!");



//Dice Rolling Game
alert("Welcome to Dice Rolling Game !");

let userRoll = Math.floor(Math.random() * 6) +1;
let computerRoll = Math.floor(Math.random() *6)+1;

alert("You rolled :" + userRoll);
alert("Computer rolled : " + computerRoll);

if(userRoll > computerRoll){
    alert("You Win the Game");
}
else if(userRoll < computerRoll){
    alert("Computer Wins!");
}
else{
    alert("It's a Draw!")
}

