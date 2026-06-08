# Feature: Performance Metrics Display

## Overview
Display detailed performance metrics for each sorting algorithm in a structured table format.

## Metrics Tracked

### 1. Execution Time (ms)
- Measured using performance.now()
- Start time before sorting
- End time after completion
- Difference calculated in milliseconds

### 2. Comparisons Count
- Incremented each time elements are compared
- Different for each algorithm
- Indicates operation intensity

### 3. Swaps Count
- Incremented when elements are swapped/moved
- Some algorithms minimize swaps
- Some algorithms use many swaps

### 4. Efficiency Score (0-100%)
- Composite metric
- Based on time, comparisons, and swaps
- Higher is better
- Formula: 100 / (1 + (time/10) + (comp/100) + (swap/100))

## Implementation
- `SortingAnalyzer` class tracks all metrics
- Table dynamically updates
- Color-coded efficiency scores
- Real-time calculations
