//Rock, paper, Scissors Refactored with Functions
const InitialGame = () =>{
    const startGame = confirm("Shall we play rock, paper or scissor?");
    startGame ? playGame() : alert("Ok, Maybe next time.");
};

//Game flow function
const playGame = () =>{
    while (true){
        let playerChoice = getPlayerChoice();
        playerChoice = formatPlayerChoice(playerChoice);
        if (playerChoice === ""){
            invalidChoice();
            continue;
        }
        if(!playerChoice){
            decidedNotToPlay();
            break;
        }
        playerChoice = evaluatePlayerChoice(playerChoice);
        if(!playerChoice){
            invalidChoice();
            continue;
        }
        const computerChoice = getComputerChoice();
        const result = determindWinner(playerChoice, computerChoice);
        displayResult(!result);
        if(askToPlayAgain()){
            continue;
        }
        else{
            thanksForPlaying();
            break;
        }
    }
};

const getPlayerChoice = () =>{
    return prompt ("please enter rock, paper or scissor.");
};
const formalPlayerChoice = (playerChoice) => {
    if(playerChoice || playerChoice === ""){
        return playerChoice.trim().toLowerCase();
    }
    else{
        return false;
    }
};

const decideNotToPlay = () => {
    alert("I guess you changed your mind. Maybe next time.");
};

const evaluatePlayerChoice = (playerChoice) => {
    if(
        playerChoice === "rock" || 
        playerChoice === "paper" ||
        playerChoice === "scissors" 
    )
    {
        return playerChoice;
    }
    else{
        return false;
    }
};

const invalidChoice = ()=>{
    alert("You didn't enter rock, paper, or scissors.")
};

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() *3);
    const rpsArray = ["Rock", "Paper", "Scissors"];
    return rpsArray[randomNumber];
}

const determineWinner = (player, computer) => {
    const winner = player === computer ? "Tie game !"
    : player === "rock" && computer === "paper"
    ? `playerOne : ${player}\n Computer : ${computer}\n Computer wins!`
    : player === "paper" && computer === "scissors"
    ? `playerOne : ${player}\n Computer : ${computer}\n Computer wins!`
    : player === "scissors" && computer === "rock"
    ? `playerOne : ${player}\n Computer : ${computer}\n Computer wins!`
    :`playerOne : ${player} \n Computer : ${computer} \n playerOne wins!.`
}
