// src/redux/todoOperations.js
import { setTodos, setLoading, setError } from "../feature/todoSlice";
import { db } from "../firebase";

export const fetchTodos = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const snapshot = await db.collection("todos").get();
    const todos = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    dispatch(setTodos(todos));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};
