// src/redux/todoOperations.js
import { addTodo } from "./todoSlice";
import { db } from "../firebase";

export const createTodo = (todo) => async (dispatch) => {
  try {
    const docRef = await db.collection("todos").add(todo);
    dispatch(addTodo({ id: docRef.id, ...todo }));
  } catch (error) {
    console.error("Error adding todo: ", error);
  }
};
