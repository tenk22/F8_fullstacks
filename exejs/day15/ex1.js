function taskA(callback) {
  setTimeout(() => {
    console.log("Task A done");
    callback();
  }, 2000);
}

function taskB(callback) {
  setTimeout(() => {
    console.log("Task B done");
    callback();
  }, 2000);
}

function taskC(callback) {
  setTimeout(() => {
    console.log("Task C done");
    callback();
  }, 1000);
}

console.time("callback-timer");
taskA(() => {
  taskB(() => {
    taskC(() => {
      console.log("All tasks done");
      console.timeEnd("callback-timer");
    });
  });
});
