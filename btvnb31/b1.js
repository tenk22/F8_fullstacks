const tbody = document.getElementById("tbody");
const todoForm = document.getElementById("todoForm");
const titleElement = document.getElementById("title");
const descriptionElement = document.getElementById("description");
const addBtn = document.getElementById("add-btn");
const searchElement = document.getElementById("search");
const filterElement = document.getElementById("filter");
const priorityElement = document.getElementById("priority");
const priorityFilterElement = document.getElementById("priorityFilter");

const url = "http://localhost:3000/todos";

let todos = [];
let todoEditing = { id: null };

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    todos.push(...data);
    renderTodos(todos);
  })
  .catch((err) => console.log(err));

function renderTodos(todosToRender) {
  tbody.innerText = "";
  todosToRender.forEach((item) => {
    let tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${item.id}</td>
      <td>${item.title}</td>
      <td>${item.description}</td>
      <td>${item.priority}</td> <!-- Display priority directly -->
      <td>
        <span onclick="toggleStatus(${
          item.id
        })" style="cursor: pointer; color: ${item.status ? "green" : "red"}">
          ${item.status ? "Completed" : "Pending"}
        </span>
      </td>
      <td>
        <button onclick="removeTodo(${item.id})">Remove</button>
        <button type="button" onclick="updateTodo(${item.id})">Update</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}
function toggleStatus(id) {
  const todo = todos.find((item) => item.id === id);
  todo.status = !todo.status;

  fetch(`${url}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status: todo.status }),
  })
    .then(() => renderTodos(todos))
    .catch((err) => console.log(err));
}

function removeTodo(id) {
  if (confirm("Are you sure?")) {
    fetch(`${url}/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        todos = todos.filter((item) => item.id !== id);
        renderTodos(todos);
      })
      .catch((err) => console.log(err));
  }
}

function updateTodo(id) {
  todoEditing = todos.find((item) => item.id === id);
  titleElement.value = todoEditing.title;
  descriptionElement.value = todoEditing.description;
  priorityElement.value = todoEditing.priority;
  addBtn.innerText = "Update";
}

function handleTodo(event) {
  event.preventDefault();
  const todo = {
    title: titleElement.value,
    description: descriptionElement.value,
    status: todoEditing.status || false,
    priority: priorityElement.value,
  };

  if (todoEditing.id) {
    fetch(`${url}/${todoEditing.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo),
    })
      .then(() => {
        todos = todos.map((item) =>
          item.id === todoEditing.id ? { ...item, ...todo } : item
        );
        renderTodos(todos);
      })
      .catch((err) => console.log(err));
  } else {
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo),
    })
      .then((response) => response.json())
      .then((data) => {
        todos.push(data);
        renderTodos(todos);
      })
      .catch((err) => console.log(err));
  }
  resetForm();
}

function searchTodo() {
  const searchTerm = searchElement.value.toLowerCase();
  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(searchTerm)
  );
  renderTodos(filteredTodos);
}

function filterTodos() {
  const filterValue = filterElement.value;
  if (filterValue === "all") {
    renderTodos(todos);
  } else {
    const status = filterValue === "completed";
    const filteredTodos = todos.filter((todo) => todo.status === status);
    renderTodos(filteredTodos);
  }
}

function sortTodosByPriority() {
  const sortedTodos = [...todos].sort((a, b) => {
    const priorities = { high: 1, medium: 2, low: 3 };
    return priorities[a.priority] - priorities[b.priority];
  });
  renderTodos(sortedTodos);
}

function filterByPriority() {
  const priorityValue = priorityFilterElement.value;
  if (priorityValue === "all") {
    renderTodos(todos);
  } else {
    const filteredTodos = todos.filter(
      (todo) => todo.priority === priorityValue
    );
    renderTodos(filteredTodos);
  }
}
function filterTodos() {
  const filterValue = filterElement.value;
  const searchTerm = searchElement.value.toLowerCase();

  let filteredTodos = todos;

  if (filterValue !== "all") {
    const status = filterValue === "completed";
    filteredTodos = filteredTodos.filter((todo) => todo.status === status);
  }

  if (searchTerm) {
    filteredTodos = filteredTodos.filter((todo) =>
      todo.title.toLowerCase().includes(searchTerm)
    );
  }

  renderTodos(filteredTodos);
}

function combinedFilter() {
  filterTodos();
  filterByPriority();
}

function resetForm() {
  titleElement.value = "";
  descriptionElement.value = "";
  priorityElement.value = "low";
  addBtn.innerText = "Add";
  todoEditing = { id: null };
}

todoForm.addEventListener("submit", handleTodo);
document.getElementById("reset-btn").addEventListener("click", resetForm);
