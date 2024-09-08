// src/redux/todoSlice.js
import { createSlice, getDefaultMiddleware } from "@reduxjs/toolkit";
import { db } from "../config/firebase.jsx";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    loading: false,
    error: null,
  },
  reducers: {
    setTodos: (state, action) => {
      state.todos = action.payload;
    },
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    updateTodo: (state, action) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      console.log("index", index);
      if (index !== "") {
        state.todos[index] = action.payload;
      }
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  setTodos,
  addTodo,
  updateTodo,
  removeTodo,
  setLoading,
  setError,
} = todoSlice.actions;

export default todoSlice.reducer;

//redux only with firebase
// import {
//   ADD_TODO,
//   REMOVE_TODO,
//   TOGGLE_TODO,
//   EDIT_TODO,
// } from "../feature/action.js";

// const initialState = {
//   todos: [],
// };
// const todoReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TODO:
//       return {
//         ...state,
//         todos: [...state.todos, { ...action.payload, completed: false }],
//       };
//     case REMOVE_TODO:
//       return {
//         ...state,
//         todos: state.todos.filter((todo) => todo.id !== action.payload),
//       };
//     case TOGGLE_TODO:
//       return {
//         ...state,
//         todos: state.todos.map((todo) =>
//           todo.id === action.payload
//             ? { ...todo, completed: !todo.completed }
//             : todo
//         ),
//       };
//     case EDIT_TODO:
//       return {
//         ...state,
//         todos: state.todos.map((todo) =>
//           todo.id === action.payload.id
//             ? { ...todo, text: action.payload.text }
//             : todo
//         ),
//       };
//     default:
//       return state;
//   }
// };

// export default todoReducer;
