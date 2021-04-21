import {
  userLogin,
  userRegister,
  homePage,
} from './lib/components/homePage.js';
import {
  signInUser,
  signUpUser,
  signInGoogle,
  close,
} from './lib/functions/auth.js';
import { feedBuilt } from './lib/views/feedView.js';
import { profileBuilt } from './lib/views/userProfile.js';
 
let userFound = false;
// verifica si el usuario esta registrado
const userVerification = () => {
  firebase.auth().onAuthStateChanged((user) => {
    user ? (userFound = true) : (userFound = false);
    console.log(userFound); 
  });
  return userFound;
};

const rootContainer = document.getElementById('root');

const showTemplate = (hash) => {
  rootContainer.innerHTML = '';
  switch (hash) {
    case '':
      rootContainer.innerHTML = homePage();
      break;
    case '#/login':
      rootContainer.innerHTML = userLogin();
      signInUser();
      const googlebutton = document.getElementById('loginWithGoogle');
      googlebutton.addEventListener('click', signInGoogle);
      break;
    case '#/register':
      rootContainer.innerHTML = userRegister();
      signUpUser();
      const googleSignUp = document.getElementById('loginWithGoogle');
      googleSignUp.addEventListener('click', signInGoogle);
      break;
    case '#/home':
      feedBuilt();
      break;
    case '#/profile':
      profileBuilt();
      break;
  }
};

const changeRouter = (hash) => {
  this.userVerification();
  if(userFound == true){
    switch(hash){
      case '#/home':
        return showTemplate(hash); 
      case '#/profile':
        return showTemplate(hash); 
      default :
      window.location.hash = '#/home'  
    };
  }
  switch(hash){
    case '':
      return showTemplate(hash);
    case '#/login':
      return showTemplate(hash);
    case '#/register':
      return showTemplate(hash);   
    default :
    window.location.hash = '';
  }
};

const initRouter = () => {
  window.addEventListener('load', changeRouter(window.location.hash));
  // reconoce un cambio en el hash y le pasa ese nuevo hash a changeRouter
  if ('onhashchange' in window) {
    window.onhashchange = () => {
      changeRouter(window.location.hash);
    };
  }
};
export const router = {userVerification, changeRouter};
