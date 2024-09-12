import {
  addUser,
  removeUser,
  setUser,
  updateUser,
} from "../feature/userSlice.js";
import {
  db,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "../config/firebase.jsx";

// Fetch users from Firebase
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

// Add a new users to Firebase
export const createUser = (user) => async (dispatch) => {
  try {
    const docRef = await addDoc(collection(db, "users"), user);
    dispatch(addUser({ id: docRef.id, ...user }));
  } catch (error) {
    console.error("Error adding todo: ", error);
  }
};
export const deleteUser = (id) => async (dispatch) => {
  try {
    await deleteDoc(doc(db, "users", id));
    dispatch(removeUser(id));
  } catch (error) {
    console.error("Error deleting todo: ", error);
  }
};

// Update a users in Firebase
export const editUser = (user) => async (dispatch) => {
  try {
    await updateDoc(doc(db, "users", user.id), {
      ...user,
      updatedAt: new Date(),
    });
    // await updateDoc(doc(db, "users", user.id), user);
    dispatch(updateUser(user));
    console.log("dispatch update", user);
  } catch (error) {
    console.error("Error updating user: ", error);
  }
};
