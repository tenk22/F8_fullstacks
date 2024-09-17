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
  const dataRegister1 = handleRegister(
    "Nguyen Van A",
    "123456",
    "nguyenvana@email.com"
  );
  const dataRegister2 = handleRegister(
    "Nguyen Van B",
    "1234567",
    "nguyenvanb@email.com"
  );
  console.log(dataRegister1);
  console.log(dataRegister2);
} catch (error) {
  console.error(error.message);
}

function handleLogin(email, password) {
  const user = data.find(
    (user) => user.email === email && user.password === password
  );

  if (user) {
    return user;
  } else {
    return "Thông tin đăng nhập không hợp lệ";
  }
}

const dataLogin = handleLogin("nguyenvanb@email.com", "1234567");
console.log(dataLogin);
