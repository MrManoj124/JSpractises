// Quetion Based Ternary and Prompt function usages 
//Single quiz game

alert("Javascript Quiz");

let answer = prompt("What do you think 12 + 14 ? ");

let result = (Number(answer) === 26) ? "Correct Answer !" : "Wrong Answer !";

alert(result);

//RealTime Feedback game
let correc=0;

for (let i = 1; i<=3; i++){
    let a = Math.floor(Math.random() * 10);
    let b = Math.floor(Math.random() * 10);

    let answer = prompt("Q" + i + " : ", + a + " x " + b + " = ?");

    let message = (Number(answer) === a * b) ? "Correct !" : "Wrong one ! Answer was" + (a * b);

    alert(message);

    correct += (Number(ans) === a*b) ? 1 : 0;
}

alert ("Total correct answers : " + correct);


//Simple pass fail system
let marks = prompt ("Enter the marks (0 - 100)");

let resultss = (marks >= 50) ? "Pass" : "Fail";
alert("Result is : "+ results);


//attend some complex logics
let a = Math.floor(Math.random() * 10);
let b = Math.floor(Math.random() * 10);

alert(
  a === b ? "Equal" :
  a > b   ? "A is Greater" :
            "B is Greater"
);


//simple health machine
let health = Math.floor(Math.random() * 120);

let state =
  health > 70 ? "POWER MODE" :
  health > 30 ? "NORMAL MODE" :
                "CRITICAL MODE";

alert("Health: " + health + "\nState: " + state);




