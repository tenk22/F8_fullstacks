async function displayProductDetails() {
  const productId = new URLSearchParams(window.location.search).get("id");
  const data = await fetchData();
  const product = data.products.find((p) => p.id == productId);

  if (product) {
    document.querySelector(".product-details").innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h1>${product.name}</h1>
      <p>${product.price} VND</p>
      <p>${product.description}</p>
      <button class="add-to-cart">Add to Cart</button>
    `;
  }
}

if (document.body.classList.contains("product-details")) {
  displayProductDetails();
}
