// created a function called fizzbuzz
function fizzBuzz(num) {
    // created an empty array for my strings/result of conditionals to go into 
    const array = [] 
    // looped through the number input starting at 1
    for (let i = 1; i <= num; i++) {
        // if number is divisable by 15 then push the string 'FizzBuzz' into the array
        if(i % 15 ===0){
            array.push("FizzBuzz")
            // else if number is divisable by 3 then push the string "Fizz" into the array
        } else if (i % 3 === 0){
            array.push("Fizz")
            // else if number is divisable by 5 then push string "Buzz" into the array
        } else if (i % 5 === 0){
            array.push("Buzz")
            // else no number is divisable by the conditionals set then just add the number input as a string intp the array as a string
        } else array.push(i.toString())
    }
    return array
}

console.log(fizzBuzz(15));

module.exports = fizzBuzz;