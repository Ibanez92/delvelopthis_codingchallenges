# Array Flattening

You have been given an array that may contain other nested arrays, and your task is to write a JavaScript function that flattens the array into a single-level array.

## Instructions

1. Initialize an empty array variable called `flattened` that will store the flattened array.
2. Initialize a `stack` variable that contains a copy of the input array `arr`.
3. Use a `while` loop to iterate over the `stack` while it is not empty.
4. On each iteration of the loop, use the `pop()` method to take the last item if the stack.
5. Determine if the popped element is an array. If it is, add its contents to the `stack` using the `push()` method.
6. If it is not an array, add it to the beginning of `flattened` using the `unshift` method.
7. After iterating through all elements, return the flattened array.

## Examples
```
flattenArray([1, [2, 3], 4, [[5, 6], 7]]) -> [1, 2, 3, 4, 5, 6, 7]

flattenArray([[1, 2], [3, [4, 5]], 6]) -> [1, 2, 3, 4, 5, 6]

flattenArray([])-> []
```

## Testing
Open your terminal and use the command `npm test -- flatten_array.test.js` to run the necessary tests.