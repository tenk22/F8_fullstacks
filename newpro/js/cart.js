// Lấy danh sách sản phẩm từ localStorage
function loadCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  if (cart.length === 0) {
    cartItems.innerHTML = "<p>Your cart is empty.</p>";
    cartTotal.textContent = "0";
    return;
  }

  // Hiển thị sản phẩm
  let total = 0;
  cartItems.innerHTML = cart
    .map(
      (item, index) => `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.name}">
          <div>
            <h4>${item.name}</h4>
            <p>Price: ${item.price} VND</p>
            <p>Quantity: ${item.quantity}</p>
            <button class="remove-btn" data-index="${index}">Remove</button>
          </div>
        </div>
      `
    )
    .join("");

  // Tính tổng tiền
  cart.forEach((item) => {
    total += item.price * item.quantity;
  });
  cartTotal.textContent = total;

  // Gắn sự kiện xóa sản phẩm
  document.querySelectorAll(".remove-btn").forEach((button) => {
    button.addEventListener("click", (e) => {
      const index = e.target.getAttribute("data-index");
      removeFromCart(index);
    });
  });
}

// Xóa sản phẩm khỏi giỏ hàng
function removeFromCart(index) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1); // Xóa sản phẩm theo chỉ mục
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart(); // Cập nhật giao diện giỏ hàng
}

// Xử lý khi bấm nút "Checkout"
document.getElementById("checkout-btn").addEventListener("click", () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart.length === 0) {
    alert("Your cart is empty.");
    return;
  }

  alert("Thank you for your purchase!");
  localStorage.removeItem("cart"); // Xóa giỏ hàng sau khi thanh toán
  loadCart(); // Làm trống giao diện giỏ hàng
});

// Load giỏ hàng khi tải trang
document.addEventListener("DOMContentLoaded", loadCart);
