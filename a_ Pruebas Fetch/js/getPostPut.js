/* 13-12-2022 */

        /*fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(console.log); */

        /* fetch("https://reqres.in/api/users", {
        method: "POST",
        body: JSON.stringify({ website: "eldevsin.site" })
        })
        .then(response => response.json())
        .then(console.log); */

        /* fetch("https://reqres.in/api/users", {
          method: "POST",
          body: JSON.stringify({ website: "eldevsin.site" }),
        })
          .then((response) => {
            console.log(response.status);
            return response.json();
          })
          .then(console.log)
          .catch((error) => console.error("ERROR en el sistema!!!!!!!!!!" + error)); */

        /* fetch("https://jsonplaceholder.typicode.com/todos", {
          method: "POST",
          body: JSON.stringify({
            userId: 1,
            title: "clean room",
            completed: false,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => response.json())
          .then((json) => console.log(json)); */


/* 15-12-2022 */          

/* fetch("https://jsonplaceholder.typicode.com/todos/5", {
  method: "PUT",
  body: JSON.stringify({
    userId: 1,
    id: 5,
    title: "Prueba",
    completed: false,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json)); */


/* fetch("https://jsonplaceholder.typicode.com/todos/1", {
method: "PATCH",
body: JSON.stringify({
  completed: true
}),
headers: {
"Content-type": "application/json; charset=UTF-8"
}
})
.then(response => response.json())
.then(json => console.log(json)) */

fetch("http://localhost:3000/todos/5", {
    method: "DELETE"
    })
    .then(response => response.json())
    .then(json => console.log(json))