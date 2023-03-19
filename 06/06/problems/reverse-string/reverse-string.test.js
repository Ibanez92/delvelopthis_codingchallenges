const reverseString = require("./reverse-string");

describe("reverseString function", () => {
    test("returns the reversed string for a given string input", () => {
      const inputString = "Hello, world!";
      const expectedOutput = "!dlrow ,olleH";
  
      expect(reverseString(inputString)).toEqual(expectedOutput);
    });
  
    test("returns the reversed string for a different string input", () => {
      const inputString = "abcdefg";
      const expectedOutput = "gfedcba";
  
      expect(reverseString(inputString)).toEqual(expectedOutput);
    });
  
    test("returns the reversed string for a string with spaces and capitalization", () => {
      const inputString = "JavaScript is fun";
      const expectedOutput = "nuf si tpircSavaJ";
  
      expect(reverseString(inputString)).toEqual(expectedOutput);
    });
  
    test("returns an empty string for an empty string input", () => {
      const inputString = "";
      const expectedOutput = "";
  
      expect(reverseString(inputString)).toEqual(expectedOutput);
    });
  
    test("returns the same string for a single character input", () => {
      const inputString = "a";
      const expectedOutput = "a";
  
      expect(reverseString(inputString)).toEqual(expectedOutput);
    });
  
    test("returns the reversed string for an input with non-ASCII characters", () => {
      const inputString = "こんにちは";
      const expectedOutput = "はちにんこ";
  
      expect(reverseString(inputString)).toEqual(expectedOutput);
    });
  
    test("returns the reversed string for an input with leading/trailing whitespace", () => {
      const inputString = "   hello world  ";
      const expectedOutput = "  dlrow olleh   ";
  
      expect(reverseString(inputString)).toEqual(expectedOutput);
    });
  
    test("returns the reversed string for an input with multiple spaces", () => {
      const inputString = "this is   a test";
      const expectedOutput = "tset a   si siht";
  
      expect(reverseString(inputString)).toEqual(expectedOutput);
    });
  });
  