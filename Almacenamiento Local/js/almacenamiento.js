const p1 = document.querySelector("#cookie");
const p2 = document.querySelector("#localstorage");
const p3 = document.querySelector('#sessionstorage');
 
// cookies
function checkCookie() {
  let contador = getCookie("contador");
  if (contador != "") {
    contador = parseInt(contador) + 1;
    setCookie("contador", contador, 365);
    p1.textContent =
      "Cookies: Ha visitado la página " + contador + " veces";
  } else {
    contador = 0;
    if (contador !== "" && contador !== null) {
      setCookie("contador", contador, 365);
    }
  }
}
 
window.addEventListener("load", checkCookie);
 
function setCookie(cname, cvalue, exdays) {
  let d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
 
function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
 
// LocalStorage
const checkLS = () => {
  if (localStorage.getItem("contador")) {
    let cont = parseInt(localStorage.getItem("contador"));
    localStorage.setItem("contador", cont + 1);
    p2.textContent = "LocalStorage: Ha visitado la página " + cont + " veces";
  } else {
    localStorage.setItem("contador", 0);
  }
};
 
window.addEventListener("load", checkLS);
 
 
// SessionStorage
const checkSS = () => {
    if (sessionStorage.getItem("contador")) {
      let cont = parseInt(sessionStorage.getItem("contador"));
      sessionStorage.setItem("contador", cont + 1);
      p3.textContent = "SessionStorage: Ha visitado la página " + cont + " veces";
    } else {
        sessionStorage.setItem("contador", 0);
    }
  };
 
  window.addEventListener("load", checkSS);
 
 
// borrar al darle al botón
let boton = document.querySelector("#boton");
 
// borrar cookies
function deleteCookie(cname) {
  document.cookie = cname+'=; expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/';
}
 
// todos al dar al boton
const borrar = () => {
  deleteCookie("contador");
  localStorage.removeItem("contador"); // borrar local
  sessionStorage.removeItem("contador"); // borrar session
  location.reload() // cargar página al dar al boton y borrar
}
 
boton.addEventListener("click", borrar);
 
