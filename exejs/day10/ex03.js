// document.write("Hello, F8");
// document.write("Hello, F8");
// document.write("Hello, F8");
// document.write("Hello, F8");
// const ulElement = document.getElementsByTagNameElement("ul")[0];
// const liElement = document.createElement("li");
// console.log(liElement);
// liElement.innerText = "item 5";
// console.log(liElement);
// ulElement.appendChild(liElement);

/**
 * viết hàm addToDo("task") nhận vào việc cần làm ( lấy từ prompt) và thêm công việc đó vào danh sách việc cần làm rồi hiển thị ra màn hình
 */

function addNewTodo() {
  const task = prompt("nhap todo task:");
  if (task) {
    addToDo(task);
  }
}
function addToDo(task) {
  const todoList = document.getElementById("todo-list");
  const li = document.createElement("li");
  li.textContent = task;
  todoList.appendChild(li);
}
// function addToDo(task) {
//   const todoList = document.getElementById("todo-list");
//   const li = document.createElement("li");
//   li.textContent = task;
//   todoList.insertBefore(li, todoList.firstChild);
// }

/**
 * sử dụng removeChild() để gỡ element con thứ 2 ( index = 1) của ulElement
 */
const ulElement = document.getElementById("todo-list");
if (ulElement.children.length > 1) {
  const secondChild = ulElement.children[1];
  ulElement.removeChild(secondChild);
}
