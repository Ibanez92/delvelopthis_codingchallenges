# Week 10 - Async and error handling

In this lesson, you'll be gradually introduced to new concepts, starting with basic error handling using try-catch, followed by Promises and their error handling, and concluding with the more modern async-await syntax combined with try-catch for comprehensive error handling.

## tryCatchSync

This function demonstrates the basic use of try-catch for error handling in synchronous code. It takes a JSON string as input and attempts to parse it into a JavaScript object using JSON.parse(). If the input is not a valid JSON string, JSON.parse() will throw a SyntaxError. The try-catch block is used to handle this error by catching the exception and logging it to the console. If the input is valid, the function logs the parsed object to the console and returns it.

### Key concepts

- The purpose of try-catch blocks
  >Try-catch blocks are used in error handling to isolate code that might throw exceptions and provide a way to gracefully handle those exceptions. They prevent the program from crashing when an exception is encountered.
- Handling errors in synchronous code
  >In synchronous code, the execution flow is linear, and the program moves from one statement to the next in order. When an error occurs, the program can be halted, leading to undesirable results. Using try-catch blocks in synchronous code helps manage errors by catching exceptions and executing specified error-handling code, ensuring that the program can continue running despite the error.
- The use of JSON.parse() and the possible exceptions it can throw
  >The JSON.parse() method is used to convert a JSON string into a JavaScript object. It can throw a SyntaxError if the input string is not a valid JSON format. By using a try-catch block around JSON.parse(), developers can handle invalid JSON input gracefully without crashing the program and provide informative error messages.

---

## thenCatch

This function demonstrates the use of Promises and their methods for handling success and error cases in asynchronous code. The fetch() function is used to make an HTTP request to a given URL and returns a Promise. The function uses the .then() method to handle the successful resolution of the Promise and the .catch() method to handle any errors that may occur during the HTTP request or the parsing of the response.

### Key concepts

- Introduction to Promises and asynchronous code
  >Promises are a way to manage asynchronous operations in JavaScript. They represent the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises provide a more organized and readable way to handle asynchronous code compared to callback functions.
- Using fetch() to make HTTP requests
  >The fetch() function is a modern, built-in method for making HTTP requests in JavaScript. It returns a Promise that resolves with the Response object representing the response to the request. This makes it convenient to use with other Promise-based methods like .then() and .catch() for handling the response.
- Handling resolved promises with .then()
  >The .then() method is used to attach callbacks that execute when a Promise is resolved (fulfilled). It allows you to chain multiple callbacks, each receiving the result of the previous callback as an argument. This provides a clean and organized way to handle the results of asynchronous operations.
- Handling rejected promises with .catch()
   >The .catch() method is used to attach callbacks that execute when a Promise is rejected. This allows you to handle errors that may occur during the execution of an asynchronous operation. Using .catch() helps ensure that errors are handled gracefully, preventing the program from crashing and providing informative error messages.

---

## sumNumbers (promise.unsolved.js)

This function demonstrates how to create a custom Promise using the `new Promise` constructor. The function takes an array of numbers as input and returns a Promise that resolves to the sum of the numbers in the array. If the input is not an array, the Promise is rejected with an error message. The .then() and .catch() methods are used to handle the resolution and rejection of the Promise, respectively.

### Key concepts

- Creating custom Promises using the new Promise constructor
   >The new Promise constructor allows you to create a custom Promise by defining its executor function. The executor function takes two arguments, resolve and reject, which are callback functions used to fulfill or reject the Promise. This enables you to create Promises that are tailored to your specific use case.
- Resolving and rejecting Promises based on specific conditions
  >When creating a custom Promise, you can determine the conditions under which the Promise should be resolved or rejected. In the sumNumbers function, the Promise is resolved if the input is an array and the sum of its elements is calculated. If the input is not an array, the Promise is rejected with an appropriate error message.
- Handling resolved and rejected promises using .then() and .catch()
  >Once you have created a custom Promise, you can handle its resolution or rejection using the .then() and .catch() methods. The .then() method is used to attach callbacks that execute when the Promise is resolved, while the .catch() method is used to attach callbacks that execute when the Promise is rejected. This enables you to organize your code and handle different outcomes of your asynchronous operation in a clean and readable manner.

---

## asyncAwait

This function introduces the async-await syntax, which provides a more concise and readable way to work with Promises in asynchronous code. The function is declared with the async keyword, which enables the use of the await keyword within the function. The fetch() function is used to make an HTTP request, and the await keyword is used to wait for the Promise to resolve before continuing the execution. If the response is successful, the function logs the data to the console and returns it.

### Key concepts

- The async keyword for declaring asynchronous functions
  >The async keyword is used to define a function as asynchronous. An async function always returns a Promise, whether it's explicitly returned or not. Inside an async function, you can use the await keyword to wait for Promises to resolve before continuing the execution, which simplifies the handling of asynchronous code.
- The await keyword for waiting for Promises to resolve
  >The await keyword can only be used inside an async function and allows you to pause the execution of the function until a Promise is resolved. This makes it easier to work with Promises in a more linear and synchronous-looking manner, reducing the complexity of managing asynchronous operations.
- The benefits of using async-await for more readable asynchronous code
  >Using async-await syntax offers several benefits, including more readable and maintainable code. With async-await, you can write asynchronous code that looks and behaves more like synchronous code, which simplifies understanding and debugging. It also helps reduce the complexity of handling multiple asynchronous operations, as you can use familiar control structures like loops and conditionals, making the code easier to follow.

---

## tryCatchAsync

This function combines the concepts of try-catch and async-await to demonstrate how to handle errors in an asynchronous function. The function is declared with the async keyword, and the try-catch block is used to handle any errors that may occur during the execution of the asynchronous code. If the fetch request fails, or the response is not OK, the function throws an error that is caught by the catch block.

### Key concepts

- Combining try-catch and async-await for error handling in asynchronous code
  >The tryCatchAsync function demonstrates how to use try-catch blocks within an async function for error handling. By combining these two concepts, you can handle errors in a more structured and linear manner, making the code easier to read and maintain.
- Throwing and catching errors in an asynchronous context
  >In an async function, you can throw errors using the throw keyword, similar to synchronous code. When an error is thrown inside a try block, the execution jumps to the corresponding catch block, allowing you to handle the error gracefully. This applies to both synchronous errors and errors occurring as a result of asynchronous operations, such as failed fetch requests.
- The importance of error handling in real-world applications
  >Proper error handling is crucial in real-world applications to ensure a smooth user experience and prevent unexpected crashes. By using try-catch and async-await together, developers can handle various types of errors that may occur during the execution of asynchronous code, provide informative error messages, and ensure that the application continues to function despite encountered errors.

---

## Testing

Once you have written your code, you can test your functions by running the included `week10.test.js` file in a Node.js environment. To run the tests, simply type the following command in your terminal:

```npm run test -- week10.test.js```

## Bonus example

The function below uses `new Promise()` to mimic the functionality of `fetch()`.

```
    function thenCatch(url) {
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.responseType = 'json';

        xhr.onload = () => {
          if (xhr.status >= 200 && xhr.status < 300) {
            resolve(xhr.response);
          } else {
            reject(new Error(`Request failed with status: ${xhr.status}`));
          }
        };

        xhr.onerror = () => {
          reject(new Error('Network error'));
        };

        xhr.send();
      })
        .then((json) => console.log("Data handled by then/catch", json))
        .catch((error) => {
          console.error("There was an error fetching the data:", error);
        });
    }
```
