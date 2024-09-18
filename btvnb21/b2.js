const data = [];
function createUser(name, password, email) {
  return {
    name: name,
    password: password,
    email: email,
    role: "user",
  };
}
function handleRegister(name, password, email) {
  if (!name || !password || !email) {
    throw new Error("Thông tin không đầy đủ!");
  }
  const user = createUser(name, password, email);
  data.push(user);
  return data;
}
try {
  handleRegister("Nguyen Van A", "123456", "nguyenvana@email.com");
  handleRegister("Nguyen Van B", "1234567", "nguyenvanb@email.com");
  console.log(data);
} catch (error) {
  console.error(error.message);
}
function handleLogin(email, password) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].email === email && data[i].password === password) {
      return data[i];
    }
  }
  return "Thông tin đăng nhập không hợp lệ";
}
const dataLogin = handleLogin("nguyenvanb@email.com", "1234567");
console.log(dataLogin);
