// 1 - Tester le lien de l'API dans le navigateur (https://restcountries.com/v3.1/all)

let flag = [];
const coutryContainer = document.querySelector(".countries-container");
const input = document.getElementById("inputSearch");
const inputRange = document.getElementById("inputRange");
const inputRangeContainer = document.getElementById("rangeValue");
const minToMax = document.getElementById("minToMax");
const maxToMin = document.getElementById("maxToMin");
const alpha = document.getElementById("alpha");

inputRange.addEventListener("change", () => {
  if (inputRange.value) {
    inputRangeContainer.textContent = inputRange.value;
  }
});

const produitCarte = async () => {
  let url = "https://restcountries.com/v3.1/name/" + `${input.value}`;
  console.log(url);

  await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      flag = data;
      console.log(flag);
      flag.slice(0, inputRange.value);


    // Cette partie ducode sert a ranger par ordre croissant par popultion les pays trouvé par la recherche 
      maxToMin.addEventListener("click", () => {
        // La mmethode slice sert a filtrer le nombre de pays rechercher (entre 0 et le nombre de l'input range)
        // La methode sort sert faire un nouvelle array en fonction du filitre choisis, ici la population 
        coutryContainer.innerHTML = flag.slice(0, inputRange.value).sort((a, b) => a.population - b.population).map((data) =>
              `
   <article class="pays">
  <img src=${data.flags.png} alt="drapeau du ${data.name.common}">
  <h2> ${data.name.common}</h2>
  <h3> ${data.population}<h3>
   </article>
   `
          );
        console.log(maxToMin);
      });


    //   Cette partie du code sert a ranger par odre croissant par population les pays trouvé par la recherche 

      minToMax.addEventListener("click", () => {
        coutryContainer.innerHTML = flag.slice(0, inputRange.value).sort((a, b) => b.population - a.population).map((data) =>
              `
           <article class="pays">
          <img src=${data.flags.png} alt="drapeau du ${data.name.common}">
          <h2> ${data.name.common}</h2>
          <h3> ${data.population}<h3>
           </article>
           `
          );
        console.log(maxToMin);
      });

    // Cette parrie du code sert a ranger par ordre aplkabétique les pays trouvé par la recherche 

    alpha.addEventListener("click", () => {
        // localcompare sert a comparé des string 
        coutryContainer.innerHTML = flag.slice(0, inputRange.value).sort((a, b) => a.name.common.localeCompare(b.name.common)).map((data) =>
              `
           <article class="pays">
          <img src=${data.flags.png} alt="drapeau du ${data.name.common}">
          <h2> ${data.name.common}</h2>
          <h3> ${data.population}<h3>
           </article>
           `
          );
        console.log(alpha);
      });

      console.log(flag.slice(0, inputRange.value));
      coutryContainer.innerHTML = flag.slice(0, inputRange.value).map(
        (data) =>
          `
       <article class="pays">
      <img src=${data.flags.png} alt="drapeau du ${data.name.common}">
      <h2> ${data.name.common}</h2>
      <h3> ${data.population}<h3>
       </article>
       `
      );
    })
    .catch((error) => {
      console.error("Erreur lors de la récupération des données :", error);
      coutryContainer.innerHTML = `<h2>Erreur lors de la récupération des données</h2>`;
    });
};

document.addEventListener("keydown", (e) => {
  if (input.value === "") {
    coutryContainer.textContent = `Le champ est vide`;
  } else if (e.key === "Enter") {
    produitCarte();
  }
});

// 2 - Créer une fonction pour "fetcher" les données, afficher les données dans la console.

// 3 - Passer les données à une variable

// 4 - Créer une fonction d'affichage, et paramétrer l'affichage des cartes de chaque pays grace à la méthode MAP

// 5 - Récupérer ce qui est tapé dans l'input et filtrer (avant le map) les données
// coutry.name.includes(inputSearch.value);

// 6 - Avec la méthode Slice gérer le nombre de pays affichés (inputRange.value)

// 7 - Gérer les 3 boutons pour trier (méthode sort()) les pays
