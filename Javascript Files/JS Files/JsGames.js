// Rock Paper Scissor
let playGame = confirm("Shall we Play Rock, Paper, Scissors?");
if (playGame){
    let playChoice = prompt("Please enter rock, paper or scissors.");
    if(playChoice){
    let playerOne = playerChoice.trim().toLowercase();
    if(
        playerOne === "rock" || playerOne === "paper" || playerOne === "scissor"
    ){
        let computerCoice = Math.floor(Math.random() + 3 + 1);
        let computer = computerCoice === 1 ? "rock" : computerCoice === 2 ? "paper" : "scissors";
    
    let result = playerOne === computer ? "Tie Game!"
    : playerOne === "rock" && computer === "paper"
    ? `playerOne : ${playerOne}\n Computer : ${computer}\n Computer Wins!` : 
    playerOne === "paper" && computer === "scissors"
    ? `playerOne : ${playerOne}\n Computer : ${computer}\n Computer Wins!` : 
    playerOne === "scissors" && computer === "rock"
    ? `playerOne : ${playerOne}\n Computer : ${computer}\n Computer Wins!` : 
     `playerOne : ${playerOne}\nComputer : ${Computer}\n playerOne Wins!`;
        alert(result);
        let PlayAgain = confirm("Play Again");
        playAgain ? location.reload() : alert("Ok, Thanks for Playing .");

    }else{
        alert("You  Didn't Enter rock, paper, or Scissors.");
    }
}else{
    alert("I guss you  Changed Your mind, Maybe Better luck next time.");
}
}
else{
    alert("Ok, Come back Again.");
}
}
