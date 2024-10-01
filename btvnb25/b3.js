function countDown(timeInSeconds) {
  let interval = setInterval(() => {
    if (timeInSeconds > 0) {
      console.log(`Thời gian còn lại: ${timeInSeconds} giây`);
      timeInSeconds--;
    } else {
      console.log("Đếm ngược kết thúc!");
      clearInterval(interval);
    }
  }, 1000);
}
let time = prompt("số giây cần đếm ngược: ");
countDown(parseInt(time));
