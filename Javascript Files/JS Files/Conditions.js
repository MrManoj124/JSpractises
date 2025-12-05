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


