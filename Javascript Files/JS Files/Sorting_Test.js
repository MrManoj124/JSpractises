// I need to compare 5 Sorting Algorithms using 10, 100, 1000, 10000, 100000 and 1000000
// Random numbers and measure the time taken for each algorithms 

// 01. Bubble Sort
function bubbleSort(arr){
    let n = arr.length;
    for(let i=0; i<n-1; i++){
        for(let j=0; j<n-i-1; j++){
            if(arr[j] > arr[j+1]){
                // Swap arr[j] and arr[j+1]
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            } // Here we are comparing the adjacent elements and swapping them if they are in the wrong position. 
            // This process is repeated until the entire array is sorted.
        } // The outer loop runs n-1 times, and the incermenting variable i is used to keep track of the number of passed through the array.        
    } // The inner loop runs n-i-1 times, and the incrementing variable j is used to compare the adjacent elements.
    return arr;
}



// 02. Selection Sort
function selectionSort(arr){
    let n = arr.length;
    for (let i=0; i<n-1; i++){
        let minIndex = i;
        for (let j=i+1; j<n; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        // Swap arr[i] and arr[minIndex]
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] =temp;
    }
    return arr;
}

// 03. Quick Sort
function quickSort(arr){
    if(arr.length <= 1){
        return arr;
    }
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
    for(let i=0; i<arr.length - 1; i++){
        if(arr[i] < pivot){
            left.push(arr[i]);
        }
        else{
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];

}


// 04. Merge Sort
function mergeSort(arr){
    if(arr.length <= 1){
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));

    function merge(left, right){
        let result = []; 
    }

}
  



















/* 

// 03. Insertion Sort
function insertionSort(arr){
    let n = arr.length;
    for(let i=1; i<n; i++){
        let key = arr[i];
        let j = i-1;
        while(j >= 0 && arr[j] > key){
            arr[j+1] = arr[j];
            j = j-1;
        }
        arr[j+1] = key;
    }
    return arr;
}

*/