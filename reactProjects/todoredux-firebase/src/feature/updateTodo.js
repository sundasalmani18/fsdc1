// src/redux/todoOperations.js
import { updateTodo } from "../feature/todoSlice";
import { db, updateDoc, doc } from "../config/firebase";

export const editTodo = (todo) => async (dispatch) => {
  console.log("edit todo", todo);
  try {
    await updateDoc(doc(db, "todos", todo.id), {
      ...todo,
      updatedAt: new Date(),
    });
    dispatch(updateTodo(todo));
    console.log("todo", todo);
  } catch (error) {
    console.error("Error updating todo: ", error);
  }
};

// export const updateTodoItem = (id, updatedTodo) => async (dispatch) => {
//   try {
//     await db.collection("todos").doc(id).update(updatedTodo);
//     dispatch(updateTodo({ id, ...updatedTodo }));
//   } catch (error) {
//     console.error("Error updating todo: ", error);
//   }
// };
