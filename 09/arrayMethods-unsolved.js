const sampleData = require("./sampleData");

function logSquareOfNumbers(arr) {
  //   your code here
}

function capitalizeStrings(arr) {
  //   your code here
}

function filterAdultObjects(arr) {
  //   your code here
}

function getNamesOfYoungPeople(arr) {
  //   your code here
}

function totalCharacters(arr) {
  //   your code here
}

function minMaxNumbers(arr) {
  //   your code here
}

function logBookDetails(arr) {
  //   your code here
}

function sumOfEvenNumbers(arr) {
  //   your code here
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
