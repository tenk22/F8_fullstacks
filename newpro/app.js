// URL của JSON Server
const API_URL = "http://localhost:3000";

// Hiển thị danh sách danh mục
async function loadCategories() {
  const response = await fetch(`${API_URL}/categories`);
  const categories = await response.json();

  const categoryList = document.getElementById("category-list");
  categoryList.innerHTML = categories
    .map((cat) => `<button>${cat.name}</button>`)
    .join("");
}

// Hiển thị sản phẩm mới
async function loadNewArrivals() {
  const response = await fetch(`${API_URL}/products?category=new-arrivals`);
  const products = await response.json();

  const productList = document.getElementById("product-list");
  productList.innerHTML = products
    .map(
      (product) => `
    <div class="product">
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.price} VND</p>
      <a href="product.html?id=${product.id}">View Details</a>
    </div>
  `
    )
    .join("");
}

// Chạy các hàm khi tải trang
document.addEventListener("DOMContentLoaded", () => {
  loadCategories();
  loadNewArrivals();
});
