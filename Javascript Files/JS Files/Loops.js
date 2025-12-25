// //Loops 
// //#While Loop
// let num = 1;
// while(num<= 10){
//     console.log(num);
//     num=num+1;
// }

// //Do While Loop

// let i=50;
// do{
//     console.log(i);
//     i=i+10;
// }
// while(i<50)


// //For Loops
// let name="Manorooban";
// for(let i=1; i<=name.length; i++){
//     console.log(name.charAt(i));
// }

// //Start the Mind Reader game code
// alert("Think of a number between 1 and 31. \n I will guess it");

// let number= 0;
//  for (let i=0; i<5; i++){
//     let power = Math.pow(2, i);
//     let answer = confirm("Is your number in this set?\n" + power + "-" + (power * 2 - 1));

//     if (answer){
//         number += power;
//     }
//  }

//  alert("Your number is : " + number);


// //Start the Locker Cracker Game
// alert("Lock Cracker Game..!");

// let code = Math.floor(Math.random() * 900) +100;

// for(let attempts = 1; attempts <= 5; attempts++){
//     let guess = prompt("Attempt : " + attempts + "Enter a 3 digit Code : ");

//     if(Number(guess) === code ){
//         alert("Lock Opened..!");
//         break;
//     }

//     let hint = guess < code ? "Too Low" : " Too High";
//     alert(hint);
// }

// alert("The correct code was : " + code );


//Enemy Ai Prediction Game 

alert("Enemy AI prediction Game : ");
 let Score = 0;

 for (let round = 1; round <= 5; round++){
    let enemyMove = Math.floor(Math.random() * 3);
    let userMove = prompt("Round" + round + "\nChoose : 0 = Attack, 1 = Defined, 2 = Run");

    if(Number(userMove) === enemyMove){
        alert("Enemy predicated your move...!");
    }else{
        alert("You outsmarted the enemy !");
        score++;
    }
 }

 alert("Final Score : " + score);