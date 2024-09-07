// src/redux/todoOperations.js
import { deleteTodo } from "../feature/todoSlice";
import { db } from "../config/firebase";

export const deleteTodoItem = (id) => async (dispatch) => {
  try {
    await db.collection("todos").doc(id).delete();
    dispatch(deleteTodo(id));
  } catch (error) {
    console.error("Error deleting todo: ", error);
  }
};
