document.getElementById("register-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("register-username").value;
  const password = document.getElementById("register-password").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];
  if (users.some((user) => user.username === username)) {
    alert("Username already exists!");
    return;
  }

  users.push({ username, password });
  localStorage.setItem("users", JSON.stringify(users));
  alert("Registration successful!");
});

document.getElementById("login-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    alert("Login successful!");
    localStorage.setItem("currentUser", JSON.stringify(user));
  } else {
    alert("Invalid username or password!");
  }
});
