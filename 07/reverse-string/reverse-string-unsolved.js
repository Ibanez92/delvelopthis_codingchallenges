const reverseString = (string) => {
  return string.split('').reverse().join('');
};

console.log(reverseString("Hello, world!"))

module.exports = reverseString;
