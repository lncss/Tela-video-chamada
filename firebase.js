// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtzrQhQHM5FxubxKvS0T2k8iGWwfrFKwc",
  authDomain: "videochamada-30e6f.firebaseapp.com",
  projectId: "videochamada-30e6f",
  storageBucket: "videochamada-30e6f.appspot.com",
  messagingSenderId: "605396899969",
  appId: "1:605396899969:web:00211a5d72de6ac5189580",
  measurementId: "G-VCF3ZBHE62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);