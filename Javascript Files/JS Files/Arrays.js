//Let's begin Arrays

//Creating an array
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits); // Output: [ 'Apple', 'Banana', 'Cherry' ]

//Array Constructors
let nums = new Array(1, 2, 3);
console.log(nums); // Output: [ 1, 2, 3 ]


//Accessing and Updating array elements
let colors = ["Red", "Green", "Blue"];
console.log(colors[0]); // Red

colors[1] = "Yellow";
console.log(colors); // ["Red", "Yellow", "Blue"]


//Array length
let arr = [1, 2, 3, 4];
console.log(arr.length); // 4

//length is mutable
arr.length = 2;
console.log(arr); // [1, 2]


//Array Methods
let animals = ["Dog", "Cat"];
animals.push("Elephant");
console.log(animals); // [ 'Dog', 'Cat', 'Elephant' ]

//pop method
animals.pop();
console.log(animals); // [ 'Dog', 'Cat' ]

//shift method
animals.shift();
console.log(animals); // [ 'Cat' ]

//unshift method
animals.unshift("Lion");
console.log(animals); // [ 'Lion', 'Cat' ]

//splice method
animals.splice(1, 0, "Tiger", "Bear");
console.log(animals); // [ 'Lion', 'Tiger', 'Bear', 'Cat' ]

//slice method
let newAnimals = animals.slice(1, 3);
console.log(newAnimals); // [ 'Tiger', 'Bear' ] 

//forEach method
animals.forEach((animal) => {
    console.log(animal);
});
// Output:
// Lion
// Tiger
// Bear
// Cat

//map method
let upperAnimals = animals.map((animal) => animal.toUpperCase());
console.log(upperAnimals); // [ 'LION', 'TIGER', 'BEAR', 'CAT' ]

//filter method
let longNamedAnimals = animals.filter((animal) => animal.length > 3);
console.log(longNamedAnimals); // [ 'Lion', 'Tiger', 'Bear' ]


//reduce method
let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 10


//find method
let foundAnimal = animals.find((animal) => animal.startsWith("T"));
console.log(foundAnimal); // Tiger

//findIndex method
let foundIndex = animals.findIndex((animal) => animal === "Bear");
console.log(foundIndex); // 2

//sort method   
animals.sort();
console.log(animals); // [ 'Bear', 'Cat', 'Lion', 'Tiger' ]

//reverse method
animals.reverse();
console.log(animals); // [ 'Tiger', 'Lion', 'Cat', 'Bear' ]

//concat method
let moreAnimals = ["Wolf", "Fox"];
let allAnimals = animals.concat(moreAnimals);
console.log(allAnimals); // [ 'Tiger', 'Lion', 'Cat', 'Bear', 'Wolf', 'Fox' ]

//join method
let animalString = allAnimals.join(", ");
console.log(animalString); // Tiger, Lion, Cat, Bear, Wolf, Fox
//End of Arrays


//For loop with arrays
let veggies = ["Carrot", "Broccoli", "Spinach"];
for (let i = 0; i < veggies.length; i++) {
    console.log(veggies[i]);
}
// Output:
// Carrot
// Broccoli
// Spinach
