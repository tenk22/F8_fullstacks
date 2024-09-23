const products = [
  { id: "1OT22W006", name: "Girls Windbreaker Jacket" },
  { id: "1OT22W009", name: "Boys T-shirt" },
  { id: "1OT22W032", name: "Boys Shirt" },
  { id: "1OT22W011", name: "Men's Super Warm Jacket" },
  { id: "1OT22W000", name: "Women's Party Dress" },
];
const searchString = prompt("Nhập chuỗi cần tìm kiếm:").toLowerCase();
const filteredProducts = products.filter((product) =>
  product.name.toLowerCase().includes(searchString)
);
if (filteredProducts.length > 0) {
  console.log("Các sản phẩm tìm được:");
  filteredProducts.forEach((product) => console.log(product));
} else {
  console.log("Không tìm thấy sản phẩm nào.");
}
