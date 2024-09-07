// src/redux/todoOperations.js
import { updateTodo } from "../feature/todoSlice";
import { db } from "../config/firebase";

export const updateTodoItem = (id, updatedTodo) => async (dispatch) => {
  try {
    await db.collection("todos").doc(id).update(updatedTodo);
    dispatch(updateTodo({ id, ...updatedTodo }));
  } catch (error) {
    console.error("Error updating todo: ", error);
  }
};
