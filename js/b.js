const contenedor = document.querySelector(".container");

function ejercicio(jsonObj) {
  const personas = jsonObj["data"];
  for (var i = 0; i < personas.length; i++) {
    const imagen = document.createElement("img");
    const nombre = document.createElement("p");
    const apellido = document.createElement("p");
    const email = document.createElement("p");

    imagen.src = personas[i].avatar;
    nombre.textContent = personas[i].first_name;
    apellido.textContent = personas[i].last_name;
    email.textContent = personas[i].email;

    contenedor.appendChild(imagen);
    contenedor.appendChild(nombre);
    contenedor.appendChild(apellido);
    contenedor.appendChild(email);
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
