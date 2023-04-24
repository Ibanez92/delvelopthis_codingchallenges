const sampleData = require("./sampleData");

// using forEach() array method
// forEach() array method mutates original array

function logSquareOfNumbers(arr) {
  arr.forEach((number) => {
    console.log(number ** 2);
  })
}

// using map() array method
// map() array method creates a new array

function capitalizeStrings(arr) {
  const newArr = arr.map((string) => {
    return string.toUpperCase();
  });
   return newArr
}

// using filter() array method
// The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

function filterAdultObjects(arr) {
  const adults = arr.filter((person) => person.age >= 18);
  return adults
}

// using filter() array method
// The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.


function getNamesOfYoungPeople(arr) {
  return arr.filter((person) => person.age < 30).map((person) => person.name);
}

// using reduce() array method
// The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

function totalCharacters(arr) {
  return arr.reduce((acc, word) => {
    return acc + word.length;
  }, '')
}

// using reduce() array method
// The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

function minMaxNumbers(arr) {
  return arr.reduce((a, b) => { 
    return Math.min(a[0], b), Math.max(a[1], b)},
    [Infinity, -Infinity]
    );
}

// using forEach() array method
// forEach() array method mutates original array

function logBookDetails(arr) {
  arr.forEach((book) => {
    console.log(`The book ${book.title} is written by ${book.author}.`);
  })
}

// using filter() array method
// The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.


function sumOfEvenNumbers(arr) {
  return arr.filter((num) => num%2===0).reduce((acc, curr) => acc + curr, 0)
}

// ============================================================================

function runPracticeProblems(data) {
  console.log("logSquareOfNumbers:");
  logSquareOfNumbers(data.numbers);
  console.log("capitalizeStrings:", capitalizeStrings(data.strings));
  console.log("filterAdultObjects:", filterAdultObjects(data.people));
  console.log("getNamesOfYoungPeople:", getNamesOfYoungPeople(data.people));
  console.log("totalCharacters:", totalCharacters(data.strings));
  console.log("minMaxNumbers:", minMaxNumbers(data.numbers));
  console.log("sumOfEvenNumbers:", sumOfEvenNumbers(data.numbers));
  console.log("logBookDetails:");
  logBookDetails(data.books);
}

runPracticeProblems(sampleData);

module.exports = {
  logSquareOfNumbers,
  capitalizeStrings,
  filterAdultObjects,
  getNamesOfYoungPeople,
  totalCharacters,
  minMaxNumbers,
  logBookDetails,
  sumOfEvenNumbers,
};
