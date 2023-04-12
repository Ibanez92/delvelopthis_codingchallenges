//.then().catch()
function thenCatch(url) {

}


console.log(
  "Data handled by then/catch",
  thenCatch(
    `https://jsonplaceholder.typicode.com/posts/${Math.floor(
      Math.random() * 100
    )}`
  )
);

module.exports = thenCatch;
