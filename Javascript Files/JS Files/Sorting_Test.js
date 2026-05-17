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



