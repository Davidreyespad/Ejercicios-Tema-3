let input = document.querySelector("input");

input.addEventListener("submit", function (e) {
  let id = input.value; //e.target.value

  if (id > 0 && id < 13) {
    fetch(`https://reqres.in/api/users/${id}`)
      .then((response) => response.json())
      .then((miembro) => ejercicio(miembro))
      .catch((error) => console.error("ERROR en el sistema!!!!!!!!!!" + error));
  } else {
    ponerMensaje("El id debe estar entre 1 y 12", boton);
  }
});

function ejercicio(jsonObj) {
  let usuario = jsonObj["data"];
  let contenedor = document.querySelector(".container");

  let imagen = document.createElement("img");
  let nombre = document.createElement("p");
  let apellido = document.createElement("p");
  let email = document.createElement("p");

  imagen.setAttribute("src", usuario.avatar);
  nombre.textContent("src", usuario.first_name);
  apellido.textContent("src",usuario.last_name);
  email.textContent("src", usuario.email);

  contenedor.appendChild(imagen);
  contenedor.appendChild(nombre);
  contenedor.appendChild(apellido);
  contenedor.appendChild(email);
}

const ponerMensaje = (mensaje, posicion) => {
  let p = document.createElement("p");
  p.textContent = mensaje;
  p.style.color = "red";
  posicion.insertAdjacentElement("afterend", p);
  setTimeout(() => {
    p.remove();
  }, 3000);
};
