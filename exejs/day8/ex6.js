/**
 * các cách khai báo
 * -khai báo với từ khóa 'new' tạo ra kiểu dữ liệu object
 * -khai báo với ko có từ khóa 'new' chỉ tạo ra kiểu dữ liệu string
 */

// const now1 = new Date("2021-09-09 09:01:01");
// const now2 = new Date();
// console.log(now1);
// console.log(typeof now1);
// console.log(typeof now2);
// const result = now2 - now1;
// console.log(result / (60 * 60 * 24 * 365 * 1000));
// console.log({ now2 });
// console.log(now2.getFullYear());
// console.log(now2.getMonth());
// console.log(now2.getDate());
// console.log(now2.getDay());
// console.log(now2.getHours());
// console.log(now2.getMinutes());
// console.log(now2.getSeconds());
// console.log(now2.getTime()); // số miligiay tính từ mili giây đầu tiên của 1/1/1970
// const date3 = new Date("1969-01-01");
// console.log(date3.getTime());
// tính số giờ ( làm tròn 2 chữ số thập phân sau dấy phẩy) từ 23:59 phút ngày 10/08/2024 đến nay
// const Date1 = new Date(2024, 7, 10, 23, 59);
// const now = new Date();
// const Ms = now - Date1;
// const Hours = Ms / (1000 * 60 * 60);
// const Hours1 = Math.round(Hours * 100) / 100;
// console.log(`so gio: ${Hours1}`);
/**
 * BOM (Browser Object Model)
 */

// console.log(window.innerHeight);
// console.log(window.innerWidth);
// const age = window.prompt("nhap tuoi");
// const hello = window.alert("hello??");
// const isConfirm = confirm("chuyển trang?");
// console.log(age);
// console.log(navigator.userAgent);
// console.log(navigator.language);
// console.log(screen);

/**
 * setTimeout(function, milliseconds)
 *- số miligiay là tham số ko bắt buộc
 */
// const result = setTimeout(() => {
//   console.log("hello");
// }, 2000);
// console.log(result);
// /**
//  * setInterval(function, milliseconds)
//  * -
//  */
// const result2 = setInterval(() => {
//   console.log("hello");
// }, 2000);

//dùng setInterval miển thị ra màn hình từ 1 đến 100, mỗi lần hiển thị cách nhau 1s
let i = 1;
const result3 = setInterval(() => {
  console.log(i);
  i++;
  if (i > 100) {
    clearInterval(result3);
  }
}, 10);
