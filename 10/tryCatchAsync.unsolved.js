async function tryCatchAsync (url) {

  }



console.log("Data handled by async/await:",tryCatchAsync(
  `https://jsonplaceholder.typicode.com/posts/${Math.floor(
    Math.random() * 100
  )}`
) )

module.exports = tryCatchAsync