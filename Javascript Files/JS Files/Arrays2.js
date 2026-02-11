//Linear Search (Manual Algorithm)
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

let nums = [10, 20, 30, 40];
console.log(linearSearch(nums, 30)); // 2
//Time Complexity: O(n)


//Binary Search (Sorted Arrays Only)
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
}

let sorted = [10, 20, 30, 40, 50];
console.log(binarySearch(sorted, 40)); // 3
//Time Complexity: O(log n)



//Finding Max / Min (Algorithmic Way)
function findMax(arr) {
  let max = arr[0];
  for (let n of arr) {
    if (n > max) max = n;
  }
  return max;
}

function findMin(arr) {
  let min = arr[0];
  for (let n of arr) {
    if (n < min) min = n;
  }
  return min;
}

let number  = [4, 9, 2, 7];
console.log(findMax(number)); // 9
console.log(findMin(number)); // 2


//Built-in Sort 
let no = [10, 5, 20, 3];
no.sort((a, b) => a - b);
console.log(no);


//Bubble Sort
function bubbleSort(arr) {
  let a = [...arr];

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - i - 1; j++) {
      if (a[j] > a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
      }
    }
  }
  return a;
}

console.log(bubbleSort([5, 3, 1, 4]));


//Immutable Practice
//Add Item
let newArr = [...arr, 5];


//Remove Item
let newArr1 = arr.filter(n => n !== 3);

//Update Item
let newArr2 = arr.map(n => n === 2 ? 20 : n);


//Console Quiz Game
const questions = [
  { q: "2 + 2 ?", a: "4" },
  { q: "Capital of Sri Lanka?", a: "Colombo" },
  { q: "JS keyword for constant?", a: "const" }
];


//Quiz Logic
function playQuiz(questions) {
  let score = 0;

  for (let i = 0; i < questions.length; i++) {
    let userAnswer = prompt(questions[i].q);

    if (userAnswer === questions[i].a) {
      alert("Correct!");
      score++;
    } else {
      alert("Wrong!");
    }
  }

  return score;
}

let finalScore = playQuiz(questions);
alert("Final Score: " + finalScore);


//Array with Callback
questions.forEach(q => {
  console.log(q.q);
});


//create an Async Quiz
function askAsync(question){
  return new Promise(resolve => {
    setTimeout(() => {
      let answer = prompt(question.q);
      resolve(answer === question.a);
    }, 1000);
  });
}


//create Async Quiz Engine
async function playAsyncQuiz(questions) {
  let score = 0;

  for (let q of questions) {
    let correct = await askAsync(q);
    if (correct) {
       console.log("Correct!");
      score++;
    } else {
       console.log("Wrong!");
    }
  }
  console.log("Async Quiz Finished. Score: " + score);
}

playAsyncQuiz(questions);


//create call stack 
function first(){
  console.log("First");
}

function second(){
  console.log("Second");
}

first();
second();

//First , Second


//Web APIs (Browser Handles Async)
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

console.log("End");

//DOM MANIPULATION (REAL UI APPS)

//Selecting Elements
document.getElementById("Title");
document.querySelector(".btn");
document.querySelectorAll("li")

//Changing Content
let heading = document.getElementById("title");

heading.textContent = "Hello";
heading.innerHTML = "<strong>Hello</strong>";


//Handling Events
let button = document.getElementById("btn");

button.addEventListener("click", function() {
  console.log("Clicked...!");
});


//Error Handling
console.log(a);  // X crash
console.log("After");  //never runs


//Using try / catch function
try{
  console.log(b);
}
catch(error){
  console.log("Something went wrong...!")
}

console.log("Program  Continues...!");


//Real Example (User Input)
try {
  let age = Number(prompt("Enter age"));
  if (isNaN(age)) {
    throw "Invalid number";
  }
  console.log("Your Age is : " + age);
}
catch (err) {
  alert(err);
}



//Data Structures (STACK & QUEUE)
//Stack (LIFO - Last In First Out)

class Stack {
  constructor(){
    this.items = [];
  }

  push(item){
    this.items.push(item);
  }

  pop() {
    return this.items.pop();
  }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.pop()); // 2


//Queue (FIFO – First In First Out)
class Queue {
  constructor(){
     this.items = [];
  }

  enqueue(item){
    this.items.push(item);
  }

  dequeue() {
    return this.items.shift();
  }
}
let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue()); // 1


//Linked List (Dynamic Data Structure)
class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(){
    this.head = null;
  }
  append(value){
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
}

let list = new LinkedList();
list.append(10);
list.append(20);
console.log(list.head.value); // 10
console.log(list.head.next.value); // 20


//Binary Tree (Hierarchical Data Structure)
class TreeNode {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(){
    this.root = null;
  }
  insert(value){
    let newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      } 
    }
  }
}

let tree = new BinaryTree();
tree.insert(10);
tree.insert(5);
tree.insert(15);
console.log(tree.root.value); // 10
console.log(tree.root.left.value); // 5
console.log(tree.root.right.value); // 15



//FULL BROWSER GAME WITH UI
//Number Guessing Game
const secret = Math.floor(Math.random() * 5) + 1;
let attempts = 0;

doucument.getElementById("btn").addEventListener("click", () =>   {
  try{
    let value = Number(document.getElementById("guess").value);
    if(!value)
      throw "Please enter a number between 1 and 5";

    attempts++;

    if(value === secret) {
      document.getElementById("status").textContent = "You Win! Attempts: " + attempts;
    } else {
      document.getElementById("status").textContent = "Try Again!";
    }
  }
  catch(err){
    alert(err);
  } 
});