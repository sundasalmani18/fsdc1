// src/redux/todoOperations.js
import { addTodo } from "../feature/todoSlice";
import { db, collection, addDoc, FieldValue } from "../config/firebase";

export const createTodo = (todo) => async (dispatch) => {
  // console.log("createTodo", todo);
  try {
    const docRef = await addDoc(collection(db, "todos"), {
      ...todo,
      createdAt: new Date(),
    });
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
