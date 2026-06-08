# Testing Guide

## Manual Testing Scenarios

### Test 1: Small Dataset
**Input**: 5, 2, 8, 1, 9
**Expected**: All algorithms should complete instantly
**Verify**: Quick Sort or Merge Sort should rank high

### Test 2: Random Numbers
**Input**: Generate 100 random (1-1000)
**Expected**: Performance differences visible
**Verify**: Quick Sort/Merge Sort outperform others

### Test 3: Nearly Sorted
**Input**: Use "Nearly Sorted Data" preset
**Expected**: Bubble Sort should perform better
**Verify**: Efficiency scores balanced

### Test 4: Reverse Sorted
**Input**: Use "Reverse Sorted Data" preset
**Expected**: Bubble Sort should struggle
**Verify**: Quick Sort/Merge Sort excel

### Test 5: Large Dataset
**Input**: Generate 10,000 numbers
**Expected**: Clear performance differences
**Verify**: Merge Sort most consistent

### Test 6: Duplicates
**Input**: Use "Data with Duplicates" preset
**Expected**: Radix Sort efficient
**Verify**: Compare metrics carefully

## Edge Cases

- Empty input → Show error
- Single number → All finish instantly
- Non-numeric input → Validation error
- Negative numbers → Should sort correctly
- Very large numbers → Handle correctly

## Browser Testing
- Chrome: Full support
- Firefox: Full support
- Safari: Full support
- Edge: Full support
