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
