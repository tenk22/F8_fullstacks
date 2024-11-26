// URL của JSON Server (sử dụng localhost khi chạy trên máy cục bộ)
const API_URL = "http://localhost:5000/products";

// Lấy dữ liệu sản phẩm từ JSON Server
fetch(API_URL)
  .then((response) => response.json())
  .then((products) => {
    const productList = document.getElementById("product-list");
    const searchInput = document.getElementById("search-input");

    // Hàm hiển thị sản phẩm
    function displayProducts(filteredProducts) {
      // Xóa danh sách sản phẩm hiện tại
      productList.innerHTML = "";

      // Duyệt qua danh sách sản phẩm và hiển thị ra HTML
      filteredProducts.forEach((product) => {
        const productItem = document.createElement("div");
        productItem.classList.add("product-item");

        // Tạo phần tử HTML cho mỗi sản phẩm
        productItem.innerHTML = `
          <img src="${product.image}" alt="${product.name}" class="product-image">
          <h3 class="product-name">${product.name}</h3>
          <p class="product-price">${product.price} VND</p>
          <p class="product-description">${product.description}</p>
          <button class="add-to-cart">Thêm vào giỏ</button>
        `;

        // Thêm sản phẩm vào danh sách
        productList.appendChild(productItem);
      });
    }

    // Hiển thị tất cả sản phẩm khi tải trang
    displayProducts(products);

    // Xử lý sự kiện tìm kiếm
    searchInput.addEventListener("input", function () {
      const query = searchInput.value.toLowerCase();

      // Lọc sản phẩm theo từ khóa tìm kiếm
      const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(query)
      );

      // Hiển thị sản phẩm đã lọc
      displayProducts(filteredProducts);
    });
  })
  .catch((error) => {
    console.error("Error fetching products:", error);
  });
// Lấy các phần tử của dropdown lọc và sắp xếp
const priceFilter = document.getElementById("price-filter");
const sortFilter = document.getElementById("sort-filter");

// Lọc sản phẩm theo giá
priceFilter.addEventListener("change", function () {
  const priceFilterValue = priceFilter.value;
  let filteredProducts = products;

  if (priceFilterValue == "1") {
    filteredProducts = products.filter((product) => product.price < 200000);
  } else if (priceFilterValue == "2") {
    filteredProducts = products.filter(
      (product) => product.price >= 200000 && product.price <= 500000
    );
  } else if (priceFilterValue == "3") {
    filteredProducts = products.filter((product) => product.price > 500000);
  }

  // Hiển thị sản phẩm đã lọc
  displayProducts(filteredProducts);
});

// Sắp xếp sản phẩm
sortFilter.addEventListener("change", function () {
  const sortValue = sortFilter.value;
  let sortedProducts = [...products];

  if (sortValue === "name-asc") {
    sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortValue === "name-desc") {
    sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
  } else if (sortValue === "price-asc") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortValue === "price-desc") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  // Hiển thị sản phẩm đã sắp xếp
  displayProducts(sortedProducts);
});
