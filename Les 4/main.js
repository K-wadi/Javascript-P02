console.log(`main.js loaded...`);

// Opdracht 1 en 2
const correctWord = "programmeren";
let guessWord = "";

while (guessWord !== "quit" && guessWord !== correctWord) {
  guessWord = prompt("Raad het woord of typ 'quit' om te stoppen:");

  if (guessWord === correctWord) {
    alert("Gefeliciteerd! Je hebt het juiste woord geraden: " + correctWord);
  } else if (guessWord !== "quit") {
    alert("Helaas, probeer opnieuw.");
  }
}

if (guessWord === "quit") {
  alert("Bedankt voor het spelen. Tot de volgende keer!");
}

// Opdracht 3.
// Array van temperaturen
const temperatures = [
  3.6, 3.9, 6.5, 9.9, 13.4, 16.2, 18.3, 17.9, 14.7, 10.9, 7.0, 4.2,
];

// Array van maanden
const months = [
  "januari",
  "februari",
  "maart",
  "april",
  "mei",
  "juni",
  "juli",
  "augustus",
  "september",
  "oktober",
  "november",
  "december",
];

// Variabelen voor de warmste en koudste temperatuur
let warmestTemperature = temperatures[0];
let coldestTemperature = temperatures[0];
let warmestMonth = months[0];
let coldestMonth = months[0];

// Loop om de warmste en koudste temperatuur te vinden
for (let i = 1; i < temperatures.length; i++) {
  // Warmste temperatuur
  if (temperatures[i] > warmestTemperature) {
    warmestTemperature = temperatures[i];
    warmestMonth = months[i];
  }

  // Koudste temperatuur
  if (temperatures[i] < coldestTemperature) {
    coldestTemperature = temperatures[i];
    coldestMonth = months[i];
  }
}

// Toon resultaten in de console
console.log(
  "De warmste temperatuur is in " +
    warmestMonth +
    ": " +
    warmestTemperature +
    " graden Celsius"
);
console.log(
  "De koudste temperatuur is in " +
    coldestMonth +
    ": " +
    coldestTemperature +
    " graden Celsius"
);

// Toon temperaturen boven 10 graden
console.log("Temperaturen boven 10 graden:");
for (let i = 0; i < temperatures.length; i++) {
  if (temperatures[i] > 10) {
    console.log(months[i] + ": " + temperatures[i] + " graden Celsius");
  }
}

// Opdracht 4.
// Array van temperatuurobjecten
const temperatureObjects = [];

// Vul de array met temperatuurobjecten
for (let i = 0; i < temperatures.length; i++) {
  const temperatureObject = {
    temperature: temperatures[i],
    month: months[i],
  };
  temperatureObjects.push(temperatureObject);
}

// Toon de objecten op de webpagina
for (let i = 0; i < temperatureObjects.length; i++) {
  console.log(
    months[i] + ": " + temperatureObjects[i].temperature + " graden Celsius"
  );
}

// Opdracht 5.
// Selecteer de tabel in de HTML
const table = document.querySelector("table");

// HTML-structuur voor de tabel
let tableHTML = "<tr><th>Maand</th><th>Temperatuur</th></tr>";

// Vul de tabel met temperatuurgegevens
for (let i = 0; i < temperatureObjects.length; i++) {
  tableHTML +=
    "<tr><td>" +
    months[i] +
    "</td><td>" +
    temperatureObjects[i].temperature +
    " graden</td></tr>";
}

// Voeg de HTML toe aan de tabel
table.innerHTML = tableHTML;

// Opdracht 6.
// Functie om een card te genereren en toe te voegen aan de body
function generateCard(text) {
  // Maak een nieuwe div (card) aan met innerHTML
  document.body.innerHTML += `<div class="card">${text}</div>`;
}

// Vraag de gebruiker om tekst in te voeren via een prompt
const userInput = prompt("Voer een stukje tekst in:");

// Roep de functie aan om een card te genereren met de ingevoerde tekst
generateCard(userInput);

// Opdracht 7.
const countries = [
  { hoofdstad: "Amsterdam", land: "Nederland", inwonersaantal: 17000000 },
  { hoofdstad: "Brussel", land: "België", inwonersaantal: 11430000 },
  { hoofdstad: "Parijs", land: "Frankrijk", inwonersaantal: 67022000 },
  { hoofdstad: "Berlijn", land: "Duitsland", inwonersaantal: 83149300 },
  {
    hoofdstad: "Londen",
    land: "Verenigd Koninkrijk",
    inwonersaantal: 67886011,
  },
  { hoofdstad: "Madrid", land: "Spanje", inwonersaantal: 47329981 },
];

const cardContainer = document.querySelector(".cardContainer");

function createCard(country) {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `<p>Hoofdstad: ${country.hoofdstad}</p>
                    <p>Land: ${country.land}</p>
                    <p>Inwonersaantal: ${country.inwonersaantal}</p>`;

  cardContainer.innerHTML += card.outerHTML;
}

countries.forEach((country) => createCard(country));
