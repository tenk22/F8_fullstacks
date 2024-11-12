const categories = [
  { id: 1, name: "Shirts", image: "img/cate-1.jpg" },
  { id: 2, name: "Bottoms", image: "img/cate-2.png" },
  { id: 3, name: "Outerwear", image: "img/cate-3.png" },
  { id: 4, name: "Knits", image: "img/cate-4.png" },
  { id: 5, name: "Accessories", image: "img/cate-5.png" },
  { id: 6, name: "Footwear", image: "img/cate-6.png" },
];

const products = [
  {
    id: 1,
    category: "Knits",
    name: "Wool Sweater",
    price: 89.99,
    image: "img/cate-4.png",
  },
  {
    id: 2,
    category: "Knits",
    name: "Cotton Shirt",
    price: 49.99,
    image: "img/cate-1.jpg",
  },
  {
    id: 3,
    category: "Shirts",
    name: "Classic Cotton Shirt",
    price: 49.99,
    image: "img/cate-1.jpg",
  },
  {
    id: 4,
    category: "Outerwear",
    name: "Denim Jacket",
    price: 119.99,
    image: "img/cate-3.png",
  },
];

// Render categories
function displayCategories() {
  const categoryList = document.getElementById("categoryList");
  categoryList.innerHTML = categories
    .map(
      (cat) => `
        <div class="category-item">
          <img src="${cat.image}" alt="${cat.name}">
          <h3>${cat.name}</h3>
        </div>
      `
    )
    .join("");
}

// Render products
function displayProducts(productListId, filterFn) {
  const productList = document.getElementById(productListId);
  productList.innerHTML = products
    .filter(filterFn)
    .map(
      (p) => `
        <div class="product-item" onclick="openProductDetail(${p.id})">
          <img src="${p.image}" alt="${p.name}">
          <h3>${p.name}</h3>
          <p>$${p.price}</p>
        </div>
      `
    )
    .join("");
}

// Open product detail page
function openProductDetail(productId) {
  window.location.href = `productDetail.html?id=${productId}`;
}

document.addEventListener("DOMContentLoaded", () => {
  displayCategories();
  displayProducts("featuredProducts", () => true);
});
