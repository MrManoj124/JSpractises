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

//Use instanceof method
console.log(Mobile instanceof Set); //True

//Use delete method
Mobile.delete("Camera Quality-80MP");
console.log(Mobile);


//Set and Properties
// create new Set()
const MilkProducts = new Set(["Yougurt","Cheese","Curd"]);


//create add() method
MilkProducts.add("FreshMilk");


// Clear ()method
MilkProducts.clear("Curd");

// create delete() method
MilkProducts.delete("Cheese");

//The Size property
MilkProducts.size;


// Listing set elements
// Create a Set
const letters = new Set(["a","b","c"]);

// Create a Set
const letters = new Set(["a","b","c"]);

// List all Elements
let text = "";
for (const x of letters) {
  text += x;
}


// Add has() method
answer = letters.has("Curd");
console.log(letters);

// Add keys() method
answer = letters.keys("Curd");
console.log(letters);

// Add values() method
answer = letters.values("Milk Packet");
console.log(letters);


// create a new sets for size 
const myProp = new Set(["pen","pencil","EX_Book"]);

// The number of elements are
myProp.size;