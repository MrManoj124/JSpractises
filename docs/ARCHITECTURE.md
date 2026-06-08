# Architecture Overview

## Project Structure

```
Javascript Files/Sorting/
├── index.html                    # Navigation hub
├── Accuracy-Analyzer.html        # Main application
├── Accuracy-Analyzer.js          # Core logic
├── Sorting.html                  # Original tool
├── Sorting.js                    # Original algorithms
└── Sorting.css                   # Shared styling
```

## Component Hierarchy

### Frontend Layers
1. **HTML Structure** (Accuracy-Analyzer.html)
   - Input section with form controls
   - Results section with tables
   - Recommendations section with rankings

2. **JavaScript Logic** (Accuracy-Analyzer.js)
   - SortingAnalyzer class
   - UI event handlers
   - Chart management
   - Data processing

3. **Styling** (Sorting.css)
   - Responsive layout
   - Component styling
   - Mobile adaptations

## Data Flow

1. User enters/generates numbers
2. Input validation occurs
3. Sorting algorithms execute
4. Metrics collected
5. Results displayed in charts/tables
6. Recommendations calculated
7. Export option available

## Technology Stack
- HTML5: Structure
- CSS3: Styling with Grid/Flexbox
- JavaScript ES6+: Logic
- Chart.js: Visualization
