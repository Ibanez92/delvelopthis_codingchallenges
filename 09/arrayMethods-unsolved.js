const sampleData = require("./sampleData");

// using forEach() method

function logSquareOfNumbers(arr) {
  arr.forEach((number) => {
    console.log(number ** 2);
  })
}

// using map() method

function capitalizeStrings(arr) {
  const newArr = arr.map((string) => {
    return string.toUpperCase();
  });
   return newArr
}

function filterAdultObjects(arr) {
  const adults = arr.filter((person) => person.age >= 18);
  return adults
}

function getNamesOfYoungPeople(arr) {
  return arr.filter((person) => person.age < 30).map((person) => person.name);
}

function totalCharacters(arr) {
  return arr.reduce((acc, word) => {
    return acc + word.length;
  }, '')
}

function minMaxNumbers(arr) {
  return arr.reduce((a, b) => { 
    return Math.min(a[0], b), Math.max(a[1], b)},
    [Infinity, -Infinity]
    );
}

function logBookDetails(arr) {
  arr.forEach((book) => {
    console.log(`The book ${book.title} is written by ${book.author}.`);
  })
}

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
