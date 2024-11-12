document.addEventListener("DOMContentLoaded", () => {
  const API_URL = "path/to/db.json"; // Update with the actual path

  // Fetch data from db.json
  async function fetchData() {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  // Display products on Home page by category
  async function displayHomePage() {
    const data = await fetchData();
    const categories = ["Best Sellers", "On Sale", "New Arrivals"];
    categories.forEach((category) => {
      const section = document.createElement("section");
      section.classList.add("category-section");
      section.innerHTML = `<h2>${category}</h2><div class="product-list"></div>`;
      document.querySelector(".product-categories").appendChild(section);

      data.products
        .filter((p) => p.category === category)
        .forEach((product) => {
          const productCard = createProductCard(product);
          section.querySelector(".product-list").appendChild(productCard);
        });
    });
  }

  // Display products on Shop page by category and brand
  async function displayShopPage() {
    const data = await fetchData();
    const categorySelect = document.querySelector("#categoryFilter");
    const brandSelect = document.querySelector("#brandFilter");
    const productContainer = document.querySelector(".shop-product-list");

    function filterAndDisplayProducts() {
      let filteredProducts = data.products;

      const category = categorySelect.value;
      if (category) {
        filteredProducts = filteredProducts.filter(
          (p) => p.category === category
        );
      }

      const brand = brandSelect.value;
      if (brand) {
        filteredProducts = filteredProducts.filter((p) => p.brand === brand);
      }

      productContainer.innerHTML = "";
      filteredProducts.forEach((product) => {
        const productCard = createProductCard(product);
        productContainer.appendChild(productCard);
      });
    }

    categorySelect.addEventListener("change", filterAndDisplayProducts);
    brandSelect.addEventListener("change", filterAndDisplayProducts);

    filterAndDisplayProducts();
  }

  // Create product card for display
  function createProductCard(product) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price} VND</p>
        <a href="product.html?id=${product.id}">View Details</a>
      `;
    return productCard;
  }

  // Page-specific function calls
  if (document.body.classList.contains("home")) displayHomePage();
  if (document.body.classList.contains("shop")) displayShopPage();
});
