import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword,signOut} from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js';
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyDuy80WWr13fQXBj_zw0UFhwZjXzkluD-s",
  authDomain: "web40-c19a8.firebaseapp.com",
  projectId: "web40-c19a8",
  storageBucket: "web40-c19a8.appspot.com",
  messagingSenderId: "422459363344",
  appId: "1:422459363344:web:ce5ce2d0393fa5d6b43a95",
  measurementId: "G-GYE8X6TKNH",
};
const app = initializeApp(firebaseConfig);

// Initialize Firebase

var auth = getAuth(app);

export { auth, signInWithEmailAndPassword,createUserWithEmailAndPassword,signOut};