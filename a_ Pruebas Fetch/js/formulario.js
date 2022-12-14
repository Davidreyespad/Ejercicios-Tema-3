const url = "https://formsubmit.co/ajax/mmarrui1802@iesmartinezm.es";
const form = document.querySelector(".miFormulario");
const post = (url, body) => fetch(url, { method: "POST", body });
form.addEventListener("submit", function (ev) {
  ev.preventDefault(); //para no actualizar la página
  const data = new FormData(form);
  post(url, data)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("ERROR" + error));
});
