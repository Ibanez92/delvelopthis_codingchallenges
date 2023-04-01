const noVowels = (string) => {
    // created vowel array with uppercase and lowercase vowels
    const vowels = [
        'a',
        'e',
        'i',
        'o',
        'u',
        'y',
        'A',
        'E',
        'I',
        'O',
        'U',
        'Y'
    ]
    let newString = '';
    for (let i = 0; i < string.length; i++) {
        if (! vowels.includes(string[i])) {
            newString += string[i]
        } else {
            newString += 'x'
        }
    }
    return newString
};
console.log(noVowels("Hello world!"));
module.exports = noVowels;
