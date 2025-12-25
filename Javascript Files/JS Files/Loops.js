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

//Start the Mind Reader game code
alert("Think of a number between 1 and 31. \n I will guess it");

let number= 0;
 for (let i=0; i<5; i++){
    let power = Math.pow(2, i);
    let answer = confirm("Is your number in this set?\n" + power + "-" + (power * 2 - 1));

    if (answer){
        number += power;
    }
 }

 alert("Your number is : " + number);

