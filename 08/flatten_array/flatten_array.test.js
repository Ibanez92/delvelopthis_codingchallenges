const flattenArray = require('./flatten_array-unsolved');

describe('flattenArray', () => {
  it('should flatten an array with nested arrays and non-array values', () => {
    const arr = [1, [2, 3], 4, [[5, 6], 7]];
    expect(flattenArray(arr)).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  it('should flatten an array with nested arrays with different levels of nesting', () => {
    const arr = [[1, 2], [3, [4, 5]], 6];
    expect(flattenArray(arr)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('should return an empty array if the input array is empty', () => {
    const arr = [];
    expect(flattenArray(arr)).toEqual([]);
  });
  
  it('should handle non-array values in the input array', () => {
    const arr = [1, 'hello', [2, [3, 4]]];
    expect(flattenArray(arr)).toEqual([1, 'hello', 2, 3, 4]);
  });
});
