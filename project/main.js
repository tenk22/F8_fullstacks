const API_URL = "https://your-api-endpoint.com/products";

async function fetchProducts() {
  try {
    const response = await fetch(API_URL);
    const products = await response.json();
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

function displayProducts(products, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = products
    .map(
      (product) => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>$${product.price.toFixed(2)}</p>
                <button onclick="addToCart(${
                  product.id
                })" class="cta-button">Add to Cart</button>
            </div>
        </div>
    `
    )
    .join("");
}

function filterByCategory(products, category) {
  return products.filter((product) => product.category === category);
}

function sortProducts(products, sortBy) {
  const sortedProducts = [...products];
  switch (sortBy) {
    case "name-asc":
      return sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    case "name-desc":
      return sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
    case "price-asc":
      return sortedProducts.sort((a, b) => a.price - b.price);
    case "price-desc":
      return sortedProducts.sort((a, b) => b.price - a.price);
    default:
      return sortedProducts;
  }
}

function searchProducts(products, searchTerm) {
  return products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
}

async function initializePage() {
  const products = await fetchProducts();

  const bestSellers = products.filter((p) => p.isBestSeller);
  const newArrivals = products.filter((p) => p.isNewArrival);
  const saleItems = products.filter((p) => p.isOnSale);

  displayProducts(bestSellers, "bestSellers");
  displayProducts(newArrivals, "newArrivals");
  displayProducts(saleItems, "saleItems");
}

let cart = [];

function addToCart(productId) {
  cart.push(productId);
  updateCartDisplay();
}

function updateCartDisplay() {
  const cartIcon = document.querySelector(".fa-shopping-cart");
  if (cartIcon) {
    cartIcon.setAttribute("data-count", cart.length);
  }
}

document.addEventListener("DOMContentLoaded", initializePage);
