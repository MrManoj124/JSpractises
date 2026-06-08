# Feature: Predefined Datasets

## Overview
Pre-configured test datasets to quickly evaluate algorithms on various data patterns.

## Available Datasets

### 1. Small Numbers (1-100, 50 items)
- Small range for simple testing
- Good for learning

### 2. Medium Numbers (1-1000, 100 items)
- Medium range
- Typical test size

### 3. Large Numbers (1-100000, 200 items)
- Large range
- Performance testing

### 4. Nearly Sorted Data (200 items)
- Pre-sorted with random shuffling
- Tests algorithm efficiency on almost-sorted data
- Beneficial for Bubble Sort

### 5. Reverse Sorted Data (200 items)
- Completely reversed order
- Worst case for many algorithms
- Best case for some

### 6. Data with Duplicates (200 items)
- Repeated values
- Tests handling of equal elements
- Beneficial for Radix Sort

## Implementation
- `loadPredefinedDataset()` function
- Switch statement for dataset selection
- Array generation and population
