// This file explain the sorting methods performance in JavaScript
// Tab switching
    function switchTab(tabName) {
        const tabs = document.querySelectorAll('.tab');
        const contents = document.querySelectorAll('.tab-content');
        
        tabs.forEach(tab => tab.classList.remove('active'));
        contents.forEach(content => content.classList.remove('active'));
        
        event.target.classList.add('active');
        document.getElementById(tabName).classList.add('active');
    }

    // Sorting Algorithms Implementation
        
        function quickSort(arr) {
            if (arr.length <= 1) return arr;
            
            const pivot = arr[Math.floor(arr.length / 2)];
            const left = arr.filter(x => x < pivot);
            const middle = arr.filter(x => x === pivot);
            const right = arr.filter(x => x > pivot);
            
            return [...quickSort(left), ...middle, ...quickSort(right)];
        }

        function mergeSort(arr) {
            if (arr.length <= 1) return arr;
            
            const mid = Math.floor(arr.length / 2);
            const left = mergeSort(arr.slice(0, mid));
            const right = mergeSort(arr.slice(mid));
            
            return merge(left, right);
        }

        function merge(left, right) {
            let result = [];
            let i = 0, j = 0;
            
            while (i < left.length && j < right.length) {
                if (left[i] < right[j]) {
                    result.push(left[i++]);
                } else {
                    result.push(right[j++]);
                }
            }
            
            return [...result, ...left.slice(i), ...right.slice(j)];
        }

        function selectionSort(arr) {
            const n = arr.length;
            const sorted = [...arr];
            
            for (let i = 0; i < n - 1; i++) {
                let minIdx = i;
                for (let j = i + 1; j < n; j++) {
                    if (sorted[j] < sorted[minIdx]) {
                        minIdx = j;
                    }
                }
                [sorted[i], sorted[minIdx]] = [sorted[minIdx], sorted[i]];
            }
            
            return sorted;
        }

        function bubbleSort(arr) {
            const n = arr.length;
            const sorted = [...arr];
            
            for (let i = 0; i < n - 1; i++) {
                let swapped = false;
                for (let j = 0; j < n - i - 1; j++) {
                    if (sorted[j] > sorted[j + 1]) {
                        [sorted[j], sorted[j + 1]] = [sorted[j + 1], sorted[j]];
                        swapped = true;
                    }
                }
                if (!swapped) break;
            }
            
            return sorted;
        }

        function radixSort(arr) {
            const max = Math.max(...arr);
            const maxDigits = max.toString().length;
            
            let sorted = [...arr];
            
            for (let k = 0; k < maxDigits; k++) {
                const buckets = Array.from({ length: 10 }, () => []);
                
                for (let num of sorted) {
                    const digit = Math.floor(num / Math.pow(10, k)) % 10;
                    buckets[digit].push(num);
                }
                
                sorted = buckets.flat();
            }
            
            return sorted;
        }

        // Generate random array
        function generateRandomArray(size) {
            return Array.from({ length: size }, () => Math.floor(Math.random() * 1000000));
        }

        // Measure execution time
        function measureTime(sortFunc, arr) {
            const start = performance.now();
            sortFunc([...arr]);
            const end = performance.now();
            return end - start;
        }

        // Define Global variables 
        // Global variables
        let chart = null;
        let results = {};
        const sizes = [10, 100, 1000, 10000, 100000, 1000000];
        const algorithms = {
            'Quick Sort': quickSort,
            'Merge Sort': mergeSort,
            'Selection Sort': selectionSort,
            'Bubble Sort': bubbleSort,
            'Radix Sort': radixSort
        };


        // Run analysis
        async function runAnalysis() {
            const runBtn = document.getElementById('runBtn');
            runBtn.disabled = true;
            
            const statusDiv = document.getElementById('status');
            statusDiv.className = 'status running';
            statusDiv.textContent = 'Running analysis... Please wait...';
            
            results = {};
            
            for (let algo in algorithms) {
                results[algo] = [];
                
                for (let size of sizes) {
                    // Skip slow algorithms for large datasets
                    if ((algo === 'Selection Sort' || algo === 'Bubble Sort') && size > 10000) {
                        results[algo].push(null);
                        continue;
                    }
                    
                    const testArray = generateRandomArray(size);
                    
                    // Run multiple times and take average
                    let totalTime = 0;
                    const runs = size <= 1000 ? 5 : (size <= 10000 ? 3 : 1);
                    
                    for (let i = 0; i < runs; i++) {
                        totalTime += measureTime(algorithms[algo], testArray);
                        await new Promise(resolve => setTimeout(resolve, 0)); // Allow UI update
                    }
                    
                    const avgTime = totalTime / runs;
                    results[algo].push(avgTime);
                }
            }
            
            updateTable();
            updateChart();
            
            statusDiv.className = 'status complete';
            statusDiv.textContent = '✓ Analysis complete!';
            runBtn.disabled = false;
        }

        // Update table
        function updateTable() {
            const tbody = document.getElementById('tableBody');
            tbody.innerHTML = '';
            
            for (let algo in results) {
                const row = document.createElement('tr');
                row.innerHTML = `<td><strong>${algo}</strong></td>`;
                
                results[algo].forEach(time => {
                    const td = document.createElement('td');
                    if (time === null) {
                        td.textContent = 'N/A';
                        td.style.color = '#999';
                    } else {
                        td.textContent = time.toFixed(2);
                    }
                    row.appendChild(td);
                });
                
                tbody.appendChild(row);
            }
        }
