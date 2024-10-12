const initialTodos = [
  {
    id: 1,
    content: "Task A",
    completed: false,
    priority: 2,
    deleted: false,
  },
  {
    id: 2,
    content: "Task B",
    completed: true,
    priority: 1,
    deleted: false,
  },
  {
    id: 3,
    content: "Task C",
    completed: false,
    priority: 3,
    deleted: false,
  },
  {
    id: 4,
    content: "Task D",
    completed: false,
    priority: 3,
    deleted: false,
  },
];
let currentTodos = [...initialTodos];
function isDarkModeEnabled() {
  return document.body.classList.contains("dark-mode");
}
function renderTodos(todos) {
  const todosElement = document.getElementById("todos");
  todosElement.innerHTML = "";
  todos.forEach((todo) => {
    if (!todo.deleted) {
      const row = document.createElement("tr");
      const taskCell = document.createElement("td");
      taskCell.textContent = todo.content;
      row.appendChild(taskCell);
      const priorityCell = document.createElement("td");
      priorityCell.textContent = todo.priority;
      row.appendChild(priorityCell);
      const completedCell = document.createElement("td");
      const completedButton = document.createElement("button");
      completedButton.textContent = todo.completed ? "Completed" : "Doing";
      completedButton.style.backgroundColor = todo.completed ? "green" : "red";
      completedButton.onclick = () => toggleCompleted(todo.id);
      completedCell.appendChild(completedButton);
      row.appendChild(completedCell);
      const actionCell = document.createElement("td");
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.onclick = () => deleteTodo(todo.id);
      actionCell.appendChild(deleteButton);
      row.appendChild(actionCell);
      todosElement.appendChild(row);
    }
  });
  if (isDarkModeEnabled()) {
    document
      .querySelectorAll("td")
      .forEach((td) => td.classList.add("dark-mode"));
    document
      .querySelectorAll('button[style*="green"]')
      .forEach((btn) => btn.classList.add("dark-mode"));
    document
      .querySelectorAll('button[style*="red"]')
      .forEach((btn) => btn.classList.add("dark-mode"));
  }
}
function toggleCompleted(id) {
  const todo = currentTodos.find((todo) => todo.id === id);
  if (todo) {
    todo.completed = !todo.completed;
    renderTodos(currentTodos);
  }
}
function deleteTodo(id) {
  const confirmation = confirm("Có muốn xóa task này không?");
  if (confirmation) {
    const todo = currentTodos.find((todo) => todo.id === id);
    if (todo) {
      todo.deleted = true;
    }
    renderTodos(currentTodos);
  }
}
function sortPriority() {
  currentTodos.sort((a, b) => b.priority - a.priority);
  renderTodos(currentTodos);
}
function filterCompleted() {
  const completedTodos = currentTodos.filter((todo) => todo.completed);
  renderTodos(completedTodos);
}
function filterDoing() {
  const doingTodos = currentTodos.filter((todo) => !todo.completed);
  renderTodos(doingTodos);
}
function resetTodos() {
  currentTodos = [...initialTodos].filter((todo) => !todo.deleted);
  renderTodos(currentTodos);
}
// function toggleDarkMode() {
//   document.body.classList.toggle("dark-mode");
//   document
//     .querySelectorAll("button")
//     .forEach((button) => button.classList.toggle("dark-mode"));
//   document
//     .querySelectorAll("table")
//     .forEach((table) => table.classList.toggle("dark-mode"));
//   document
//     .querySelectorAll("th")
//     .forEach((th) => th.classList.toggle("dark-mode"));
//   document
//     .querySelectorAll("td")
//     .forEach((td) => td.classList.toggle("dark-mode"));
//   document
//     .querySelectorAll('button[style*="green"]')
//     .forEach((btn) => btn.classList.toggle("dark-mode"));
//   document
//     .querySelectorAll('button[style*="red"]')
//     .forEach((btn) => btn.classList.toggle("dark-mode"));
// }
function addTask() {
  const content = prompt("Enter task mới:");
  if (content) {
    const priority = prompt("Enter task priority (1-3):");
    if (priority && !isNaN(priority) && priority >= 1 && priority <= 3) {
      const newTask = {
        id: Date.now(),
        content: content,
        completed: false,
        priority: Number(priority),
        deleted: false,
      };
      currentTodos.push(newTask);
      renderTodos(currentTodos);
    } else {
      alert("Please chỉ nhập (1-3) thui.");
    }
  }
}
document.getElementById("addTaskButton").addEventListener("click", addTask);
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  const darkModeIcon = document.getElementById("darkModeIcon");
  if (document.body.classList.contains("dark-mode")) {
    darkModeIcon.classList.remove("fa-sun");
    darkModeIcon.classList.add("fa-moon");
  } else {
    darkModeIcon.classList.remove("fa-moon");
    darkModeIcon.classList.add("fa-sun");
  }
  document
    .querySelectorAll("button")
    .forEach((button) => button.classList.toggle("dark-mode"));
  document
    .querySelectorAll("table")
    .forEach((table) => table.classList.toggle("dark-mode"));
  document
    .querySelectorAll("th")
    .forEach((th) => th.classList.toggle("dark-mode"));
  document
    .querySelectorAll("td")
    .forEach((td) => td.classList.toggle("dark-mode"));
  document
    .querySelectorAll('button[style*="green"]')
    .forEach((btn) => btn.classList.toggle("dark-mode"));
  document
    .querySelectorAll('button[style*="red"]')
    .forEach((btn) => btn.classList.toggle("dark-mode"));
}
document
  .getElementById("darkModeToggle")
  .addEventListener("click", toggleDarkMode);
document.getElementById("sortPriority").addEventListener("click", sortPriority);
document
  .getElementById("filterCompleted")
  .addEventListener("click", filterCompleted);
document.getElementById("filterDoing").addEventListener("click", filterDoing);
document.getElementById("reset").addEventListener("click", resetTodos);
document
  .getElementById("darkModeToggle")
  .addEventListener("click", toggleDarkMode);
renderTodos(currentTodos);
