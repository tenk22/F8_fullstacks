// function fetchAPI() {
//   fetch("https://dummyjson.com/products", {
//     method: "GET",
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

// async function fetchAPI() {
//   try {
//     const res = await fetch("https://dummyjson.com/products");
//     const data = await res.json();
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }
/**
 * async/await là cú pháp giuos viết code bất đồng bộ dễ hiểu hơn promise
 * async khai báo 1 function mà trong đó có công việc cần đồng bộ hóa
 * await chờ 1 promise phản hồi
 */

async function getAll(path) {
  try {
    const res = await fetch(path);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

async function updateById(path, id, data) {
  try {
    const res = await fetch(path + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

async function getDetailById(path, id) {
  try {
    const res = await fetch(path + id);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
