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


