// src/redux/todoOperations.js
import { addTodo } from "../feature/todoSlice";
import { db, collection, addDoc } from "../config/firebase";

export const createTodo = (todo) => async (dispatch) => {
  try {
    const docRef = await addDoc(collection(db, "todos"), todo);
    dispatch(addTodo({ id: docRef.id, ...todo }));
  } catch (error) {
    console.error("Error adding todo: ", error);
  }
};

// export const createTodo = (todo) => async (dispatch) => {
//   try {
//     const docRef = await db.collection("todos").add(todo);
//     dispatch(addTodo({ id: docRef.id, ...todo }));
//   } catch (error) {
//     console.error("Error adding todo: ", error);
//   }
// };
