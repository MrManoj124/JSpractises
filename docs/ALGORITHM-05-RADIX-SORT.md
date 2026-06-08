# Algorithm: Radix Sort

## Time Complexity
- **Best Case**: O(nk)
- **Average Case**: O(nk)
- **Worst Case**: O(nk)
- **Space Complexity**: O(n + k)

Where: n = number of elements, k = number of digits

## Description
Radix Sort sorts numbers digit by digit, using a stable sorting algorithm (like counting sort) for each digit position.

## Characteristics
- **Non-Comparative**: Doesn't compare elements
- **Linear Time**: O(nk) with small k
- **Stable Sort**: Preserves order of equal elements
- **Specialized**: Works best with integers

## When to Use
- Integer sorting
- Fixed-range numbers
- When you know the key range
- Large datasets with limited digits
- Performance is critical

## Performance Notes
- Excellent for integers with fixed digit count
- May be slower for floating-point numbers
- Space usage depends on digit range
- Highly efficient for specific data types

## Comparison with Other Algorithms
- Faster than comparison sorts for integers
- Similar to Quick Sort in practice
- Better than Merge Sort if k is small
