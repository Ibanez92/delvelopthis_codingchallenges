# Fizz-Buzz
Write a function that takes a number as input and returns an array of strings. The array should contain all numbers from 1 to the input number, but with the following modifications:

If the number is divisible by 3, replace it with the string "Fizz".
If the number is divisible by 5, replace it with the string "Buzz".
If the number is divisible by both 3 and 5, replace it with the string "FizzBuzz".

## Examples
```
fizzBuzz(1) ➞ ["1"]

fizzBuzz(3) ➞ ["1", "2", "Fizz"]

fizzBuzz(15) ➞ [
        "1", "2", "Fizz", "4", "Buzz",
        "Fizz", "7", "8", "Fizz", "Buzz",
        "11", "Fizz", "13", "14", "FizzBuzz"
      ]
```

## Testing
Open your terminal and use the command `npm test -- fizz-buzz.test.js` to run the necessary tests.
