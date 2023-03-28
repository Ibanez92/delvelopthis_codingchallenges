// factorial of a number is the sum of multiplication of all the integers smaller than that positive integer. For example, factorial of 5 is 5 * 4 * 3 * 2 * 1 which equals to 120
function factorial(num) {
    if(num > 0){
        if(num == 1) return 1;
        return num * factorial(num-1)
    }
    return 'no negative ints'
}

console.log(factorial(4));

module.exports = factorial;
