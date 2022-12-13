/* fetch('https://jsonplaceholder.typicode.com/todos')
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

fetch("https://jsonplaceholder.typicode.com/todos", {
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
  .then((json) => console.log(json));
