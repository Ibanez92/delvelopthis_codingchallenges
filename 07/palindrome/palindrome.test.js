const isPalindrome = require("./palindrome-unsolved.js");

describe("isPalindrome", function() {
    it("returns true for a single letter", function() {
      expect(isPalindrome("a")).toBe(true);
    });
    it("returns true for a palindrome with even number of letters", function() {
      expect(isPalindrome("abba")).toBe(true);
      expect(isPalindrome("racecar")).toBe(true);
      expect(isPalindrome("deified")).toBe(true);
    });
    it("returns true for a palindrome with odd number of letters", function() {
      expect(isPalindrome("aba")).toBe(true);
      expect(isPalindrome("radar")).toBe(true);
      expect(isPalindrome("level")).toBe(true);
    });
    it("returns false for a non-palindrome", function() {
      expect(isPalindrome("hello")).toBe(false);
      expect(isPalindrome("world")).toBe(false);
      expect(isPalindrome("javascript")).toBe(false);
    });
    it("ignores non-alphanumeric characters", function() {
      expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
      expect(isPalindrome("Was it a car or a cat I saw?")).toBe(true);
    });
  });
  