const arithmetic = (num1, num2) => {
    const sum = num1 + num2;
    const difference = num1 - num2;
    const product = num1 * num2;

    let quotient;
    if (num2 === 0) {
        quotient = 'cannot divide by zero'
    } else {
        quotient = Number((num1 / num2).toFixed(3))
    }
    return {sum, difference, product, quotient}
}
console.log(arithmetic(20, 4));

module.exports = arithmetic;
