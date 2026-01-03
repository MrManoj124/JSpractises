let todayisHeavyRain = true;
let weather = "Heavy Rain";
let alert = "Weather Alert: ";
let people = "Must be aware of heavy rain";
if (todayisHeavyRain) {
  console.log(people);
}   
else if (weather === "Heavy Rain") {
    console.log(`Today ${alert} is + ${weather}`);
    if(todayisHeavyRain){
        console.log(people);
    }
    else{
        console.log("No worry about cyclones");
    }
}
else {
  console.log("No heavy rain today");
}
// Output: Must be aware of heavy rain

let score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
}
else {
    console.log("Grade: D");
}
// Output: Grade: B



//Conditional Operators
let rain = true;
console.log(rain?"Go with Car" : "Go With Bike");




