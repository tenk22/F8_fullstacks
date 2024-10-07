const cart = [
  { id: 1, name: "T-Shirt", price: 100000, quantity: 2, hotSale: false },
  { id: 2, name: "Jean", price: 200000, quantity: 1, hotSale: false },
  { id: 3, name: "Skirt", price: 150000, quantity: 3, hotSale: true },
  { id: 4, name: "Shirt", price: 120000, quantity: 2, hotSale: false },
  { id: 5, name: "Jacket", price: 250000, quantity: 1, hotSale: true },
];
function renderOrder(cart) {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  const headers = ["Tên sản phẩm", "Đơn giá", "Số lượng", "Thành tiền"];
  headers.forEach((headerText) => {
    const th = document.createElement("th");
    th.textContent = headerText;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);
  const tbody = document.createElement("tbody");
  let totalPrice = 0;
  cart.forEach((item) => {
    const row = document.createElement("tr");
    const totalItemPrice = item.price * item.quantity;
    const nameCell = document.createElement("td");
    nameCell.textContent = item.name;
    const priceCell = document.createElement("td");
    priceCell.textContent = item.price;
    const quantityCell = document.createElement("td");
    quantityCell.textContent = item.quantity;
    const totalCell = document.createElement("td");
    totalCell.textContent = totalItemPrice;
    if (item.hotSale) {
      nameCell.style.color = "red";
    }
    row.appendChild(nameCell);
    row.appendChild(priceCell);
    row.appendChild(quantityCell);
    row.appendChild(totalCell);
    tbody.appendChild(row);
    totalPrice += totalItemPrice;
  });
  table.appendChild(tbody);
  const tfoot = document.createElement("tfoot");
  const footerRow = document.createElement("tr");
  const totalLabelCell = document.createElement("td");
  totalLabelCell.textContent = "Tổng tiền";
  totalLabelCell.colSpan = 3;
  const totalValueCell = document.createElement("td");
  totalValueCell.textContent = totalPrice;
  footerRow.appendChild(totalLabelCell);
  footerRow.appendChild(totalValueCell);
  tfoot.appendChild(footerRow);
  table.appendChild(tfoot);
  document.body.appendChild(table);
}
renderOrder(cart);
