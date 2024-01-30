// Import the functions you need from the SDKs you need

import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBuucmXGqEMwsql2wZeRzjxeh1ItZOqRWY",
  authDomain: "evernote-c2569.firebaseapp.com",
  projectId: "evernote-c2569",
  storageBucket: "evernote-c2569.appspot.com",
  messagingSenderId: "830512154747",
  appId: "1:830512154747:web:bf612431c9fcbc96efbade",
  measurementId: "G-Q8RKZBV8BQ",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const dataRef = firebase.database();
export const storage = firebase.storage();
export default firebase;
