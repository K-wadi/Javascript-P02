console.log(`main.js is running...`);

const ul = document.querySelector("ul");

fetch("https://pokeapi.co/api/v2/pokemon/?limit=10")
.then((response) => response.json())
.then((data) => {
    const results = data.results;

for (let i = 0; i < results.length; i++) {
    const element = results[i];
    ul.innerHTML += `<li>${element.name}</li>`;
}
});