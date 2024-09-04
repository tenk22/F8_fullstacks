/*function trong js:
1.declaration function
2.



Ý nghĩa của hàm:
1.tái sử dụng code
2.tạo ra các phạm vi biến cục bộ, an toàn, dễ bảo trì..
3.đóng gói logic tính toán để dễ quản lý.


"return để dừng chương trình thực hiện triong hàm
return để trả về kết quả tính toán trong hàm"
*/

// function sum(a, b) {
//   console.log(a);
//   console.log(b);
//   console.log(a + b);
//   return a + b;
// }
// sum(10, 20);

// const tong = sum(100, 200);
// console.log(tong);

// const hello = function (name) {
//   console.log("xin chao ban", name);
// };
// hello("h20");

// tạo 1 hàm nhập vào số nguyên dương n bất kì, kiểm tra tính chẵn lẻ của số đó

// const myNumber = prompt("nhap so bat ki");
// function kiemTraChanLe(n) {
//   if (n <= 0 || !Number.isInteger(n)) {
//     return "nhập một số nguyên dương";
//   }
//   if (n % 2 === 0) {
//     alert("ket qua");
//     return n + " là số chẵn";
//   } else {
//     return n + " là số lẻ";
//   }
// }

// console.log(kiemTraChanLe(5));

// const sum1 = (a, b) => {
//   console.log(a);
//   console.log(b);
//   return a + b;
// };
// const sum2 = (a, b) => a + b;
// const sum3 = (a, b) => console.log(a + b);

// console.log(sum1(1, 2));
// console.log(sum2(10, 20));
// sum3(100, 200);

// function tinhBMI() {
//   const chieuCao = parseFloat(prompt("Nhập chiều cao của bạn (cm):"));
//   const canNang = parseFloat(prompt("Nhập cân nặng của bạn (kg):"));
//   const chieuCaoMet = chieuCao / 100;
//   const bmi = canNang / (chieuCaoMet * chieuCaoMet);
//   const bmiLamTron = bmi.toFixed(1);
//   let gopY;
//   if (bmi < 18.5) {
//     gopY = "bạn hơi thiếu cân";
//   } else if (bmi >= 18.5 && bmi < 24.9) {
//     gopY = "bạn có cân nặng cân đối";
//   } else {
//     gopY = "bạn hơi thừa cân";
//   }
//   return `chỉ số BMI của bạn là ${bmiLamTron}. ${gopY}.`;
// }
// alert(tinhBMI());
