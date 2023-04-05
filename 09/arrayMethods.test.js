const {
  logSquareOfNumbers,
  capitalizeStrings,
  filterAdultObjects,
  getNamesOfYoungPeople,
  totalCharacters,
  minMaxNumbers,
  logBookDetails,
  sumOfEvenNumbers,
} = require("./arrayMethods-unsolved");

describe("Array method practice problems", () => {
  describe("sumOfEvenNumbers", () => {
    it("should return the sum of all even numbers in an array", () => {
      expect(sumOfEvenNumbers([1, 2, 3, 4, 5, 6])).toBe(12);
      expect(sumOfEvenNumbers([1, 3, 5])).toBe(0);
      expect(sumOfEvenNumbers([2, 4, 6])).toBe(12);
    });
  });

  describe("capitalizeStrings", () => {
    it("should return a new array with all strings capitalized", () => {
      expect(capitalizeStrings(["hello", "world"])).toEqual(["HELLO", "WORLD"]);
      expect(capitalizeStrings(["foo", "bar", "baz"])).toEqual([
        "FOO",
        "BAR",
        "BAZ",
      ]);
    });
  });

  describe("filterAdultObjects", () => {
    it("should return a new array with objects that have an age property of 18 or greater", () => {
      expect(
        filterAdultObjects([
          { name: "Alice", age: 25 },
          { name: "Bob", age: 16 },
          { name: "Charlie", age: 30 },
        ])
      ).toEqual([
        { name: "Alice", age: 25 },
        { name: "Charlie", age: 30 },
      ]);
    });
  });

  describe("minMaxNumbers", () => {
    it("should return an array with the smallest and largest numbers in an array", () => {
      expect(minMaxNumbers([1, 2, 3, 4, 5, 6])).toEqual([1, 6]);
      expect(minMaxNumbers([5])).toEqual([5, 5]);
    });
  });

  describe("totalCharacters", () => {
    it("should return the total number of characters in an array of strings", () => {
      expect(totalCharacters(["hello", "world"])).toBe(10);
      expect(totalCharacters(["foo", "bar", "baz"])).toBe(9);
    });
  });

  describe("getNamesOfYoungPeople", () => {
    it("should return an array with the names of people under the age of 30", () => {
      expect(
        getNamesOfYoungPeople([
          { name: "Alice", age: 25 },
          { name: "Bob", age: 16 },
          { name: "Charlie", age: 30 },
        ])
      ).toEqual(["Alice", "Bob"]);
    });
  });

  describe("logSquareOfNumbers", () => {
    it("should log the square of each number to the console", () => {
      const spy = jest.spyOn(console, "log").mockImplementation();
      logSquareOfNumbers([1, 2, 3, 4, 5]);
      expect(spy).toHaveBeenCalledTimes(5);
      expect(spy.mock.calls).toEqual([[1], [4], [9], [16], [25]]);
      spy.mockRestore();
    });
  });

  describe("logBookDetails", () => {
    it("should log a message to the console for each book", () => {
      const spy = jest.spyOn(console, "log").mockImplementation();
      const books = [
        { title: "The Lord of the Rings", author: "J.R.R. Tolkien" },
        {
          title: "Harry Potter and the Philosopher's Stone",
          author: "J.K. Rowling",
        },
        { title: "The Hobbit", author: "J.R.R. Tolkien" },
      ];
      logBookDetails(books);
      expect(spy).toHaveBeenCalledTimes(3);
      expect(spy.mock.calls).toEqual([
        ["The book The Lord of the Rings is written by J.R.R. Tolkien."],
        [
          "The book Harry Potter and the Philosopher's Stone is written by J.K. Rowling.",
        ],
        ["The book The Hobbit is written by J.R.R. Tolkien."],
      ]);
      spy.mockRestore();
    });
  });
});
