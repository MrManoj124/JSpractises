# API Reference

## SortingAnalyzer Class

### Constructor
```javascript
new SortingAnalyzer(arr)
```
- **arr**: Input array to sort
- **Initializes**: originalArray, comparisons, swaps counters

### Methods

#### quickSort(arr)
- **Params**: arr (optional, defaults to originalArray)
- **Returns**: Sorted array
- **Resets**: Comparisons and swaps counters

#### mergeSort(arr)
- **Params**: arr (optional)
- **Returns**: Sorted array
- **Uses**: _mergeSortHelper, _merge internal methods

#### selectionSort(arr)
- **Params**: arr (optional)
- **Returns**: Sorted array
- **Tracks**: Swaps between elements

#### bubbleSort(arr)
- **Params**: arr (optional)
- **Returns**: Sorted array
- **Optimized**: Early termination on sorted data

#### radixSort(arr)
- **Params**: arr (optional)
- **Returns**: Sorted array
- **Note**: Works with non-negative integers

## UI Functions

### switchTab(tabName)
- Change active tab
- **Params**: tabName (string: 'analyzer', 'results', 'recommendations')

### analyzeNumbers()
- Main analysis entry point
- Validates input
- Runs sorting algorithms
- Triggers display updates

### updateResultChart()
- Render/update chart visualization
- Uses selected chart type
- Destroys previous chart
- Creates new Chart.js instance
