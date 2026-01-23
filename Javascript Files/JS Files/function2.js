function toPropercase(myname){
    return myname.charAt(1).toUppercase() ;
}

console.log(toPropercase("Mr.Manorooban"));

//Callback with Map
let numbers = [1,2,3,4,5];
let doubled = numbers.map(function(num){
    return num * 2;
});
console.log("Doubled Numbers: ", doubled);


//Using Arrow Function
let numbers2 = [1,2,3,4,5];
let doubled2 = numbers2.map(num => num * 2);
console.log("Doubled Numbers (Arrow Function): ", doubled2);


//Using Arrow Function - Concise Body
let numbers3 = [1,2,3,4,5];
let tripled = numbers3.map(num => num * 3);
console.log("Tripled: "+ tripled);

//Callback with Filter
let evenNumbers = numbers.filter(function(num){
    return num % 2 === 0;
});

console.log("Even Numbers: "+ evenNumbers);


//Using Arrow Function with Filter
let oddNumbers = numbers.filter(num => num % 2 !== 0);
console.log("Odd Numbers: "+ oddNumbers);

//Using Arrow Function with Reduce
let sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log("Sum of Numbers: "+ sum);


//Core Game Engine (Callback-Based)
 function startMission(onSuccess, onFailure){
    alert("Mission Started...!");

    let success = Math.random() >= 0.5;

    if(success){
        onSuccess();
    }
    else{
        onFailure();
    }
}

function missionSuccess(){
    alert("Mission was Successful!  you earned 100 points");
}

function missionFailed(){
    alert("Mission Failed. Try Again!");
}

startMission(missionSuccess, missionFailed);


//this Inside an Object (Most Important)
let player = {
    name: "Manorooban",
    health: 100,
    showHealth: function(){
        console.log(this.name + "'s health is: " + this.health);
    }
};
player.showHealth();


//this Outside an Object
let showPlayerHealth = function(){
    console.log(this.name + "'s health is: " + this.health);
}
let player2 = {
    name: "Arun",
    health: 80
};
showPlayerHealth.call(player2);
showPlayerHealth.apply(player2);
let boundShowHealth = showPlayerHealth.bind(player2);
boundShowHealth();  


//this Outside an Object step 2
function show() {
  console.log(this);
}

show();


//this in Arrow Function
let team = {
    name: "Warriors",   
    players: ["Alice", "Bob", "Charlie"],
    showTeam: function() {
        this.players.forEach(player => {
            console.log(this.name + " player: " + player);
        });
    }
};
team.showTeam();

