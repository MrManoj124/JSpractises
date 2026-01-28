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


//for...of loop
for (let score of scores) {
  console.log(score);
}
// Output:
// 85
// 90
// 78
// 92
// 88


//for...in loop
let person = {name: "Abinaya", age: 25, city: "New York"};
for (let key in person) {
    console.log(key + ": " + person[key]);
}

// Output:
// name: Abinaya
// age: 25
// city: New York

//End of For loops with arrays


//forEach loop
scores.forEach(function (score) {
  console.log(score);
});
// Output:
// 85
// 90
// 78
// 92
// 88   
//End of forEach loop


//Search methods
let scores = [85, 90, 78, 92, 88];

//indexOf method
let index = scores.indexOf(90);
console.log(index); // 1


//includes method
let hasScore = scores.includes(100);
console.log(hasScore); // false
//End of Search methods


//slice (Non-destructive)
let arr = [1, 2, 3, 4];
let part = arr.slice(1, 3);

console.log(part); // [2, 3]
console.log(arr);  // unchanged


//splice (Destructive)
let arr = [1, 2, 3, 4];
arr.splice(1, 2);
console.log(arr); // [1, 4]
//End of slice and splice


//reduce(Accumulate)
let number = [1, 2, 3, 4];
let total = number.reduce((total, n) => total + n, 0);
console.log(total);


//Arrays with Objects
let students = [
  { name: "Manorooban", marks: 85 },
  { name: "Abinaya", marks: 72 }
];

let toppers = students.filter(s => s.marks > 80);
console.log(toppers);

// Output: [ { name: 'Manorooban', marks: 85 } ]
//End of Arrays with Objects

//Multidimensional Arrays
let matrix = [
  [1, 2],
  [3, 4]
];

console.log(matrix[1][0]); // 3

//Iterating Multidimensional Arrays
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}
// Output:
// 1
// 2
// 3
// 4
//End of Multidimensional Arrays

//Array Destructuring
let rgb = [255, 0, 0];
let [red, green, blue] = rgb;
console.log(red);   // 255
console.log(green); // 0
console.log(blue);  // 0

//Skipping elements
let [first, , third] = rgb;
console.log(first);
console.log(third); // 0

//Default values
let [r = 0, g = 0, b = 0, a = 1] = [255, 0, 0];
console.log(a); // 1
//End of Array Destructuring

//Spread Operator with Arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6]; 
let combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

//Copying an array
let copy = [...arr1];
console.log(copy); // [1, 2, 3]
//End of Spread Operator with Arrays


//Array.from() method
let str = "Hello";
let charArray = Array.from(str);
console.log(charArray); // [ 'H', 'e', 'l', 'l', 'o' ]

//Array.of() method
let no = Array.of(1, 2, 3);
console.log(no); // [ 1, 2, 3 ]
//End of Array.from() and Array.of() methods

//Mini challange
//Create an array of numbers from 1 to 10
let numbersArray = Array.from({length: 10}, (_, i) => i + 1);
console.log(numbersArray); // [1,2,3,4,5,6,7,8,9,10]

//Filter out even numbers
let oddNumbers = numbersArray.filter(num => num % 2 !== 0);
console.log(oddNumbers); // [1,3,5,7,9]

//Calculate the sum of odd numbers
let sumOfOdd = oddNumbers.reduce((sum, num) => sum + num, 0);
console.log(sumOfOdd); // 25


let fives = [5, 10, 15, 20];
// 1. Get only numbers > 10
let greaterThanTen = fives.filter(num => num > 10);
console.log(greaterThanTen); // [15, 20]

// 2. Double them
let doubled = greaterThanTen.map(num => num * 2);
console.log(doubled); // [30, 40]


// 3. Find total
