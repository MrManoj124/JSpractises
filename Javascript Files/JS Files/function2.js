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

