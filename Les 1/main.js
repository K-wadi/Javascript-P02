/* Opdracht 1 
// Variabelen
const currentSalary = 2000;  // Huidig salaris
const salaryIncreasePercentage = 0.05;  // Salarisverhogingspercentage (5%)

// Berekening van de salarisverhoging
const salaryIncrease = currentSalary * salaryIncreasePercentage;

// Toon het resultaat op de webpagina
document.body.innerHTML += `<p>Als je €${currentSalary.toLocaleString()} verdient en je krijgt volgende maand 5% salarisverhoging, dan krijg je een verhoging van €${salaryIncrease.toLocaleString()}.</p>`;

// Opdracht 2
// Variabelen
const housePrice = 400000;  // Huisprijs
const interestRate = 0.025;  // Rentepercentage (2.5%)

// Berekening van de rente per jaar
const yearlyInterest = housePrice * interestRate;

// Toon het resultaat op de webpagina
document.body.innerHTML += `<p>Als je een huis van €${housePrice.toLocaleString()} koopt en de rente is jaarlijks 2.5%, moet je per jaar €${yearlyInterest.toLocaleString()} aan rente betalen.</p>`;

// Opdracht 3
// Variabelen
const jacketPriceExVAT = 100;  // Prijs van de jas zonder btw
const vatRate = 0.21;  // Btw-tarief (21%)

// Berekening van de prijs inclusief btw
const jacketPriceWithVAT = jacketPriceExVAT * (1 + vatRate);

// Toon het resultaat op de webpagina
document.body.innerHTML += `<p>Als je een jas koopt van €${jacketPriceExVAT.toLocaleString()} (exclusief btw) en de btw is 21%, dan is de prijs inclusief btw €${jacketPriceWithVAT.toLocaleString()}.</p>`;

// Opdracht 4
// Vraag de gebruiker om een persoonstype in te voeren
const userType = prompt("Voer een persoonstype in (Docent, Student, Directeur):");

// Controleer het ingevoerde persoonstype en geef een bericht weer in de console
if (userType && userType.toLowerCase() === "docent") {
    console.log("Jij bent een docent");
} else {
    console.log("Jij bent gek!");
}

// Opdracht 5
// Vraag de gebruiker om het bedrag in euro's in te voeren
const euroAmount = parseFloat(prompt("Voer het bedrag in euro's in:"));

// Controleer of de ingevoerde waarde een geldig getal is
if (isNaN(euroAmount)) {
    console.log("Ongeldige invoer. Voer een geldig bedrag in.");
} else {
    // Vraag de gebruiker om het type crypto in te voeren
    const cryptoType = prompt("Voer het type crypto in (BTC, ETH, XRP, DOG, SOL):").toUpperCase();

    // Converteer het bedrag naar de bijbehorende valuta
    let convertedAmount;
    switch (cryptoType) {
        case "BTC":
            convertedAmount = euroAmount * 35050;
            console.log(`Het bedrag in Bitcoin (BTC) is: ${convertedAmount.toFixed(2)} BTC`);
            break;
        case "ETH":
            convertedAmount = euroAmount * 1887;
            console.log(`Het bedrag in Ethereum (ETH) is: ${convertedAmount.toFixed(2)} ETH`);
            break;
        case "XRP":
            convertedAmount = euroAmount * 0.7;
            console.log(`Het bedrag in XRP (XRP) is: $${convertedAmount.toFixed(2)}`);
            break;
        case "DOG":
            convertedAmount = euroAmount * 0.07;
            console.log(`Het bedrag in Dogecoin (DOG) is: $${convertedAmount.toFixed(2)}`);
            break;
        case "SOL":
            convertedAmount = euroAmount * 40.26;
            console.log(`Het bedrag in Solana (SOL) is: $${convertedAmount.toFixed(2)}`);
            break;
        default:
            console.log("Onbekende cryptovaluta. Voer een geldige cryptovaluta in.");
    }
}

// Opdracht 6
// Gebruik een for loop om getallen van 0 tot 9 af te drukken
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// Weergeef "Einde programma" in de console
console.log("Einde programma");

// Opdracht 7
// Initialisatie van de teller
let counter = 0;

// Gebruik een while loop om twee zinnen 20 keer af te drukken
while (counter < 20) {
    // Controleer of we de eerste 10 iteraties hebben bereikt
    if (counter < 10) {
        console.log("Dit is zin 1.");
    } else {
        console.log("Alleen zin 1 na 10 iteraties.");
    }

    // Verhoog de teller
    counter++;
}

// Weergeef "Einde programma" in de console
console.log("Einde programma");

// Opdracht 8
// Initialisatie van de teller
let counter = 0;

// Gebruik een while loop die 20 keer zou lopen, maar na 10 keer stopt
while (counter < 20) {
    // Print "Loop" bij elke iteratie
    console.log("Loop");

    // Verhoog de teller
    counter++;

    // Controleer of we 10 iteraties hebben bereikt en stop de loop
    if (counter === 10) {
        console.log("Loop stopt na 10 keer.");
        break;
    }
}

// Weergeef "Einde programma" in de console
console.log("Einde programma");

// Opdracht 9
// Maak een array met kleuren
const colors = ["rood", "groen", "geel", "blauw", "roze"];

// Maak een HTML-lijst om de kleuren weer te geven
const colorList = document.createElement("ul");

// Voeg elke kleur toe aan de lijst
colors.forEach(color => {
    const listItem = document.createElement("li");
    listItem.textContent = color;
    colorList.appendChild(listItem);
});

// Voeg de lijst toe aan de body van de pagina
document.body.appendChild(colorList);

// Opdracht 10
// Array van muziekartiesten
const musicArtists = ["Artiest 1", "Artiest 2", "Artiest 3", "Artiest 4", "Artiest 5"];

// Verkrijg de knop en de container
const addButton = document.querySelector('button');
const artistsContainer = document.querySelector('div');

// Voeg een eventlistener toe aan de knop
addButton.addEventListener("click", function() {
    // Haal de volgende muziekartiest uit de array
    const nextArtist = musicArtists.shift();

    // Maak een nieuw div-element en voeg de muziekartiest toe
    const artistDiv = document.createElement("div");
    artistDiv.textContent = nextArtist;

    // Voeg het div-element toe aan de container
    artistsContainer.appendChild(artistDiv);
});

// Opdracht 11
// Verkrijg de input, knoppen en de lijst
const textInput = document.querySelector("input");
const addButton = document.querySelector("button:nth-of-type(1)");
const clearButton = document.querySelector("button:nth-of-type(2)");
const textList = document.querySelector("ul");

// Voeg een eventlistener toe aan de "Add" knop
addButton.addEventListener("click", function() {
    const userInput = textInput.value.trim();

    if (userInput !== "") {
        // Maak een nieuw list item en voeg de tekst toe
        const listItem = document.createElement("li");
        listItem.textContent = userInput;

        // Voeg het list item toe aan de lijst
        textList.appendChild(listItem);

        // Wis de invoer in het tekstveld
        textInput.value = "";
    }
});

// Voeg een eventlistener toe aan de "Clear" knop
clearButton.addEventListener("click", function() {
    // Verwijder alle items uit de lijst
    textList.innerHTML = "";
});

// Opdracht 12
// Definieer de functie showMessage
function showMessage(message) {
    console.log(message);
}

// Roep de functie aan met een voorbeeldbericht
showMessage("Dit is een voorbeeldbericht.");

// Opdracht 13
// Definieer de functie showSum
function showSum(num1, num2) {
    // Bereken de som van de twee getallen
    const sum = num1 + num2;

    // Print de som op de console
    console.log("De som is: " + sum);
}

// Roep de functie aan met voorbeeldgetallen
showSum(5, 3);

// Opdracht 14
// Definieer de functie showArray
function showArray(inputArray) {
    // Loop door elk element van de array en print het op de console
    for (let i = 0; i < inputArray.length; i++) {
        console.log(inputArray[i]);
    }
}

// Maak een voorbeeldarray
const exampleArray = ["rood", "groen", "geel", "blauw", "roze"];

// Roep de functie aan met de voorbeeldarray
showArray(exampleArray);

// Opdracht 15
// Definieer de functie getProduct
function getProduct(num1, num2) {
    // Bereken het product van de twee getallen en retourneer het resultaat
    return num1 * num2;
}

// Roep de functie aan met voorbeeldgetallen
const result = getProduct(4, 7);

// Print het resultaat op de console
console.log("Het product is: " + result);

// Opdracht 16
// Definieer de functie getProduct
function getProduct(num1, num2) {
    // Bereken het product van de twee getallen en retourneer het resultaat
    return num1 * num2;
}

// Roep de functie aan met voorbeeldgetallen
const result = getProduct(4, 7);

// Print het resultaat op de console
console.log("Het product is: " + result);
*/
