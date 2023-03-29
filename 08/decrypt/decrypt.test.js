const decrypt = require('./decrypt-unsolved');

describe('decrypt', () => {
  it('should decrypt a lowercase cipher string with a positive key', () => {
    expect(decrypt('ddggmrkq', 3)).toEqual('aaddjohn');
  });

  it('should decrypt a mixed case cipher string with a negative key', () => {
    expect(decrypt('CjccnCipfe', -7)).toEqual('JqjjuJpwml');
  });

  it('should decrypt a lowercase cipher string with a key greater than 26', () => {
    expect(decrypt('dro pvyyb sc dy lo kd dro lyddyw', 36)).toEqual('the floor is to be at the bottom');
  });
  
  it('should not decrypt non-letter characters', () => {
    expect(decrypt('Khoor, wklv', 3)).toEqual('Hello, this');
  });
});
