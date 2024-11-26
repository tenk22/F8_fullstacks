const API_URL = "http://localhost:3000";

// Lấy ID sản phẩm từ URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

// Hiển thị chi tiết sản phẩm
async function loadProductDetails() {
  const response = await fetch(`${API_URL}/products/${productId}`);
  const product = await response.json();

  const productDetails = document.getElementById("product-details");
  productDetails.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h2>${product.name}</h2>
    <p>Price: ${product.price} VND</p>
    <p>Brand: ${product.brand}</p>
    <p>Category: ${product.category}</p>
    <p>${product.description}</p>
    <button id="add-to-cart">Add to Cart</button>
  `;

  document.getElementById("add-to-cart").addEventListener("click", () => {
    addToCart(product);
  });
}

// Thêm sản phẩm vào giỏ hàng
function addToCart(product) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existingProduct = cart.find((item) => item.id === product.id);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    product.quantity = 1;
    cart.push(product);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart!");
}

document.addEventListener("DOMContentLoaded", () => {
  loadProductDetails();
});
