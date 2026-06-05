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



