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
    updateUser: (state, action) => {
      const index = state.users.findIndex(
        (user) => user.id === action.payload.id
      );
      console.log("index", index);
      if (index !== -1) {
        state.users[index] = action.payload;
      }
    },
    removeUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

export const { setUser, addUser, removeUser, updateUser } = userSlice.actions;

export default userSlice.reducer;
