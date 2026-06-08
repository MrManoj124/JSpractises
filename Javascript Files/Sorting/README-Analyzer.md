# Sorting Algorithm Accuracy Analyzer - User Guide

## 📋 Overview

The **Sorting Algorithm Accuracy Analyzer** is a new feature added to the Sorting Algorithms Performance Analysis project. It allows you to test sorting algorithms with your own custom numbers and discover which sorting method performs best for your specific dataset.

## 🚀 Features

### 1. **Multiple Input Methods**
   - **Manual Input**: Enter comma-separated numbers directly
   - **Random Generation**: Generate random numbers with custom count and range
   - **Predefined Datasets**: Choose from 6 pre-configured datasets:
     - Small Numbers (1-100, 50 items)
     - Medium Numbers (1-1000, 100 items)
     - Large Numbers (1-100000, 200 items)
     - Nearly Sorted Data (200 items with some shuffled)
     - Reverse Sorted Data (200 items, descending)
     - Data with Duplicates (200 items with repeated values)

### 2. **Comprehensive Performance Analysis**
   Analyzes 5 sorting algorithms:
   - ✨ Quick Sort
   - ✨ Merge Sort
   - ✨ Selection Sort
   - ✨ Bubble Sort
   - ✨ Radix Sort

### 3. **Detailed Metrics**
   - **Execution Time**: Milliseconds taken to complete sorting
   - **Comparisons**: Total number of element comparisons
   - **Swaps**: Total number of element swaps/movements
   - **Efficiency Score**: 0-100% based on overall performance

### 4. **Visual Results**
   - Bar charts for easy comparison
   - Line charts for trend visualization
   - Radar charts for multi-metric comparison
   - Real-time performance graphs

### 5. **Smart Recommendations**
   - Automatic ranking of algorithms
   - Detailed explanation of why the best algorithm won
   - Comparison bars showing relative performance

## 📖 How to Use

### Step 1: Access the Accuracy Analyzer
Open the file: `Accuracy-Analyzer.html` in your web browser

### Step 2: Enter Your Numbers
Choose one of three input methods:

**Option A: Manual Entry**
```
5, 2, 8, 1, 9, 3, 7
```
Just type or paste comma-separated numbers.

**Option B: Random Generation**
1. Select "Generate Random Numbers" mode
2. Enter the count of numbers (10-10000)
3. Enter maximum value
4. Click "Generate Random Numbers"

**Option C: Predefined Dataset**
1. Select "Use Predefined Dataset" mode
2. Choose a dataset from the dropdown
3. Numbers are automatically loaded

### Step 3: Run Analysis
Click **"🚀 Analyze My Numbers"** button

The analyzer will:
- Validate your input
- Sort your data using all 5 algorithms
- Track performance metrics
- Generate visualizations

### Step 4: Review Results
Three tabs show your results:

#### 📊 Results Tab
- Detailed performance table
- Execution time for each algorithm
- Comparison and swap counts
- Efficiency scores
- Multiple chart views

#### 📈 Analysis Details
- Dataset statistics (size, min, max, average)
- Individual algorithm metrics
- Comparative visualization

#### 🏆 Recommendations Tab
- **Best Method**: Top-performing algorithm for your data
- **Ranking**: All 5 algorithms ranked by speed
- **Performance Comparison**: Visual bars comparing times
- **Detailed Analysis**: Explanation of why the best method won

### Step 5: Export Results
Click **"📥 Export Report (CSV)"** to download results as a CSV file for external analysis.

## 📊 Understanding the Results

### Execution Time
- **Lower is better**: Measured in milliseconds (ms)
- Determines primary ranking

### Comparisons
- Number of times elements are compared during sorting
- Lower usually means better efficiency

### Swaps
- Number of times elements are moved/swapped
- Indicates algorithm intensity
- Some algorithms minimize swaps

### Efficiency Score (0-100%)
- Composite metric based on:
  - Execution time
  - Number of comparisons
  - Number of swaps
- **Higher scores indicate better overall performance**

## 🎯 Examples

### Example 1: Small Sorted Numbers
**Input**: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
**Best Method**: Bubble Sort (detects sorted data quickly)

### Example 2: Large Random Numbers
**Input**: Use "Generate Random Numbers" with 1000 items, max 100000
**Best Method**: Quick Sort or Merge Sort (excellent for large datasets)

### Example 3: Data with Duplicates
**Input**: Use "Data with Duplicates" predefined dataset
**Best Method**: Radix Sort (excels with repeated values)

### Example 4: Reverse Sorted Data
**Input**: Use "Reverse Sorted Data" predefined dataset
**Best Method**: Merge Sort (consistent performance regardless of input order)

## 🔍 Algorithm Overview

### Quick Sort
- **Best For**: Large random datasets
- **Average Case**: O(n log n)
- **Worst Case**: O(n²) - rare with good pivot selection

### Merge Sort
- **Best For**: Guaranteed consistency, nearly-sorted data
- **Always**: O(n log n)
- **Trade-off**: Requires extra memory O(n)

### Selection Sort
- **Best For**: Small datasets only
- **Always**: O(n²)
- **Advantage**: Minimal memory, predictable

### Bubble Sort
- **Best For**: Nearly-sorted data, educational purposes
- **Average Case**: O(n²)
- **Advantage**: Can detect sorted data early

### Radix Sort
- **Best For**: Integer data, specific ranges
- **Always**: O(nk) where k = number of digits
- **Advantage**: Non-comparison based sorting

## 💡 Tips for Best Results

1. **Test Multiple Datasets**: Different data patterns suit different algorithms
2. **Check All Metrics**: Don't just look at execution time
3. **Use Realistic Data**: Test with data similar to your actual use case
4. **Export Results**: Keep records for documentation and analysis
5. **Compare Modes**: Try different chart types (bar, line, radar)

## ⚙️ Technical Details

### Browser Requirements
- Modern browser with Canvas support
- JavaScript enabled
- Chart.js library (loaded via CDN)

### Input Constraints
- **Maximum numbers**: 10,000
- **Number range**: Any positive or negative decimal
- **Format**: Comma or space separated

### Performance
- Real-time analysis under 100ms for typical datasets
- Larger datasets may take longer (100ms - 1 second for 10k numbers)

## 🐛 Troubleshooting

### Issue: "No valid numbers found"
- **Solution**: Check that numbers are comma or space separated
- Ensure no extra characters except digits and separators

### Issue: Numbers not loading
- **Solution**: Try copying/pasting the numbers into the textarea
- Use the random generation or predefined datasets

### Issue: Analysis taking too long
- **Solution**: Reduce the number of elements
- Browser tabs running lots of scripts may slow things down

### Issue: Charts not displaying
- **Solution**: Ensure JavaScript is enabled
- Try refreshing the page
- Check browser console for errors

## 📁 File Structure

```
Sorting/
├── Accuracy-Analyzer.html    (Main page)
├── Accuracy-Analyzer.js      (Algorithm implementations & logic)
├── Sorting.css               (Shared styling)
└── README-Analyzer.md        (This file)
```

## 🔗 Related Files

- **Original Sorting Analysis**: `Sorting.html` - Compare fixed dataset performance
- **Styling**: `Sorting.css` - Consistent design across all pages

## 📝 Version History

- **v1.0** (Initial Release)
  - 5 sorting algorithms
  - 3 input methods
  - Comprehensive metrics
  - Chart visualizations
  - Export functionality

## 👨‍💻 Development Notes

### How Metrics Are Calculated

1. **Execution Time**: `performance.now()` before and after sorting
2. **Comparisons**: Incremented during comparison operations
3. **Swaps**: Incremented when elements are exchanged
4. **Efficiency Score**: Formula: `100 / (1 + (time/10) + (comparisons/100) + (swaps/100))`

### Adding New Algorithms

To add a new sorting algorithm:
1. Create method in `SortingAnalyzer` class
2. Track comparisons and swaps manually
3. Add to algorithms object
4. Update visualization colors

### Customizing Predefined Datasets

Edit the `loadPredefinedDataset()` function in `Accuracy-Analyzer.js` to add new datasets.

## 🎓 Educational Value

This tool is excellent for:
- Learning sorting algorithm characteristics
- Understanding performance trade-offs
- Algorithm analysis and comparison
- Data structure study
- Computer science education

## 📚 Additional Resources

- [Big O Notation Guide](https://www.bigocheatsheet.com/)
- [Sorting Algorithm Visualizations](https://www.cs.usfca.edu/~galles/visualization/Algorithms.html)
- [MDN Performance API](https://developer.mozilla.org/en-US/docs/Web/API/Performance)

---

**Happy Sorting! 🚀**

For questions or suggestions, refer to the main project documentation.
