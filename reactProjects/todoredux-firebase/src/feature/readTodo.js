// src/redux/todoOperations.js
import { setTodos, setLoading, setError } from "../feature/todoSlice";

import { db, collection, getDocs } from "../config/firebase";

export const fetchTodos = () => async (dispatch) => {
  try {
    const querySnapshot = await getDocs(collection(db, "todos"));
    const todos = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    dispatch(setTodos(todos));
  } catch (error) {
    console.error("Error fetching todos: ", error);
  }
};

// export const fetchTodos = () => async (dispatch) => {
//   dispatch(setLoading(true));
//   try {
//     const snapshot = await db.collection("todos").get();
//     const todos = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
//     dispatch(setTodos(todos));
//   } catch (error) {
//     dispatch(setError(error.message));
//   } finally {
//     dispatch(setLoading(false));
//   }
// };
