# Algorithm Comparison Guide

## Performance Comparison Matrix

| Algorithm | Best | Average | Worst | Space | Stability | When to Use |
|-----------|------|---------|-------|-------|-----------|------------|
| Quick Sort | O(n log n) | O(n log n) | O(n²) | O(log n) | No | General purpose |
| Merge Sort | O(n log n) | O(n log n) | O(n log n) | O(n) | Yes | Consistent needed |
| Selection | O(n²) | O(n²) | O(n²) | O(1) | No | Small data |
| Bubble | O(n) | O(n²) | O(n²) | O(1) | Yes | Nearly sorted |
| Radix | O(nk) | O(nk) | O(nk) | O(n+k) | Yes | Integers |

## Detailed Comparison

### Quick Sort
- **Speed**: Fast on average
- **Memory**: Minimal
- **Stability**: Not stable
- **Best For**: General purpose sorting

### Merge Sort
- **Speed**: Consistent O(n log n)
- **Memory**: Requires O(n) extra
- **Stability**: Stable
- **Best For**: Guaranteed performance

### Selection Sort
- **Speed**: Slow O(n²)
- **Memory**: Minimal O(1)
- **Stability**: Not stable
- **Best For**: Learning only

### Bubble Sort
- **Speed**: Very slow on average
- **Memory**: Minimal O(1)
- **Stability**: Stable
- **Best For**: Nearly sorted data

### Radix Sort
- **Speed**: Fast O(nk)
- **Memory**: Linear
- **Stability**: Stable
- **Best For**: Integers only

## Decision Tree

```
START
  ↓
Performance critical?
  Yes → Merge Sort (guaranteed)
  No → Next
  ↓
Large dataset?
  Yes → Quick Sort or Merge Sort
  No → Any algorithm
  ↓
Nearly sorted?
  Yes → Bubble Sort
  No → Next
  ↓
Integer data only?
  Yes → Radix Sort
  No → Quick Sort
```

## Real-World Scenarios

### E-commerce Product Sorting
- Large datasets: Quick Sort
- Always consistent: Merge Sort
- **Recommendation**: Merge Sort

### Data Science
- Performance matters: Radix Sort (integers)
- Stability needed: Merge Sort
- **Recommendation**: Merge Sort

### Game Development
- Leaderboards: Quick Sort
- Always fast: Quick Sort
- **Recommendation**: Quick Sort

### Educational Tool
- Teaching: Any (test all!)
- Learning: Bubble/Selection first
- **Recommendation**: All five!

### Database Sorting
- Large tables: Merge Sort
- Consistency: Merge Sort
- **Recommendation**: Merge Sort
