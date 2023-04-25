# Arithmetic 

In this exercise, you will write a program that prompts the user for two numbers and then displays the sum, difference, product, and quotient of those numbers. If the quotient involves dividing by zero, set the quotient property to "cannot divide by zero"; otherwise, return the value with up to three decimal places.

## Examples
```
arithmetic(20, 4) ➞ { sum: 24, difference: 16, product: 80, quotient: 5 }

arithmetic(7, 3) ➞ { sum: 10, difference: 4, product: 21, quotient: 2.333}

arithmetic(8, 0) ➞ { sum: 8, difference: 8, product: 0, quotient: 'cannot divide by zero'}

```

## Testing
Open your terminal and use the command `npm test -- arithmetic.test.js` to run the necessary tests.

