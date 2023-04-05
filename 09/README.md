# Array Methods

This folder contains a set of practice problems to help beginners learn about array methods in JavaScript.

## Instructions

To complete these practice problems, you will need to write JavaScript functions that use various array methods such as `filter()`, `map()`, and `reduce()`. Each problem has a brief description of what the function should do and which array methods should be used to solve the problem.

`npm i` to install the jest package.

Once you have written your code, you can test your functions by running the included `arrayMethods.test.js` file in a Node.js environment. To run the tests, simply type the following command in your terminal:

```npm run test -- arrayMethods.test.js```

## Problems

1. Log Square of Numbers
   > Write a function that takes an array of numbers and logs the square of each number to the console using the `forEach()` method.

2. Capitalize Strings
    >Write a function that takes an array of strings and returns a new array with all the strings capitalized. Use the `map()` method.

3. Filter Adult Objects
    >Write a function that takes an array of objects and returns a new array with only the objects that have a property called `age` greater than or equal to 18. Use the `filter()` method.

4. Names of Young People
    >Write a function that takes an array of objects representing people with `name` and `age` properties and returns a new array with only the names of people who are under the age of 30. Use the `filter()` and `map()` methods.

5. Total Characters
    >Write a function that takes an array of strings and returns the total number of characters in all the strings combined. Use the `reduce()` method.

6. Min/Max Numbers
    >Write a function that takes an array of numbers and returns the smallest and largest numbers in the array. Use the `reduce()` method with an initial value of an array `[Infinity, -Infinity]`.

7. Log Book Details 
    >Write a function that takes an array of objects representing books with `title` and `author` properties and logs a message to the console for each book in the following format: "The book `title` is written by `author`." Use the `forEach()` method.

8. Sum of Even Numbers
   >Write a function that takes an array of numbers and returns the sum of all the even numbers in the array. Use the `filter()` and `reduce()` methods.
