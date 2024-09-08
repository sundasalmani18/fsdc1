// firbease redux
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../feature/todoSlice.js";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
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
