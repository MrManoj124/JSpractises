//Create a new Set
const mySet = new Set();

//Add some values to the Set
mySet.add(1);
mySet.add(10);
mySet.add(100);

//Check if a value exists in the set
console.log(mySet.has(10)); //True

//Delete a value from the set
mySet.delete(1);

//Check the size of the set
console.log(mySet.size); //2

//Iterate over the set
mySet.forEach((value) => {
  console.log(value);
});


//create a new set with an array
const mySet2 = new Set([1, 2, 3, 4, 5]);
console.log(mySet2); //Set(5) {1, 2, 3, 4, 5}


//Example 02 for Set
const mySet3 = new Set();
mySet3.add("Hello");
mySet3.add("World");
mySet3.add("Hello"); //Duplicate value, will not be added
console.log(mySet3); //Set(2) {"Hello", "World"}

//Example 03 for Set
const mySet4 = new Set();
mySet4.add({ name : "Alice"});
console.log(mySet4.has({name : "Alice"})); //False, because objects are reference types

//Example 04 for set
const Mobile = new Set();

//Create variable for Mobile set
const Battery = "6000MaH";
const ChargerType = "Type-C";
const Display = "6.4 Inch ameled";


//Add variable to the Mobile Set
Mobile.add(Battery);
Mobile.add(ChargerType);
Mobile.add(Display);

//Print the Mobile set
console.log(Mobile);


//Use add() method
Mobile.add("Camera Quality-80MP");
Mobile.add("Charging_Speed-40W_FastCharging");
Mobile.add("Ai Voice assistant Support");


//Listing the elements
//Create a set
const Cars = new Set(["Ford","Mustang","Ferrari","Mazda"]);

//Listing All elements
let Brand = "";
for(const n of Cars){
  Brand+=n;
}


//Sets are object
//Use typeof Method
typeof Mobile;
console.log(typeof(Mobile));