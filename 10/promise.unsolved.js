// using Promise((resolve, reject)=>{})

function sumNumbers(numbers) {
  const promise = new Promise((resolve, reject) => {
    const sum = numbers.reduce((acc, number) => acc +number, 0);

    resolve(sum)
  }).then((result) =>{
    console.log('sunNumbers result', result)
    return result
  }).catch((error) => {
    console.error('error', error);
  });

  return promise
  }
  

sumNumbers([1, 45, 33, 72, 5, 7, 4]);

  module.exports = sumNumbers