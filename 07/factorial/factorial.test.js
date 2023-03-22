const factorial = require ('./factorial-unsolved')

describe("factorial", function() {
    it("returns 1 for input 1", function() {
      expect(factorial(1)).toEqual(1);
    });
    it("returns the correct result for inputs 2 through 5", function() {
      expect(factorial(2)).toEqual(2);
      expect(factorial(3)).toEqual(6);
      expect(factorial(4)).toEqual(24);
      expect(factorial(5)).toEqual(120);
    });
    it("returns an error message for input less than 1", function() {
      expect(factorial(0)).toEqual("Error: input must be between 1 and 20");
      expect(factorial(-1)).toEqual("Error: input must be between 1 and 20");
    });
    it("returns an error message for input greater than 20", function() {
      expect(factorial(21)).toEqual("Error: input must be between 1 and 20");
      expect(factorial(100)).toEqual("Error: input must be between 1 and 20");
    });
  });
  