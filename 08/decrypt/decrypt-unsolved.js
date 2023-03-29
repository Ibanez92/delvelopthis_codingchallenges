function decrypt(cipher, key) {
    let decrypted = ""

    for (let i = 0; i < cipher.length; i++) {
        const thisLetter = cipher[i];
        if(cipher.charCodeAt(i) >= 65 && cipher.charCodeAt(i) <= 90 || cipher.charCodeAt(i) <= 122){
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