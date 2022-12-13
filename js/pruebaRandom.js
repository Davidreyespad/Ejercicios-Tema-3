fetch("https://randomuser.me/api/")
  .then((response) => response.json())
  .then((data) => console.log(data.results[0]))
  .catch((error) => console.error("Error" + error));
