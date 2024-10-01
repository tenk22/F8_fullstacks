function showTime() {
  setInterval(() => {
    let currentTime = new Date().toLocaleTimeString();
    console.log(`Thời gian hiện tại: ${currentTime}`);
  }, 1000);
}
showTime();
