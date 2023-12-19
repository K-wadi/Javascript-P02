console.log("main.js is loaded...");

//Opdr 1.

// Array met bitcoinwaarden
const bitcoinValues = [40604, 40648, 38275, 30386, 39445, 39121, 38494];

// Array met datums
const dates = [
  "11 dec",
  "12 dec",
  "13 dec",
  "14 dec",
  "15 dec",
  "16 dec",
  "17 dec",
];

// Initialiseren van variabelen voor het gemiddelde, hoogste en laagste waarden
let average = 0;
let highValue = bitcoinValues[0];
let lowestValue = bitcoinValues[0];

// Bereken gemiddelde, hoogste en laagste waarden met een for-loop
for (let i = 0; i < bitcoinValues.length; i++) {
  average += bitcoinValues[i];

  if (bitcoinValues[i] > highValue) {
    highValue = bitcoinValues[i];
  }

  if (bitcoinValues[i] < lowestValue) {
    lowestValue = bitcoinValues[i];
  }
}

// Bereken het daadwerkelijke gemiddelde na de for-loop
average /= bitcoinValues.length;

// Toon de resultaten
console.log("Gemiddelde bitcoinwaarde: €" + average);
console.log("Hoogste bitcoinwaarde: €" + highValue);
console.log("Laagste bitcoinwaarde: €" + lowestValue);
console.log("--------------------------------------");

//Opdr 2.
// Array beroepen met startsalaris in euro's
const professions = [
  { name: "Aptheker", salary: 3450 },
  { name: "Automonteur", salary: 2000 },
  { name: "Bouwvakker", salary: 1650 },
  { name: "Electricien ", salary: 2200 },
  { name: "Kinderopvang ", salary: 1890 },
  { name: "Metselaar ", salary: 2400 },
  { name: "Timmerman ", salary: 2300 },
];

// Initialiseer variabelen voor totaal, gemiddeld, beste en slechtste salaris
let totalSalary = 0;
let averageSalary = 0;
let bestProfession = professions[0];
let worstProfession = professions[0];

// Bereken het totaal en vind het beste en slechtste beroep met een voorloop
for (let i = 0; i < professions.length; i++) {
  totalSalary += professions[i].salary;

  if (professions[i].salary > bestProfession.salary) {
    bestProfession = professions[i];
  }

  if (professions[i].salary < worstProfession.salary) {
    worstProfession = professions[i];
  }
}

// Bereken het gemiddelde na de for-loop
averageSalary = totalSalary / professions.length;

// Geef de resultaten weer in console.log ()
console.log("Totaal salaris van alle beroepen: €" + totalSalary);
console.log("Gemiddeld salaris: €" + averageSalary);
console.log(
  "Best betaald beroep: " +
    bestProfession.name +
    " with salary €" +
    bestProfession.salary
);
console.log(
  "Minst betaald beroep: " +
    worstProfession.name +
    " with salary €" +
    worstProfession.salary
);

//Opdr 3.
document.addEventListener("DOMContentLoaded", function () {
  const usernameInput = document.querySelector(".usernameInput");
  const emailInput = document.querySelector(".emailInput");
  const sendButton = document.querySelector(".sendButton");

  sendButton.addEventListener("click", function () {
    // Controleer de lengte van de gebruikersnaam
    if (usernameInput.value.length < 3) {
      usernameInput.style.border = "2px solid red";
    } else {
      usernameInput.style.border = "2px solid green";
    }

    // Controleer of e -mail niet leeg is
    if (emailInput.value === "") {
      emailInput.style.border = "2px solid red";
    } else {
      emailInput.style.border = "2px solid green";
    }
  });
});

//Opdr 4.
const ul = document.querySelector(".productList");

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => {
    const products = data;

    for (let i = 0; i < products.length; i++) {
      const element = products[i];
      ul.innerHTML += createCard(element);
    }
  });

function createCard(product) {
  const { title, description, price, image } = product;

  const code = `
    <div class="card">
      <img src="${image}" alt="${title}" class="card-img">
      <div class="card-body">
        <h2 class="card-title">${title}</h2>
        <p class="card-info">${description}</p>
        <p class="card-price">$${price}</p>
      </div>
    </div>
  `;

  return code;
}
