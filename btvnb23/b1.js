const products = [
  { id: "1OT22W006", name: "Girls Windbreaker Jacket" },
  { id: "1OT22W009", name: "Boys T-shirt" },
  { id: "1OT22W032", name: "Boys Shirt" },
  { id: "1OT22W011", name: "Men's Super Warm Jacket" },
  { id: "1OT22W000", name: "Women's Party Dress" },
];

function searchProducts() {
  const searchString = prompt("Nhập chuỗi cần tìm kiếm:").trim().toLowerCase();

  if (!searchString) {
    document.getElementById("result").innerText =
      "Vui lòng nhập một chuỗi tìm kiếm.";
    return;
  }
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchString)
  );
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";
  if (filteredProducts.length > 0) {
    filteredProducts.forEach((product) => {
      const productInfo = document.createElement("p");
      productInfo.textContent = `ID: ${product.id}, Tên: ${product.name}`;
      resultDiv.appendChild(productInfo);
    });
  } else {
    resultDiv.innerText = "Không tìm thấy sản phẩm.";
  }
}
searchProducts();
