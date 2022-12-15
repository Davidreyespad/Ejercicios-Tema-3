const contenedor = document.querySelector(".container");

function showHeroes(jsonObj) {
  const heroes = jsonObj["members"];
  for (var i = 0; i < heroes.length; i++) {
    const myArticle = document.createElement("article");
    const myH2 = document.createElement("h2");
    const myPara1 = document.createElement("p");
    const myPara2 = document.createElement("p");
    const myPara3 = document.createElement("p");
    const myList = document.createElement("ul");
    myH2.textContent = heroes[i].name;
    myPara1.textContent = "Secret identity: " + heroes[i].secretIdentity;
    myPara2.textContent = "Age: " + heroes[i].age;
    myPara3.textContent = "Superpowers:";
    const superPowers = heroes[i].powers;
    for (var j = 0; j < superPowers.length; j++) {
      const listItem = document.createElement("li");
      listItem.textContent = superPowers[j];
      myList.appendChild(listItem);
    }
    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myList);
  }
}

fetch("https://reqres.in/api/users?page=1")
  .then((response) => response.json())
  .then((superheroes) => {
    showHeroes(superheroes);
  })
  .catch((error) => console.error("ERROR en el sistema!!!!!!!!!!" + error));

fetch("https://reqres.in/api/users?page=2")
  .then((response) => response.json())
  .then((superheroes) => {
    showHeroes(superheroes);
  })
  .catch((error) => console.error("ERROR en el sistema!!!!!!!!!!" + error));
