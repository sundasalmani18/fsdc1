// firbease redux
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../feature/todoSlice.js";
import userReducer from "../feature/userSlice.js";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    users: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

//export default store;

//with redux only
// import { configureStore } from "@reduxjs/toolkit";
// import todoReducer from "../feature/todoSlice";
// export const store = configureStore({
//   reducer: {
//     todo: todoReducer,
//   },
// });
