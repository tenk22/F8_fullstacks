document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const gender = document.getElementById("gender").value;

    console.log("Registration Information:");
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Gender:", gender);
  });
