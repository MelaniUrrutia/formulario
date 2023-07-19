const firebaseConfig = {
  apiKey: "AIzaSyAV-BHio7PaCMDpXgpX0rvNCu__aJ54TGs",
  authDomain: "registro-web-6cc63.firebaseapp.com",
  projectId: "registro-web-6cc63",
  storageBucket: "registro-web-6cc63.appspot.com",
  messagingSenderId: "122476844215",
  appId: "1:122476844215:web:3127002abcf4fb62c3a932"
};

  //initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //Llamar al auntenticador de firebase
  const auth = firebase.auth();
  

  // llamando elementos del DOM
  let btnAceptarIniciarSesion = document.getElementById('btnAceptarIniciarSesion');
  let btnAceptarRegistrate = document.getElementById('btnAceptarRegistrate');
   

//Funcion de registrar
btnAceptarRegistrate.addEventListener('click' , () => {
  let email = document.getElementById('emailRegistrate').value;
  let password = document.getElementById('passwordRegistrate').value;

  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    console.log('Registro exitoso');
    // Signed in 
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
}
) 

//Funcion de Ingresar
btnAceptarIniciarSesion.addEventListener('click', () =>{
  let email2 = document.getElementById('emailIniciarSesion').value;
  let password2 = document.getElementById('passwordIniciarSesion').value;
  console.log("Tu email es " + email2 + " y tu password2 es " + password2);

firebase.auth().signInWithEmailAndPassword(email2, password2)
  .then((userCredential) => {
    console.log('Iniciar sesion exitoso')
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });

})
