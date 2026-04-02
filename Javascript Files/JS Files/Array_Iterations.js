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