# Feature: Random Number Generation

## Overview
Users can generate random numbers with configurable count and range for quick testing without manual entry.

## Implementation Details

### Configuration Options
- Number Count: 10 to 10,000 items
- Maximum Value: Any positive number
- Random distribution: Uniform distribution

### Generation Process
- Create array of specified size
- Generate random integers 1 to max value
- Display statistics
- Load into input field

### Benefits
- Quick dataset creation
- No manual typing required
- Various size testing
- Configurable range

## Example
```
Count: 100
Max Value: 1000
Output: [345, 123, 987, 456, ...]
```

## Code Function
- `generateRandomNumbers()` - Generate and display
- `Math.random()` - Random value generation
