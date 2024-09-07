import { addTodo, removeTodo, updateTodo, setTodos } from "../feature/actions";
import {
  db,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "../firebase";

// Fetch todos from Firebase
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

// Add a new todo to Firebase
export const createTodo = (todo) => async (dispatch) => {
  try {
    const docRef = await addDoc(collection(db, "todos"), todo);
    dispatch(addTodo({ id: docRef.id, ...todo }));
  } catch (error) {
    console.error("Error adding todo: ", error);
  }
};

// Remove a todo from Firebase
export const deleteTodo = (id) => async (dispatch) => {
  try {
    await deleteDoc(doc(db, "todos", id));
    dispatch(removeTodo(id));
  } catch (error) {
    console.error("Error deleting todo: ", error);
  }
};

// Update a todo in Firebase
export const editTodo = (todo) => async (dispatch) => {
  try {
    await updateDoc(doc(db, "todos", todo.id), todo);
    dispatch(updateTodo(todo));
  } catch (error) {
    console.error("Error updating todo: ", error);
  }
};
