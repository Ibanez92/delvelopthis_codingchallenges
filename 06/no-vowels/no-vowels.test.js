const noVowels = require("./no-vowels");

describe('noVowels', () => {
  it('replaces all vowels in the input string with "x"', () => {
    expect(noVowels("Hello world!")).toBe("Hxllx wxrld!");
    expect(noVowels("I like pizza")).toBe("x lxkx pxzzx");
    expect(noVowels("The rain in Spain falls mainly on the plain")).toBe("Thx rxxn xn Spxxn fxlls mxxnlx xn thx plxxn");
  });

  it('handles empty strings correctly', () => {
    expect(noVowels("")).toBe("");
  });

  it('handles input strings with no vowels correctly', () => {
    expect(noVowels("brb")).toBe("brb");
    expect(noVowels(" 123 ")).toBe(" 123 ");
  });

  it('handles uppercase vowels correctly', () => {
    expect(noVowels("AEIOUaeiou")).toBe("xxxxxxxxxx");
  });

  it('handles special characters and whitespace correctly', () => {
    expect(noVowels("!@#$%^&*()_+")).toBe("!@#$%^&*()_+");
    expect(noVowels("   ")).toBe("   ");
    expect(noVowels("hello\nworld")).toBe("hxllx\nwxrld");
  });
});
