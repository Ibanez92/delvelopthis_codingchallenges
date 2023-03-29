const averageGrades = require('./average_grades-unsolved');

describe('averageGrades', () => {
    test('calculates average grade for each student with unique names', () => {
      const grades = [
        { name: 'Alice', grade: 85 },
        { name: 'Bob', grade: 70 },
        { name: 'Charlie', grade: 75 }
      ];
  
      const expected = { Alice: 85, Bob: 70, Charlie: 75 };
      const actual = averageGrades(grades);
      expect(actual).toEqual(expected);
    });
  
    test('calculates average grade for each student with duplicate names', () => {
      const grades = [
        { name: 'Alice', grade: 85 },
        { name: 'Bob', grade: 70 },
        { name: 'Alice', grade: 90 },
        { name: 'Bob', grade: 80 },
        { name: 'Charlie', grade: 75 }
      ];
  
      const expected = { Alice: 87.5, Bob: 75, Charlie: 75 };
      const actual = averageGrades(grades);
      expect(actual).toEqual(expected);
    });
  
    test('returns an empty object when input array is empty', () => {
      const grades = [];
  
      const expected = {};
      const actual = averageGrades(grades);
      expect(actual).toEqual(expected);
    });
  });
  