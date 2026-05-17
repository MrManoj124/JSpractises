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
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
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
        let i = 0;
        let j = 0;
        while(i < left.length && j < right.length){
            if(left[i] < right[j]){
                result.push(left[i]);
                i++;
            }
            else{
                result.push(right[j]);
                j++;
            }
        }
        return result.concat(left.slice(i)).concat(right.slice(j));
    }

}

// 05. Radix Sort 
// This sort is used to sort numbers by processing individual digits. It works by grouping numbers based on their digits and sorting them
// from the least significant digit to the most significant digit. It is efficient for sorting large numbers of integers and has a time complexity of 0(n * k), where n is the number of elements in the array
// and k is the number of digits in the largest number.
function radixSort(arr){
    let max = Math.max(...arr);
    let exp = 1;
    while(max / exp > 1){
        countingSort(arr, exp);
        exp *= 10;
    }
    return arr;

    function countingSort(arr, exp){
        let output = new Array(arr.length).fill(0);
        let count = new Array(10).fill(0);

        for(let i=0; i<arr.length; i++){
            count[Math.floor(arr[i] / exp) % 10] ++;
        }
        for(let i=1; i<10; i++){
            count[i] += count[i-1];
        }
        for(let i=arr.length - 1; i>=0; i--){
            output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
            count[Math.floor(arr[i] / exp) % 10]--;
        }
        for(let i=0; i<arr.length; i++){
            arr[i] = output[i];
        }
    }
}



// Check the time taken for each algorithm
function measureTime(sortFuntion, arr){
    const now = (typeof performance !== 'undefined' && performance.now) ? () => performance.now() : () => Date.now();
    let start = now();
    sortFuntion(arr);
    let end = now();
    return end - start;
}

// Generate random numbers
function generateRandomNumbers(n){
    let arr = [];
    for(let i=0; i<n; i++){
        arr.push(Math.floor(Math.random() * 1000000));
    }
    return arr;
}

// Test the sorting algorithms with different sizes of arrays
// Note: very large sizes (>=100000) may take a long time for O(n^2) sorts.
let sizes = [10, 100, 1000, 10000];

const results = {
    bubbleSort: [],
    selectionSort: [],
    quickSort: [],
    mergeSort: [],
    radixSort: []
};

for (let size of sizes){
    let arr = generateRandomNumbers(size);
    const t1 = measureTime(bubbleSort, [...arr]);
    const t2 = measureTime(selectionSort, [...arr]);
    const t3 = measureTime(quickSort, [...arr]);
    const t4 = measureTime(mergeSort, [...arr]);
    const t5 = measureTime(radixSort, [...arr]);

    results.bubbleSort.push(t1);
    results.selectionSort.push(t2);
    results.quickSort.push(t3);
    results.mergeSort.push(t4);
    results.radixSort.push(t5);

    console.log(`Time taken for Bubble Sort with ${size} elements : ${t1} ms`);
    console.log(`Time taken for Selection Sort with ${size} elements : ${t2} ms`);
    console.log(`Time taken for Quick Sort with ${size} elements : ${t3} ms`);
    console.log(`Time taken for Merge Sort with ${size} elements : ${t4} ms`);
    console.log(`Time taken for Radix Sort with ${size} elements : ${t5} ms`);
}

if (typeof document !== 'undefined' && document.getElementById && document.getElementById('myChart')){
    try{
        createBarChart(results);
    }catch(e){
        console.error('Error creating chart:', e);
    }
} else {
    console.log('Benchmark results object:', results);
}



// Get the Bar Chart for the time taken for each algorithms 
// create a bar chart using Chart.js library
// The x-axis will represent the size of the array and the y-axis will represent the time taken in milliseconds. Each algorithm will be represented by a different color bar.
function createBarChart(data){
    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
        type : 'bar',
        data : {
            labels : sizes,
            datasets : [
                {
                    label : 'Bubble Sort',
                    data : data.bubbleSort,
                    backgroundColor : 'rgba(255, 99, 132, 0.2)',
                    borderColor : 'rgba(255, 99, 132, 1)',
                    borderWidth : 1
                },
                {
                    label : 'Selection Sort',
                    data : data.selectionSort,
                    backgroundColor : 'rgba(54, 162, 235, 0.2)',
                    borderColor : 'rgba(54, 162, 235, 1)',
                    borderWidth : 1
                },
                {
                    label : 'Quick Sort',
                    data : data.quickSort,
                    backgroundColor : 'rgba(255, 206, 86, 0.2)',
                    borderColor : 'rgba(255, 206, 86, 1)',
                    borderWidth : 1
                },
                {
                    label : 'Merge Sort',
                    data : data.mergeSort,
                    backgroundColor : 'rgba(75, 192, 192, 0.2)',    
                    borderColor : 'rgba(75, 192, 192, 1)',
                    borderWidth : 1
                },
                {
                    label : 'Radix Sort',
                    data : data.radixSort,
                    backgroundColor : 'rgba(153, 102, 255, 0.2)',
                    borderColor : 'rgba(153, 102, 255, 1)',
                    borderWidth : 1
                }
            ]
        } 
    });

}


// The data object will contain the time taken for each algorithm for different sizes of arrays. The createBarChart function will be called with this data object to render the bar chart on the webpage.





















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