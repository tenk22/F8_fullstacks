const apiUrl = "http://localhost:3000/products";

const loadProducts = async () => {
  const response = await fetch(apiUrl);
  const products = await response.json();
  const productList = document.getElementById("product-list");

  productList.innerHTML = products
    .map(
      (product) => `
      <tr>
        <td>${product.id}</td>
        <td>${product.title}</td>
        <td>${product.price}</td>
        <td>
          <button class="remove" onclick="deleteProduct(${product.id})">Remove</button>
          <button class="update">Update</button>
        </td>
      </tr>
    `
    )
    .join("");
};

const deleteProduct = async (id) => {
  if (confirm("Are you sure you want to delete this product?")) {
    await fetch(`${apiUrl}/${id}`, { method: "DELETE" });
    loadProducts();
  }
};

// Load products on page load
document.addEventListener("DOMContentLoaded", loadProducts);
