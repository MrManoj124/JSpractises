# Algorithm: Quick Sort

## Time Complexity
- **Best Case**: O(n log n)
- **Average Case**: O(n log n)
- **Worst Case**: O(n²)
- **Space Complexity**: O(log n)

## Description
Quick Sort uses a divide-and-conquer approach with a pivot element. It partitions the array into smaller subarrays and recursively sorts them.

## Implementation in Accuracy Analyzer
```javascript
function quickSort(arr) {
    if (arr.length <= 1) return arr;
    
    const pivot = arr[Math.floor(arr.length / 2)];
    const left = arr.filter(x => x < pivot);
    const middle = arr.filter(x => x === pivot);
    const right = arr.filter(x => x > pivot);
    
    return [...quickSort(left), ...middle, ...quickSort(right)];
}
```

## Performance Characteristics
- **Best For**: Large random datasets
- **Worst For**: Already sorted arrays (without optimization)
- **Space Overhead**: Moderate (due to recursion)
- **Comparison Operations**: Moderate to High

## When to Use
- General-purpose sorting
- Large datasets
- Random or partially random data
- When average-case performance matters

## Tracking Metrics
- Comparisons: Tracked in pivot selection
- Swaps: Array recreations count as swaps
- Time: Total execution time measured
