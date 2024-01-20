import {getAuth, signInWithEmailAndPassword} from 'https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js';
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
var firebaseConfig = {
  apiKey: "AIzaSyDuy80WWr13fQXBj_zw0UFhwZjXzkluD-s",
  authDomain: "web40-c19a8.firebaseapp.com",
  projectId: "web40-c19a8",
  storageBucket: "web40-c19a8.appspot.com",
  messagingSenderId: "422459363344",
  appId: "1:422459363344:web:ce5ce2d0393fa5d6b43a95",
  measurementId: "G-GYE8X6TKNH",
};

// Initialize Firebase
var app = initializeApp(firebaseConfig);

var auth = getAuth(app);

const formLogin = document.querySelector("#formLogin");

formLogin.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  signInWithEmailAndPassword(auth,email,password).then(cred=>{
    alert('Credenciales Correctas/signIn');
    console.log('credeciales correctas');
    console.log(cred.user)
  }).catch(e=>{
    const errorCode = e.code;
    console.log(errorCode);
  })

});
