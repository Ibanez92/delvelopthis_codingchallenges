const arithmetic = require("../../solutions/arithmetic");
describe('arithmetic', () => {
    test('returns the correct results for valid inputs', () => {
      expect(arithmetic(20, 4)).toEqual({ sum: 24, difference: 16, product: 80, quotient: 5 });
      expect(arithmetic(7, 3)).toEqual({ sum: 10, difference: 4, product: 21, quotient: 2.333 });
      expect(arithmetic(-2, 8)).toEqual({ sum: 6, difference: -10, product: -16, quotient: -0.25 });
    });
  
    test('handles division by zero correctly', () => {
      expect(arithmetic(8, 0)).toEqual({ sum: 8, difference: 8, product: 0, quotient: 'cannot divide by zero' });
    });

    test('returns the correct results for negative inputs', () => {
      expect(arithmetic(-10, -5)).toEqual({ sum: -15, difference: -5, product: 50, quotient: 2 });
      expect(arithmetic(-7, 3)).toEqual({ sum: -4, difference: -10, product: -21, quotient: -2.333 });
      expect(arithmetic(2, -8)).toEqual({ sum: -6, difference: 10, product: -16, quotient: -0.25 });
    });
  
    test('returns the correct results for large inputs', () => {
      expect(arithmetic(1000000000, 2000000000)).toEqual({ sum: 3000000000, difference: -1000000000, product: 2000000000000000000, quotient: 0.5 });
    });
  
    test('rounds the quotient to the nearest thousandth', () => {
      expect(arithmetic(7, 3)).toEqual({ sum: 10, difference: 4, product: 21, quotient: 2.333 });
      expect(arithmetic(7, 2)).toEqual({ sum: 9, difference: 5, product: 14, quotient: 3.5 });
      expect(arithmetic(10, 3)).toEqual({ sum: 13, difference: 7, product: 30, quotient: 3.333 });
    });
  });
  