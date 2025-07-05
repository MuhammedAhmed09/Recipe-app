// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBLNt7sOs9LQ6wJo88rA9CrEOX6UNMa00",
  authDomain: "recipe-app-4dc52.firebaseapp.com",
  projectId: "recipe-app-4dc52",
  storageBucket: "recipe-app-4dc52.firebasestorage.app",
  messagingSenderId: "358022698531",
  appId: "1:358022698531:web:6e5104e235573db06ec396",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);