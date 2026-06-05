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

        