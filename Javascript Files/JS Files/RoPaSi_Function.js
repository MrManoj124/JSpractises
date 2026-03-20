//Rock, paper, Scissors Refactored with Functions
const InitialGame = () =>{
    const startGame = confirm("Shall we play rock, paper or scissor?");
    startGame ? playGame() : alert("Ok, Maybe next time.");
};

//Game flow function
const playGame = () =>{
    while (true){
        let playerChoice = getPlayerChoice();
    }
}