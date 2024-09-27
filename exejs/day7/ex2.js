/**
 * map()
 * - array.map(callback) - là tham số bắt buộc
 * - ko thay đổi mảng gốc
 * - trả về mảng mới
 */
// const employees = [
//   { id: 1, name: "Nguyen Van A", homeTown: "Ha Noi", gender: "male" },
//   { id: 2, name: "Nguyen Van B", homeTown: "TBinh", gender: "male" },
//   { id: 3, name: "Nguyen Van C", homeTown: "Ha Noi", gender: "male" },
//   { id: 4, name: "Nguyen Van D", homeTown: "LSon", gender: "female" },
// ];

// const newArr = employees.map((item) => {
//   item.description = "so yeu ly lich";
//   return item;
// });
// console.log(newArr);

// const arr = [1, 2, 3, 4, 5, 10];

// // dùng map() x5 lần giá trị mỗi phần tử của mảng arr và trả về mảng mới Arrx5
// const newArrx5 = arr.map((item) => {
//   return item * 5;
// });
// console.log(newArrx5);

/**
 */

// const products = [
//   { id: 1, name: "Iphone 13", description: "mo ta", price: 1000 },
//   { id: 2, name: "Iphone 14", description: "mo ta", price: 2000 },
//   { id: 3, name: "Iphone 15", description: "mo ta", price: 3000 },
//   { id: 4, name: "Iphone 16", description: "mo ta", price: 4000 },
// ];
// /**
//  *  <div class="product-card">
//       <h2>san pham A</h2>
//       <p>description:</p>
//       <p class="price">price:</p>
//     </div>
//  */
// /** hiển thị danh sách sản phẩm theo cấu trúc html có sẵn */

// const content = products
//   .map((item) => {
//     return `<div class="product-card">
//       <h2>${item.name}</h2>
//       <p>description:${item.description}</p>
//       <p class="price">price:${item.price}</p>
//     </div>`;
//   })
//   .join("");
// console.log(content);
// document.write(content);

/**
 * arr.reverse()
 *- đảo ngược mảng
 *- thay đổi mảng gốc (nếu ko thay đổi mảng gốc thì dùng arr.toReversed())
 *
 */
// const arr = ["a", "b", "c", "d"];
// const newArr = arr.slice(0).reverse();
// console.log(arr);
// console.log(newArr);
// const newArr2 = arr.toReversed();
// console.log(newArr2);
// arr[10] = "e";
// console.log(arr);
// arr.reverse();
// console.log(newArr);

/**
 * sort()
 * chuyển đổi dữ liệu về dạng chuỗi và so sánh chuỗi để sắp xếp
 */

// const arr = [1, 2, 30, 40, 5, 10];
// arr.sort((a, b) => {
//   return a - b;
// });
// console.log(arr);

// const brands = ["apple", "samsung", "xiaomi", "oppo", "Oppo"];
// brands.sort((a, b) => {
//   //   console.log({ a, b });
//   if (a > b) {
//     return 1;
//   } else if (a < b) {
//     return -1;
//   } else {
//     return 0;
//   }
// });

// console.log(brands);
// console.log("samsung" > "apple");
// // a -> z

// const students = [
//   "Nguyen Manh Huy",
//   "Nguyen Thanh An",
//   "Phan Tuan Manh",
//   "Nguyen Truong Giang",
//   "Tran Ngoc Duy",
//   "Hoang Thanh Huy",
//   "Nguyen The Han",
//   "Le Huu Trong",
//   "Vu Quoc Dung",
//   "Nguyen Hai Duong",
//   "Nguyen Trung Hieu",
//   "Tran Duy Dong",
//   "Nguyen Minh Hoang",
//   "Tran Minh Hoang",
//   "Nhung",
//   "Nguyen Nhung",
// ];
// // sắp xếp tên theo bảng chữ cái

// students.sort((a, b) => {
//   const aWords = a.split(" ");
//   const bWords = b.split(" ");
//   const aLastName = aWords[aWords.length - 1];
//   const bLastName = bWords[bWords.length - 1];
//   if (aLastName !== bLastName) {
//     return aLastName.localeCompare(bLastName);
//   }
//   return a.localeCompare(b);
// });
// console.log(students);

/**
 * reduce()
 *
 */
const arr = [1, 3, 2, 5, 8];
total = 0;
for (let i = 0; i < arr.length; i++) {
  total += arr[i];
}
const result = arr.reduce((accumulator, item, index, arr) => {
  console.log({ accumulator, item, index, arr });
});
