// src/redux/todoSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { db } from "../config/firebase.jsx";

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {
    setUser: (state, action) => {
      state.users = action.payload;
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    // updateTodo: (state, action) => {
    //   const index = state.todos.findIndex(
    //     (todo) => todo.id === action.payload.id
    //   );
    //   console.log("index", index);
    //   if (index !== "") {
    //     state.todos[index] = action.payload;
    //   }
    // },
    // removeTodo: (state, action) => {
    //   state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    // },
    // setLoading: (state, action) => {
    //   state.loading = action.payload;
    // },
    // setError: (state, action) => {
    //   state.error = action.payload;
    // },
  },
});

export const { setUser, addUser } = userSlice.actions;

export default userSlice.reducer;
