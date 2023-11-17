// Opdracht 1
const person = {
  firstName: "William",
  lastName: "Arthur",
  age: 20,
  study: "Software developer",
  score: 5,
};
console.log(person);

// Opdracht 2
const post = {
  userName: "JohnDoe123",
  title: "Een geweldige dag in het park!",
  story:
    "Vandaag heb ik genoten van een heerlijke dag in het park. Het weer was perfect, en ik heb zelfs een paar nieuwe vrienden gemaakt. 🌳☀️",
  date: "5 november 2023",
  views: 250,
};
console.log(post);

// Opdracht 3
const recipes = [
  {
    title: "Gegrilde Zalm met Citroen en Kruiden",
    description:
      "Een heerlijk recept voor gegrilde zalm gemarineerd in verse citroen, knoflook en kruiden. Gezond en smaakvol!",
    healthy: true,
  },
  {
    title: "Quinoasalade met Geroosterde Groenten",
    description:
      "Een kleurrijke quinoasalade boordevol geroosterde groenten zoals paprika, courgette en cherrytomaten. Een voedzame en vullende maaltijd!",
    healthy: true,
  },
  {
    title: "Chocolade Lava Cake",
    description:
      "Een decadent dessert dat smelt in je mond! Deze chocolade lava cake heeft een zachte kern van gesmolten chocolade. Niet zo gezond, maar oh zo lekker!",
    healthy: false,
  },
];

// Print elk recept regel voor regel in de console
recipes.forEach((recipe) => {
  console.log(`Title: ${recipe.title}`);
  console.log(`Description: ${recipe.description}`);
  console.log(`Healthy: ${recipe.healthy}`);
  console.log("------------------------"); // Scheidingsteken tussen recepten
});

// Opdracht 4
let car1 = {
  title: "Toyota Prius Hybrid",
  description:
    "Zuinige hybride auto met lage kilometerstand. Goed onderhouden en in uitstekende staat.",
  price: 12000.0,
  kilometer: 60000,
  buildDate: 2016,
};
let car2 = {
  title: "Ford Mustang GT",
  description:
    "Krachtige Ford Mustang GT met sportief design. Slechts 40.000 km gereden, bouwjaar 2019.",
  price: 35000.0,
  kilometer: 40000,
  buildDate: 2019,
};
let car3 = {
  title: "Volvo XC90 T8",
  description:
    "Luxe Volvo XC90 T8 plug-in hybride. Voorzien van alle opties en in topconditie.",
  price: 42000.0,
  kilometer: 30000,
  buildDate: 2017,
};
let car4 = {
  title: "Nissan Micra",
  description:
    "Compacte Nissan Micra, perfect voor stadsgebruik. Eerste eigenaar, goedkoop in wegenbelasting.",
  price: 8500.0,
  kilometer: 25000,
  buildDate: 2018,
};
let car5 = {
  title: "BMW X5 M50d",
  description:
    "Krachtige BMW X5 M50d met M Sport-pakket. Volledige optielijst beschikbaar. Bouwjaar 2020.",
  price: 58000.0,
  kilometer: 20000,
  buildDate: 2020,
};
console.log(car1);
console.log(car2);
console.log(car3);
console.log(car4);
console.log(car5);

// Opdracht 5
const items = [
  {
    title: "Verse Appels",
    description: "1 kg",
    action: "per kilo 1.99",
    price: 1.99,
  },
  {
    title: "Arabica Koffiebonen",
    description: "500 g",
    action: "per zak 8.49",
    price: 8.49,
  },
  {
    title: "Fluoride Tandpasta",
    description: "150 ml",
    action: "per tube 2.29",
    price: 2.29,
  },
  {
    title: "Vloeibaar Wasmiddel",
    description: "2 liter",
    action: "per fles 4.99",
    price: 4.99,
  },
  {
    title: "Goudse Kaas",
    description: "300 g",
    action: "per pak 3.79",
    price: 3.79,
  },
];

// Print elk item regel voor regel in de console
items.forEach((item) => {
  console.log(`Title: ${item.title}`);
  console.log(`Description: ${item.description}`);
  console.log(`Action: ${item.action}`);
  console.log(`Price: ${item.price}`);
  console.log("------------------------"); // Scheidingsteken tussen items
});

// Opdracht 6
let article1 = {
  title: "Krachtige Gaming Laptop",
  category: "Laptops",
  price: 1899.99,
  brand: "TechMaster",
  rating: 4.8,
};

let article2 = {
  title: "Smart 4K TV",
  category: "Televisies",
  price: 799.99,
  brand: "VisionView",
  rating: 4.5,
};

let article3 = {
  title: "Draadloze Noice-Canceling Koptelefoon",
  category: "Audio",
  price: 249.99,
  brand: "SoundSync",
  rating: 4.7,
};

let article4 = {
  title: "High-Performance Grafische Kaart",
  category: "Computeronderdelen",
  price: 499.99,
  brand: "GamerXtreme",
  rating: 4.9,
};

let article5 = {
  title: "Slimme Thuisbeveiligingscamera",
  category: "Smart Home",
  price: 129.99,
  brand: "SecureGuard",
  rating: 4.6,
};
console.log(article1);
console.log(article2);
console.log(article3);
console.log(article4);
console.log(article5);

// Opdracht 9
const container = document.querySelector(".container");
// let code = createCard();
// container.innerHTML += code;
// container.innerHTML += code;
// container.innerHTML += code;
// container.innerHTML += code;
// container.innerHTML += code;

for (let index = 0; index < recipes.length; index++) {
  const receipt = recipes[index];
  const cardCode = createCard(receipt);
  container.innerHTML += cardCode;
}

function createCard(product) {
  const card = `
  <div class="card">
        <h2>${product.title}</h2>
        <p>${product.description}</p>
        <div>
          <span>${product.healthy}</span>
        </div>
      </div>`;

  return card;
}
