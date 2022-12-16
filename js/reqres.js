const contenedor = document.querySelector(".container");

function ejercicio(jsonObj) {
  const personas = jsonObj["data"];
  for (var i = 0; i < personas.length; i++) {
    const imagen = document.createElement("img");
    const parrafo = document.createElement("p");

    parrafo.textContent = personas[i].first_name;
    imagen.src= personas[i].avatar;
    
    contenedor.appendChild(imagen);
    contenedor.appendChild(parrafo);
  }
}

fetch("https://reqres.in/api/users?page=1")
  .then((response) => response.json())
  .then((users) => {
    ejercicio(users);
  })
  .catch((error) => console.error("ERROR en el sistema!!!!!!!!!!" + error));

fetch("https://reqres.in/api/users?page=2")
  .then((response) => response.json())
  .then((users) => {
    ejercicio(users);
  })
  .catch((error) => console.error("ERROR en el sistema!!!!!!!!!!" + error));
