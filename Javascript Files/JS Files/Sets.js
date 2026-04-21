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
