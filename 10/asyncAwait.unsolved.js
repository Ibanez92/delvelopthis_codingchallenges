//async/await
async function asyncAwait(url) {
}


console.log("Data handled by async/await:", asyncAwait(
  `https://jsonplaceholder.typicode.com/posts/${Math.floor(
    Math.random() * 100
  )}`
));

module.exports = asyncAwait;
