let todos = JSON.parse(localStorage.getItem("todos")) || [];
let editIndex = -1;

const todoForm = document.getElementById("todo-form");
const titleInput = document.getElementById("title");
const descriptionInput = document.getElementById("description");
const addButton = document.getElementById("add-btn");
const todoTable = document
  .getElementById("todo-table")
  .getElementsByTagName("tbody")[0];
function generateRandomID(n) {
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let id = "todo-";
  for (let i = 0; i < n; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    id += characters[randomIndex];
  }
  return id;
}
function resetForm() {
  titleInput.value = "";
  descriptionInput.value = "";
  editIndex = -1;
  addButton.textContent = "Add";
}
function saveToLocalStorage() {
  localStorage.setItem("todos", JSON.stringify(todos));
}
function renderTodos() {
  todoTable.innerHTML = "";

  if (todos.length === 0) {
    const noDataRow = document.createElement("tr");
    noDataRow.innerHTML = `
      <td colspan="4" class="no-data">No Data</td>
    `;
    todoTable.appendChild(noDataRow);
  } else {
    todos.forEach((todo, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${todo.id}</td>
        <td>
          ${todo.title} - <span class="${
        todo.status ? "completed" : "pending"
      }" onclick="toggleStatus(${index})">
          ${todo.status ? "Completed" : "Pending"}</span>
        </td>
        <td>${todo.description}</td>
        <td class="action-buttons">
          <button class="remove" onclick="removeTodo(${index})">Remove</button>
          <button class="update" onclick="editTodo(${index})">Update</button>
        </td>
      `;
      todoTable.appendChild(row);
    });
  }
}
function addOrUpdateTodo() {
  if (editIndex === -1) {
    const newTodo = {
      id: generateRandomID(4),
      title: titleInput.value,
      description: descriptionInput.value,
      status: false,
    };
    todos.push(newTodo);
  } else {
    todos[editIndex].title = titleInput.value;
    todos[editIndex].description = descriptionInput.value;
  }
  saveToLocalStorage();
  renderTodos();
  resetForm();
}
function removeTodo(index) {
  todos.splice(index, 1);
  saveToLocalStorage();
  renderTodos();
}
function editTodo(index) {
  titleInput.value = todos[index].title;
  descriptionInput.value = todos[index].description;
  editIndex = index;
  addButton.textContent = "Update";
}
function toggleStatus(index) {
  todos[index].status = !todos[index].status;
  saveToLocalStorage();
  renderTodos();
}
document.getElementById("add-btn").addEventListener("click", addOrUpdateTodo);
document.getElementById("reset-btn").addEventListener("click", resetForm);
renderTodos();
