import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

// Replace with your Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyBf5xeTZ1snwzfVSciJhJGCdhHQOQJhkN8",
  authDomain: "redux-firebase-project-8f735.firebaseapp.com",
  projectId: "redux-firebase-project-8f735",
  storageBucket: "redux-firebase-project-8f735.appspot.com",
  messagingSenderId: "480378240081",
  appId: "1:480378240081:web:7485e86096b346c5808c70",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, getDocs, addDoc, deleteDoc, doc, updateDoc };

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBf5xeTZ1snwzfVSciJhJGCdhHQOQJhkN8",
//   authDomain: "redux-firebase-project-8f735.firebaseapp.com",
//   projectId: "redux-firebase-project-8f735",
//   storageBucket: "redux-firebase-project-8f735.appspot.com",
//   messagingSenderId: "480378240081",
//   appId: "1:480378240081:web:7485e86096b346c5808c70",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// export { db };
