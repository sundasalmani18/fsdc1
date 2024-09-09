import { addUser, setUser } from "../feature/userSlice.js";
import {
  db,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "../config/firebase.jsx";

// Fetch todos from Firebase
export const fetchUsers = () => async (dispatch) => {
  try {
    const querySnapshot = await getDocs(collection(db, "users"));
    const users = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    dispatch(setUser(users));
  } catch (error) {
    console.error("Error fetching todos: ", error);
  }
};

// Add a new todo to Firebase
export const createUser = (user) => async (dispatch) => {
  try {
    const docRef = await addDoc(collection(db, "users"), user);
    dispatch(addUser({ id: docRef.id, ...user }));
  } catch (error) {
    console.error("Error adding todo: ", error);
  }
};
