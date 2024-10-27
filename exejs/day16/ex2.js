function taskA() {
  setTimeout(() => {
    console.log("task A done");
  }, 3000);
}

function taskB() {
  setTimeout(() => {
    console.log("Task B done!");
  }, 2000);
}

function taskC() {
  setTimeout(() => {
    console.log("task C done");
  }, 1000);
}

Promise.all([taskA(), taskB(), taskC()])
  .then(() => {
    console.log("All tasks done!");
  })
  .catch((err) => {
    console.log("có việc gì đó lỗi");
  });
