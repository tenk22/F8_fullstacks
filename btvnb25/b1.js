function calculateAge(birthday) {
  let birthDate = new Date(birthday);
  let today = new Date();
  let ageInMilliseconds = today - birthDate;
  let ageInDays = ageInMilliseconds / (1000 * 60 * 60 * 24);
  return Math.floor(ageInDays);
}
let birthday = prompt("Nhập ngày sinh của bạn (yyyy-mm-dd): ");
let daysLived = calculateAge(birthday);
console.log(`Số ngày bạn đã sống: ${daysLived} ngày`);
