console.log(`main.js loaded...`);

// opdr. 1
const correctWord = "geheim";

while (true) {
  const userInput = prompt("Voer het raadwoord in:");

  if (userInput === correctWord) {
    alert("Je hebt de word goed geraadt");
    break;
  } else {
    alert("Niet goed geraden");
  } 
}

// opdr. 2
