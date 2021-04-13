import { feedHome } from "../components/feed.js";

export const signUpUser = () =>{
  const signupForm = document.querySelector('#registerForm');
  signupForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  console.log(signupForm);
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;
  const passwordConfirmation = document.getElementById("confirm-password").value;
  if(password !== passwordConfirmation){
    document.querySelector('.error-control').textContent = 'Las contraseñas deben ser iguales'
  }
  console.log(email,password);
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      signupForm.reset();
    })
    .catch((error)=>{
      document.querySelector('.error-control').textContent = 'Correo electronico invalido'

    })

  });
}

export const signInUser = ()=>{
  const signInForm = document.querySelector('#loginForm');
  signInForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const email = document.getElementById("signing-email").value;
    const password = document.getElementById("signing-password").value;
    console.log(email,password)
    auth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
      signInForm.reset();
      document.getElementById('root').innerHTML=feedHome();
      })
      .catch((error)=>{
        console.log('contraseña incorrecta');
        document.querySelector('.error-control').textContent = 'contraseña incorrecta'

      })
  });

}
export const close = () => {
  e.preventDefault();
  auth.signOut
  .then(console.log('cerrado'));
  };
  
export const signInGoogle = e =>{
  e.preventDefault();
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
  .then(result => {
    document.getElementById('root').innerHTML=feedHome();
  })
}
