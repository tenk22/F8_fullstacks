import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async (userId) => {
    const response = await fetch(
      `http://localhost:3000/todos?userId=${userId}`
    );
    return response.json();
  }
);

export const addTodo = createAsyncThunk("todos/addTodo", async (todo) => {
  const response = await fetch("http://localhost:3000/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo),
  });
  return response.json();
});

export const updateTodo = createAsyncThunk(
  "todos/updateTodo",
  async ({ id, updates }) => {
    const response = await fetch(`http://localhost:3000/todos/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updates),
    });
    return response.json();
  }
);

export const deleteTodo = createAsyncThunk("todos/deleteTodo", async (id) => {
  await fetch(`http://localhost:3000/todos/${id}`, {
    method: "DELETE",
  });
  return id;
});

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          (todo) => todo.id === action.payload.id
        );
        state.items[index] = action.payload;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.items = state.items.filter((todo) => todo.id !== action.payload);
      });
  },
});

export default todoSlice.reducer;
