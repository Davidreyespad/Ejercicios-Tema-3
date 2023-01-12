import STRIPE_KEYS from "./stripe-keys.js";

const d = document,
  $camisetas = d.getElementById("camisetas"),
  $template = d.getElementById("camiseta-template").content,
  $fragment = d.createDocumentFragment(),
  fetchOptions = {
    headers: {
      Authorization: `Bearer ${STRIPE_KEYS.secret}`, //pide vadilacion llave secreta
    },
  };

let products, prices; //variasbles vacías para guardar peticiones fetch

const moneyFormat = (num) => `${num.slice(0, -2)},${num.slice(-2)} €`; //pasar el dinero a nuestro formato

//para consultar varios endpoints, no tener que hacerlo 1 por 1
Promise.all([
  fetch("https://api.stripe.com/v1/products", fetchOptions),
  fetch("https://api.stripe.com/v1/prices", fetchOptions),
])
  .then((responses) => Promise.all(responses.map((res) => res.json()))) //recibimos todas las respuestas y por cada una creamos un nuevo array
  .then((json) => {
    products = json[0].data; //en products guardamos lo que viene en la posicion 0 del json 
    prices = json[1].data; //en prices guardamos lo que viene en la posicion 1 del json

    prices.forEach((el) => { //por cada elemento del array precios
      let productData = products.filter((product) => product.id === el.product); //extraemos datos del producto donde el id === el

      $template.querySelector(".camiseta").setAttribute("data-price", el.id);
      $template.querySelector("img").src = productData[0].images[0]; //ruta donde esta la imagen
      $template.querySelector("img").alt = productData[0].name; //ruta donde esta el nombre del producto 
      $template.querySelector("figcaption").innerHTML = `
       ${productData[0].name}
       <br>
       ${moneyFormat(el.unit_amount_decimal)} ${el.currency}
      `;

      let $clone = d.importNode($template, true); //clon donde se importa el nodo con todo lo que tiene dentro

      $fragment.appendChild($clone); 
    });

    $camisetas.appendChild($fragment); 
  })
  .catch((err) => {
    console.log(err);
    let message =
      err.status.Text || "Ocurrió un error al conectarse con la API de Stripe";
    $camisetas.innerHTML = `<p>Error ${err.status}: ${message} </p>`;
  });

d.addEventListener("click", (e) => {
  if (e.target.matches(".camiseta *")) { //todo dentro de .camiseta
    let price = e.target.parentElement.getAttribute("data-price");
    Stripe(STRIPE_KEYS.public) //elemento Stripe necesita la llave pú blica
      .redirectToCheckout({
        lineItems: [{ price, quantity: 1 }], //array donde establecemos un objeto, que tiene un parametro que recibe el precio y otro que recibe cuantos queremos cobrarle (1)
        mode: "payment", //pago único
        successUrl:
          "http://127.0.0.1:5500/practica-ajax-1/assets/stripe-success.html",
        cancelUrl:
          "http://127.0.0.1:5500/practica-ajax-1/assets/stripe-cancel.html",
      })
      .then((res) => {
        console.log(res);
        if (res.error) {
          $camisetas.insertAdjacentHTML("afterend", res.error.message);
        }
      });
  }
});
