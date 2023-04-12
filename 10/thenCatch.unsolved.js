//.then().catch()
function thenCatch(url) {
  return fetch(url)
  .then((response)=> response.json())
  .then((json)=>{
      return json
  })
  .catch((e)=>{
    console.error(e);
  });

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
