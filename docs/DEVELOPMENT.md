# Development Guide

## Code Structure Overview

### HTML (Accuracy-Analyzer.html)
- Tab-based interface structure
- Input form sections (manual, random, predefined)
- Results display areas
- Chart containers
- Recommendation display elements

### JavaScript (Accuracy-Analyzer.js)

#### SortingAnalyzer Class
Core class implementing all sorting algorithms with metrics tracking.

**Key Methods**:
- `quickSort()` - Pivot-based partitioning
- `mergeSort()` - Divide and merge
- `selectionSort()` - Minimum finding
- `bubbleSort()` - Adjacent swapping
- `radixSort()` - Digit-by-digit sorting

#### UI Functions
- `switchTab()` - Tab navigation
- `toggleInputMethod()` - Input mode switching
- `generateRandomNumbers()` - Random data generation
- `loadPredefinedDataset()` - Preset loading
- `analyzeNumbers()` - Main analysis flow
- `performAnalysis()` - Algorithm execution
- `updateResultsTab()` - Results display
- `updateRecommendationsTab()` - Recommendations

#### Utility Functions
- `calculateEfficiency()` - Scoring algorithm
- `updateResultChart()` - Chart rendering
- `exportAnalysisReport()` - CSV export

### CSS (Sorting.css)
Organized sections:
- Base styles
- Layout components
- Input styling
- Results display
- Chart containers
- Responsive breakpoints

## Adding New Algorithms

### Step 1: Implement Algorithm
```javascript
myNewSort(arr = this.originalArray) {
    this.comparisons = 0;
    this.swaps = 0;
    // Implementation
    return sorted;
}
```

### Step 2: Add to Algorithms Object
```javascript
algorithms['My Sort'] = () => analyzer.myNewSort();
```

### Step 3: Update Colors
```javascript
colors['My Sort'] = 'rgba(100, 200, 150, 0.8)';
```

### Step 4: Test
Run analysis and verify metrics.

## Modifying Metrics

### Current Efficiency Formula
```javascript
score = 100 / (1 + (time/10) + (comparisons/100) + (swaps/100))
```

To adjust:
1. Open `calculateEfficiency()` in JS
2. Modify coefficients (10, 100, 100)
3. Test impact

## Styling Customization

### Colors
Modify color values in `Sorting.css`:
- Primary: `#667eea`
- Secondary: `#764ba2`
- Success: `#28a745`
- Error: `#dc3545`

### Breakpoints
Current breakpoints:
- Desktop: > 768px
- Mobile: < 600px

## Performance Tips

### For Large Datasets
1. Reduce sample runs
2. Skip slow algorithms early
3. Use Web Workers (future)
4. Implement progressive rendering

### For Better Accuracy
1. Multiple runs
2. Average results
3. Consistent environment
4. Disable background processes

## Browser API Usage

### performance.now()
Measures execution time with microsecond precision.

### Chart.js
Version 4.4.0 loaded from CDN.
Key classes: Chart, ChartConfiguration

### Array Methods
- `Array.from()` - Array generation
- `.filter()` - Element filtering
- `.slice()` - Array copying
- `.push()` - Element adding

## Future Development

### Planned Features
- Animation visualization
- More algorithms
- Advanced statistics
- Performance benchmarks
- Offline mode

### Technical Debt
- Refactor long functions
- Add error boundaries
- Implement service worker
- Add unit tests

## Testing Checklist

- [ ] Manual input validation
- [ ] Random generation
- [ ] All presets load correctly
- [ ] Charts render properly
- [ ] Export works
- [ ] Mobile responsive
- [ ] Cross-browser tested
- [ ] Performance acceptable
