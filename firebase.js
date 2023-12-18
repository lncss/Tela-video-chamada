// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getFirestore, collection, addDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD9JWrGO4TL7kud0nWmmN43xY7nQeneJgU",
    authDomain: "videocall-bfd5a.firebaseapp.com",
    databaseURL: "https://videocall-bfd5a-default-rtdb.firebaseio.com",
    projectId: "videocall-bfd5a",
    storageBucket: "videocall-bfd5a.appspot.com",
    messagingSenderId: "43395021701",
    appId: "1:43395021701:web:b3f8ce3fc1cc2a823922ec",
    measurementId: "G-XP6CB37NND"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db, collection, addDoc, onSnapshot };