// bài 1
let a = 5;
let b = 10;

console.log("Trước khi hoán vị: a =", a, ", b =", b);

// Hoán vị không dùng biến trung gian
a = a + b;
b = a - b;
a = a - b;

console.log("Sau khi hoán vị: a =", a, ", b =", b);


// // bài 2
// let S = 10 + 20 + Math.pow(5, 10) / 2;

// console.log("Giá trị của S là:", S);


// // bài 3
// let a = 10;
// let b = 25;
// let c = 15;

// let max;

// if (a >= b && a >= c) {
//     max = a;
// } else if (b >= a && b >= c) {
//     max = b;
// } else {
//     max = c;
// }

// console.log("Số lớn nhất là:", max);


// // bài 4
// let a = -5;
// let b = -10;

// if ((a > 0 && b > 0) || (a < 0 && b < 0)) {
//     console.log("Hai số cùng dấu.");
// } else {
//     console.log("Hai số khác dấu.");
// }


// // bài 5
// let a = 20;
// let b = 10;
// let c = 15;

// // Sắp xếp ba số theo thứ tự tăng dần
// if (a > b) {
//     let temp = a;
//     a = b;
//     b = temp;
// }

// if (a > c) {
//     let temp = a;
//     a = c;
//     c = temp;
// }

// if (b > c) {
//     let temp = b;
//     b = c;
//     c = temp;
// }

// console.log("Thứ tự tăng dần của 3 số là:", a, b, c);


