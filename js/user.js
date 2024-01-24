import { signOut,auth } from "./firebase.js";

cerrar.addEventListener('click',(e)=>{
    signOut(auth).then(()=>{  
      alert("Sesion cerrada");
      window.location.href='./index.html';
    }).catch((e)=>{
      alert("Error al cerrar sesion: "+e);
    });
  })
  