const API_URL = "http://localhost:3000";

async function loadFilters() {
  // Load categories
  const categoryResponse = await fetch(`${API_URL}/categories`);
  const categories = await categoryResponse.json();
  const categoryFilter = document.getElementById("category-filter");
  categories.forEach((cat) => {
    const option = document.createElement("option");
    option.value = cat.name;
    option.textContent = cat.name;
    categoryFilter.appendChild(option);
  });

  // Load brands
  const brandResponse = await fetch(`${API_URL}/brands`);
  const brands = await brandResponse.json();
  const brandFilter = document.getElementById("brand-filter");
  brands.forEach((brand) => {
    const option = document.createElement("option");
    option.value = brand.name;
    option.textContent = brand.name;
    brandFilter.appendChild(option);
  });
}

async function loadProducts(filters = {}) {
  let url = `${API_URL}/products?`;

  if (filters.category) url += `category=${filters.category}&`;
  if (filters.brand) url += `brand=${filters.brand}&`;
  if (filters.minPrice) url += `price_gte=${filters.minPrice}&`;
  if (filters.maxPrice) url += `price_lte=${filters.maxPrice}&`;

  const response = await fetch(url);
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

// Apply filters
document.getElementById("apply-filters").addEventListener("click", () => {
  const category = document.getElementById("category-filter").value;
  const brand = document.getElementById("brand-filter").value;
  const minPrice = document.getElementById("price-min").value;
  const maxPrice = document.getElementById("price-max").value;

  loadProducts({ category, brand, minPrice, maxPrice });
});

document.addEventListener("DOMContentLoaded", () => {
  loadFilters();
  loadProducts();
});
