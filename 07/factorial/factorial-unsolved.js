function factorial(num) {
    if(num > 0){
        if(num == 1) return 1;
        return num * factorial(num-1)
    }
    return 'no negative ints'
}

console.log(factorial(4));

module.exports = factorial;
