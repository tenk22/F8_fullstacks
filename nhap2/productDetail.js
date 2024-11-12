document.addEventListener("DOMContentLoaded", async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get("id"), 10);

  const product = products.find((p) => p.id === productId);

  document.getElementById("productDetail").innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h1>${product.name}</h1>
      <p>Price: $${product.price}</p>
      <p>${product.description || "Product description here"}</p>
      <button class="add-to-cart">Add to Cart</button>
    `;
});
