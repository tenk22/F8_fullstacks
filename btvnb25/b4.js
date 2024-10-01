function countDownToNewYear() {
  let today = new Date();
  let currentYear = today.getFullYear();
  let nextYear = currentYear + 1;
  let newYear = new Date(`January 1, ${nextYear}`);
  let timeDifference = newYear - today;
  let daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
  console.log(`số ngày đến Tết Dương Lịch: ${daysLeft} ngày`);
}
countDownToNewYear();
