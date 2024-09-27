/**
 * some()
 * - ko thay đổi mảng gốc
 * - array.some(callback) - là tham số bắt buộc
 */

// const arr = [1, 2, 3, 4, 5];

// const result = arr.some((item, index) => {
//   return item >= 5;
// });
// consolele.log(result);

//dùng some() để kiểm tra 1 mảng có phần tử nào là số chẵn hay ko ?

// const result = arr.some((item, index) => {
//   return typeof item === "number" && item % 2 === 0;
// });

// if (result2) {
//   console.log("Có chứa ít nhất 1 phần tử chẵn");
// } else {
//   console.log("Không có phần tử chẵn");
// }

// const employees = [
//   { id: 1, name: "Nguyen Van A", homeTown: "Ha Noi", gender: "male" },
//   { id: 2, name: "Nguyen Van B", homeTown: "TBinh", gender: "male" },
//   { id: 3, name: "Nguyen Van C", homeTown: "Ha Noi", gender: "male" },
//   { id: 4, name: "Nguyen Van D", homeTown: "LSon", gender: "female" },
// ];

// /** kiểm tra xem danh sách nhân viên có ai là nữ ko */

// const result = employees.some((item) => {
//   return item.gender === "female";
// });
// const result2 = employees.every((item) => {
//   return item.gender === "female";
// });
// console.log(result);

/**
 * every()
 *ko thay đổi mảng gốc
 * array.every(callback) - là tham số bắt buộc
 * kiểm tra xem mọi phần tử của mảng có cùng thỏa mãn điều kiện hay ko
 */

// dùng every() để kiểm tra xem mỗi nhân viên có đầy đủ thông tin id, name, homeTown, gender hay ko

// const employees = [
//   { id: 1, name: "Nguyen Van A", homeTown: "Ha Noi", gender: "male" },
//   { id: 2, name: "Nguyen Van B", homeTown: "TBinh", gender: "male" },
//   { id: 3, name: "Nguyen Van C", homeTown: "Ha Noi", gender: "male" },
//   { id: 4, name: "Nguyen Van D", homeTown: "LSon", gender: "female" },
// ];
// const result = employees.every((item) => {
//   return item.id && item.name && item.homeTown && item.gender;
// });
// console.log(result);
