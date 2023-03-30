function decrypt(cipher, key) { // created decrypted variable to hold my decrypted string
    let decrypted = ""

    // loop through the cipher string
    for (let i = 0; i < cipher.length; i++) { // letter on the cipher string
        const thisLetter = cipher[i];
        // if cipher string is greater than the character code at(ascii) 90 or cipher string is less than or equal to 122
        if (cipher.charCodeAt(i) >= 65 && cipher.charCodeAt(i) <= 90 || cipher.charCodeAt(i) <= 122) { // create newLetter variable holding the cipher string minus the key
            let newLetter = cipher.charCodeAt(i) - key

            decrypted += String.fromCharCode(newLetter)
        } else {
            decrypted += thisLetter
        }
    }
    return decrypted
}

console.log(decrypt("Khoor zruog", 3));

module.exports = decrypt
