const userInfor = {};

// function change1() {
//   console.log(event.target.value)
//   userInfor.email = event.target.value
//   // userInfor[event.targer.name] = event.target
//   console.log(userInfor)
// }

// function change2() {
//   console.log(event.target.value)
//   userInfor.password = event.target.value
//   console.log(userInfor)
// }

// function change3() {
//   console.log(event.target.value)
//   userInfor.gender = event.target.value
//   console.log(userInfor)
// }

// function change() {
//   userInfor[event.target.name] = event.target.value
//   console.log(userInfor)
// }

// http://127.0.0.1:5501/15.%20DOM_3/Demo/ex03.html?email=1%40gmail.com&password=1234567890&gender=female

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  // Cách 1: Sử dụng vòng lặp để lặp qua từng index của event.target -> lấy name-value đưa vào userInfor

  // Cách 2: Chọn từng phần tử input của form, sau đó lấy value thông qua element.value
  const fullName = document.getElementById("fullname").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm_password").value;
  const gender = document.getElementById("gender").value;

  const registerInfo = {
    fullName: fullName,
    email: email,
    password: password,
    confirmPassword: confirmPassword,
    gender: gender,
  };

  console.log(registerInfo);
});
