/**
 *
 *
 *
 *
 */

// console.log(arr1["1"]);
//arr1 -> [1,2,3,4,5,6]
// cách tính độ dài của mảng
// arr1[10] = "hoang";
// console.log(arr1);
// delete arr1[2];
// console.log(arr1);
// xóa phần tử có index = 2.

// const students1 = ["hoang", "long", "duy"];
// const students2 = ["an", "tuan", "huy", "dong"];
// gộp mảng

/**
 * có thể thay đổi mảng gốc
 * 1.coi 1 mảng là gốc, tính độ dài mảng gốc
 * 2.tạo vòng for chạy từ vị trí cuối cùng +1 của mảng gốc đến hết tổng độ dài 2 mảng, qua mỗi vị trí thì thêm phần tử ở mảng phụ vào mảng gốc
 */

// const students = students1.concat([]);
// console.log(students);
// console.log(students1);
// console.log(students === students1);

//so sánh mảng

// const arr1 = [1, 2, 3];
// const arr2 = [1, 2, 3];

// console.log(arr1 === arr2);

// const students1 = ["hoang", "long", "duy"];
// // for
// for (let i = 0; i < students1.length; i++) {
//   console.log(students1[i]);
// }
// //for..in
// for (index in students1) {
//   console.log("phần tử ở vị trí ${index} có giá trị là: ${students1[index]}");
// }
// //for..of
// for (value of students1) {
//   console.log(value);
// }

// const employees = [
//   { name: "hoang", age: 32, address: "BG" },
//   { name: "duy", age: 28, address: "ND" },
//   { name: "huy", age: 32, address: "LS" },
// ];

// yêu cầu tìm ra nhân viên lớn tuổi nhất, nếu 2 nhân viên lớn tuổi nhất có cùng số tuổi bằng nhau thì lấy người đầu tiên tìm đc.
// const employees = [
//   { name: "hoangg", age: 32, address: "BG" },
//   { name: "duy", age: 28, address: "ND" },
//   { name: "huy", age: 32, address: "LS" },
// ];
// function findOldestEmployee(employees) {
//   if (employees.length === 0) {
//     return null;
//   }
//   let oldestEmployee = employees[0];
//   for (const employee of employees) {
//     if (employee.age > oldestEmployee.age) {
//       oldestEmployee = employee;
//     }
//   }
//   return oldestEmployee;
// }
// const oldest = findOldestEmployee(employees);
// console.log(oldest);

/**
 *
 *
 *
 */
// let str = "hello, f8";
// let paragraph = "xin chao. hoc js ko kho";
// const arr = paragraph.split(". ");
// // console.log(arr);
// const arr = ["xin chao.", "hoc js ko kho!"];
// const newStr = arr.join("@@");
// dùng kiến thức đã học về chuỗi và mảng để đưa ra 1 mảng các đoạn văn thành chuỗi, mỗi câu đc bọc bởi cặp thẻ <p></p>
// console.log(newStr);
//output: <P> xin chao.</P><p>hoc js ko kho!</p>
// const arr = ["xin chao.", "hoc js ko kho!"];
// const newStr = arr.map((sentence) => `<p>${sentence}</p>`).join("");
// console.log(newStr);

// let username = "nguyEn mINH hOAng";
// Chuyển đổi ký tự đầu tiên của mỗi từ thành chữ hoa
//output: Nguyen Minh Hoang
/**
 * bước 1 tách các chuỗi thành 1 mảng, mỗi phần tử là 1 từ
 */

// function capitalizeWords(str) {
//   let words = str.toLowerCase().split(" ");

//   let capitalizedWords = words.map((word) => {
//     return word.charAt(0).toUpperCase() + word.slice(1);
//   });
//   return capitalizedWords.join(" ");
// }
// let username = "nguyEn mINH hOAng";
// let formattedUsername = capitalizeWords(username);
// console.log(formattedUsername);

/**
 *
 *
 *
 *
 *
 */

// let username = "nguyEn mINH hOAng";

// function capitalizeWords(str) {
//   str = str.toLowerCase();
//   let words = str.split(" ");
//   for (let i = 0; i < words.length; i++) {
//     words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//   }
//   return words.join(" ");
// }
// let result = capitalizeWords(username);
// console.log(result);

//phương thức pop()
const arr = ["xuân", "hạ", "thu", "đông"];
arr.pop();
console.log(arr);

/**
 * push()
 * - thay đổi mảng gốc
 * - thêm 1 phần tử cuối mảng
 * - trả về độ dài mới của mảng
 */
console.log(arr.push("hoang", "huy"));
console.log(arr);

/**
 * unshift()
 *
 */
arr.unshift("long");
console.log(arr);
