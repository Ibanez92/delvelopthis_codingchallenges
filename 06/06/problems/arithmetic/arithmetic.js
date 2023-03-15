const arithmetic = (num1, num2) => {
    // Your code here
   const sum = num1 + num2;
   const diff = num1 - num2;
   const product = num1 * num2;

   let quotient;
   if(num2===0) {
    quotient = 'cannot divide by 0'
   } else {
    quotient = (num1 / num2).toFixed(3)
   }
   return {sum, diff, product, quotient}
}
console.log(arithmetic(8, 0));

module.exports = arithmetic;