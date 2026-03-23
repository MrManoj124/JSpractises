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