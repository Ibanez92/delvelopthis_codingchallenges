function isPalindrome(str) {

  const strArray = str.split("")
  if(strArray.join("") === strArray.reverse().join("")){
    return 'true'
  } else return 'false'

}

console.log(isPalindrome('A man, a plan, a canal: Panama'))

module.exports = isPalindrome