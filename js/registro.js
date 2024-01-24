import { createUserWithEmailAndPassword, auth, signInWithEmailAndPassword } from "./firebase.js";

const registroForm = document.querySelector("#formRegistro");

registroForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // El usuario se ha registrado correctamente
    const user = userCredential.user;
    console.log("UsuarioRegistrado: " + user.email + user.password);
    alert('Usuario Registrado correctamente');
    
  })
  .catch((e) => {
    // Manejo de errores
    const error = e.code;
    console.log(error);
    if(error === 'auth/weak-password'){
        console.log("Contraseña muy corta, min 6 caracteres");
    }else if(error === 'auth/email-already-in-use'){
        console.log("Correo en uso");
    }
    else if(error === 'auth/invalid-email'){
      console.log("Correo en formato no valido");
  }
  });
  event.target.reset();
});
