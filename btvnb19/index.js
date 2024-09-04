// bài 1
function tinhTienTaxi(soKm) {
  let tongTien = 0;

  if (soKm <= 1) {
    tongTien = soKm * 15000;
  } else if (soKm <= 5) {
    tongTien = 15000 + (soKm - 1) * 13500;
  } else {
    tongTien = 15000 + 4 * 13500 + (soKm - 5) * 11000;
  }

  if (soKm > 120) {
    tongTien *= 0.9;
  }

  return tongTien;
}

// // bài 2

// function tinhTienDien(soKwh) {
//   let tongTien = 0;

//   // Bậc 1: Cho kWh từ 0 - 50
//   if (soKwh > 50) {
//     tongTien += 50 * 1678;
//     soKwh -= 50;
//   } else {
//     tongTien += soKwh * 1678;
//     return tongTien;
//   }

//   // Bậc 2: Cho kWh từ 51 - 100
//   if (soKwh > 50) {
//     tongTien += 50 * 1734;
//     soKwh -= 50;
//   } else {
//     tongTien += soKwh * 1734;
//     return tongTien;
//   }

//   // Bậc 3: Cho kWh từ 101 - 200
//   if (soKwh > 100) {
//     tongTien += 100 * 2014;
//     soKwh -= 100;
//   } else {
//     tongTien += soKwh * 2014;
//     return tongTien;
//   }

//   // Bậc 4: Cho kWh từ 201 - 300
//   if (soKwh > 100) {
//     tongTien += 100 * 2536;
//     soKwh -= 100;
//   } else {
//     tongTien += soKwh * 2536;
//     return tongTien;
//   }

//   // Bậc 5: Cho kWh từ 301 - 400
//   if (soKwh > 100) {
//     tongTien += 100 * 2834;
//     soKwh -= 100;
//   } else {
//     tongTien += soKwh * 2834;
//     return tongTien;
//   }

//   tongTien += soKwh * 2927;

//   return tongTien;
// }

// // bài 3

// function tinhGiaTriBieuThuc(n) {
//   let S = 0;

//   for (let i = 1; i <= n; i++) {
//     S += i * (i + 1);
//   }

//   return S;
// }

// // bài 4

// function kiemTraSoNguyenTo(n) {
//   if (n < 2) {
//     return false;
//   }

//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }

//   return true;
// }

// // bài 5

// function veBangCuuChuong() {
//   for (let i = 1; i <= 10; i++) {
//     console.log(`Bảng cửu chương ${i}:`);
//     for (let j = 1; j <= 10; j++) {
//       console.log(`${i} x ${j} = ${i * j}`);
//     }
//     console.log("----------------");
//   }
// }

// veBangCuuChuong();
