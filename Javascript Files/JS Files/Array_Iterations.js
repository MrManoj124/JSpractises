//JavaScript Array forEach()
const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt += value + "<br>";
}

//Example 02 for Array ForEach method
// const numbers = [45, 4, 9, 16, 25];
// let txt = "";
// numbers.forEach(myFunction);

// function myFunction(value) {
//   txt += value + "<br>";
// }


//JavaScript Array map()
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction01(value, index, array) {
  return value * 2;
}

//Array forEach() method does not return a new array, it simply executes the provided function once for each array element.
const numberss = [45,14,25,63,87,95];
let text = "";
numberss.forEach(myFunction);

function myFunction(value, index, array){
  text += value * 2 + "<br>";
}

function onlyOne(value){
  text += value + "<br>"
}



//Array map() method returns a new array, containing the results of calling a function on every element in the calling array.
const num1 = [15,36,84,15,64,23];
const num2 = num1.map(myFunction01);

function myFunc(value, index, array){
  return value * 2;
}


//Example 02 for Array map() method
const num3 = [45,35,95,55,12,60];
const num4 = num3.map(myFunc);

function myFunc(value){
  return value * 2;
}

//Javascript Array flatMap()
const Arr = [10,20,30,35,45,55,60];
const Arr2 = Arr.flatMap((x) => x * 2);;

function myFunc(value){
  return value * 2 ;
}

//Example 02 for Array flatMap() method
const Arr03 = [20,15,24,36,84,25,16];
const Arr04 = Arr03.flatMap((x) => x * 2);

function myFunc(value){
  return value * 2;
}

//Javascrpt Array filter()
const num = [21,22,32,20,22,25,30];
const num5 = num.filter(myFunction);

function myFunction(value, index, array){
  return value > 25;
}


//JavaScript Array reduce()
const num6 = [40,20,30,25,15,36,34];
const num7 = num6.reduce(myFunction);

function myFunction03( value, index, array){
  return total + value;
}

//Example 02 for Array reduce() method
const number02 = [45, 4, 9, 16, 25];
let sum = number02.reduce(myFunction, 100);

function myFunction(total, value) {
  return total + value;
}