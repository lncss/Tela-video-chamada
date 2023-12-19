// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getFirestore, collection, addDoc, onSnapshot, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAt5_HXFWm2eVarRnXQzbRlnXx8d-ygl5U",
  authDomain: "videocall-1e28e.firebaseapp.com",
  projectId: "videocall-1e28e",
  storageBucket: "videocall-1e28e.appspot.com",
  messagingSenderId: "146932861378",
  appId: "1:146932861378:web:1504061f4411dd1e826e5b",
  measurementId: "G-EZMBCG2V7T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth();

export { db, collection, addDoc, onSnapshot, getDocs, auth, createUserWithEmailAndPassword, sendPasswordResetEmail };