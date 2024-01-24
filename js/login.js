import { auth, signInWithEmailAndPassword,signOut } from "./firebase.js";

const formLogin = document.querySelector("#formLogin");

formLogin.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  signInWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      console.log("credeciales correctas");
      window.location.href = "./home.html";
    })
    .catch((e) => {
      const error = e.code;
      if(error==='auth/invalid-credential'){
        console.log('Correo o contraseña incorrecta');
        alert("Credenciales incorrectas");
      }
      else if(error==='auth/user-disabled'){
        console.log('Cuenta Deshabilitada');
      }
    });
});
