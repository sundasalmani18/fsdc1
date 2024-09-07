// src/redux/todoOperations.js
import { removeTodo } from "../feature/todoSlice";
import { db, deleteDoc, doc } from "../config/firebase";

export const deleteTodo = (id) => async (dispatch) => {
  try {
    await deleteDoc(doc(db, "todos", id));
    dispatch(removeTodo(id));
  } catch (error) {
    console.error("Error deleting todo: ", error);
  }
};

// export const deleteTodoItem = (id) => async (dispatch) => {
//   try {
//     await db.collection("todos").doc(id).delete();
//     dispatch(deleteTodo(id));
//   } catch (error) {
//     console.error("Error deleting todo: ", error);
//   }
// };
