console.log(`main.js is running...`);

const ul = document.querySelector(".productList");

fetch("https://dummyjson.com/products")
  .then((response) => response.json())
  .then((data) => {
    const products = data.products;

    for (let i = 0; i < products.length; i++) {
      const element = products[i];
      ul.innerHTML += createCard(element);
    }
  });

function createCard(product) {
  const {
    id,
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    thumbnail,
    images,
  } = product;

  const code = `
    <div class="card">
      <img src="${thumbnail}" alt="${title}" class="card-img">
      <div class="card-body">
        <h2 class="card-title">${title}</h2>
        <p class="card-info">${description}</p>
        <p class="card-price">$${price}</p>
        <p class="card-discount">${discountPercentage}% Discount</p>
        <p class="card-rating">Rating: ${rating}</p>
        <p class="card-stock">Stock: ${stock}</p>
        <p class="card-brand">Brand: ${brand}</p>
        <p class="card-category">Category: ${category}</p>
      </div>
    </div>
  `;

  return code;
}