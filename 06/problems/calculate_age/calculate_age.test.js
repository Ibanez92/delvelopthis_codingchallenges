const calculateAge = require("./calculate_age");
// const calculateAge = require('../../solutions/calculate_age');

describe("calculateAge function", () => {
  test("returns age in years for a given birth date string", () => {
    const birthdayString = "1990-03-01";
    const expectedAge = 33;

    expect(calculateAge(birthdayString)).toBe(expectedAge);
  });

  test("returns age in years for a different birth date string", () => {
    const birthdayString = "2000-01-01";
    const expectedAge = 23;

    expect(calculateAge(birthdayString)).toBe(expectedAge);
  });

  test("throws an error for an invalid birth date string", () => {
    expect(() => {
      calculateAge("2000-01-01-01");
    }).toThrow("Invalid date string");
  });

  test("calculates age accurately for birth dates later than current date", () => {
    const birthdayString = "2050-01-01";
    const expectedAge = -27;

    expect(calculateAge(birthdayString)).toBe(expectedAge);
  });
});
