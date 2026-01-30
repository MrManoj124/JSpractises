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


//Binary Search (Sorted Arrays Only)
