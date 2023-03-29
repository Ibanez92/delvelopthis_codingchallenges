# Decrypt

You have been given a string that has been encrypted using a simple Caesar cipher. The cipher works by shifting each letter of the string to the right by a certain number of places (the key). Your task is to decrypt the string.

The JavaScript function decrypt(cipher, key) takes a string `cipher` and a number `key` as arguments and returns the decrypted string.

## Instructions
1. Initialize an empty string variable called decrypted that will store the decrypted string.

2. Define two helper functions called `isLowerCase` and `isUpperCase` that will take a single letter as an argument and return true or false to indicate whether the letter is upper or lower case.

3. Use a for loop to iterate through each character of the input string `cipher`.

4. Use [charCodeAt()](https://www.w3schools.com/jsref/jsref_charcodeat.asp) and [fromCharCode()](https://www.w3schools.com/jsref/jsref_fromcharcode.asp) to manipulate the letters based on the `key`.

5. If the character is not a letter (for example, punctuation or spaces), simply add it to the decrypted string.

6. After iterating through all characters, return the decrypted string.

## Examples
```
decrypt("Lzw gsv Kiltiznnvi lu ziv kvihlmvob", 10) -> "The sky above us is always blue"

decrypt("Khoor zruog", 3) -> "Hello world"

decrypt("Ebiil, tloia!", 17) -> "Hello, world!"
```

## Testing
Open your terminal and use the command `npm test -- decrypt.test.js` to run the necessary tests.