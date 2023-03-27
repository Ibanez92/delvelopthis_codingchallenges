// created a function called fizzbuzz
function fizzBuzz(num) {
    // created an empty array for my answer to go into 
    const array = [] 
    // looped through the number input starting at 1
    for (let i = 1; i <= num; i++) {
        // if number is divisable by 15 then push the string 'FizzBuzz' into the array
        if(i % 15 ===0){
            array.push("FizzBuzz")
        } else if (i % 3 === 0){
            array.push("Fizz")
        } else if (i % 5 === 0){
            array.push("Buzz")
        } else array.push(i.toString())
    }
    return array
}

console.log(fizzBuzz(15));

module.exports = fizzBuzz;