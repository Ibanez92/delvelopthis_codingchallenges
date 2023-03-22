const fizzBuzz = require('./fizz-buzz-unsolved')

describe("fizzBuzz", function() {
    it("returns an array of length 1 for input 1", function() {
      expect(fizzBuzz(1)).toEqual(["1"]);
    });
    it("returns the correct array for input 3", function() {
      expect(fizzBuzz(3)).toEqual(["1", "2", "Fizz"]);
    });
    it("returns the correct array for input 5", function() {
      expect(fizzBuzz(5)).toEqual(["1", "2", "Fizz", "4", "Buzz"]);
    });
    it("returns the correct array for input 15", function() {
      expect(fizzBuzz(15)).toEqual([
        "1", "2", "Fizz", "4", "Buzz",
        "Fizz", "7", "8", "Fizz", "Buzz",
        "11", "Fizz", "13", "14", "FizzBuzz"
      ]);
    });
  });
  