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

