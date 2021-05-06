import {
  userLogin,
  userRegister,
  homePage,
} from './lib/components/homePage.js';
import { signInUser, signUpUser, signInGoogle } from './lib/functions/auth.js';
import { feedBuilt } from './lib/views/feedView.js';
import { profileBuilt } from './lib/views/userProfile.js';

// show the interface for each hash
const rootContainer = document.getElementById('root');
const showTemplate = (hash) => {
  rootContainer.innerHTML = '';
  switch (hash) {
    case '': {
      rootContainer.innerHTML = homePage();
      break;
    }
    case '#/login': {
      rootContainer.innerHTML = userLogin();
      signInUser();
      const googlebutton = document.getElementById('loginWithGoogle');
      googlebutton.addEventListener('click', signInGoogle);
      break;
    }
    case '#/register': {
      rootContainer.innerHTML = userRegister();
      signUpUser();
      const googleSignUp = document.getElementById('loginWithGoogle');
      googleSignUp.addEventListener('click', signInGoogle);
      break;
    }
    case '#/home': {
      feedBuilt();
      break;
    }
    case '#/profile': {
      profileBuilt();
      break;
    }
  }
};

// identifies if the user is login and show the correct page
const changeRouter = (hash) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      switch (hash) {
        case '#/home':
          return services.showTemplate(hash);
        case '#/profile':
          return services.showTemplate(hash);
        default:
          window.location.hash = '#/home';
      }
    }
    switch (hash) {
      case '':
        return services.showTemplate(hash);
      case '#/login':
        return services.showTemplate(hash);
      case '#/register':
        return services.showTemplate(hash);
      default:
        window.location.hash = '';
    }
  });
};

// recognizes a change in the hash and passes the new hash to changerouter
const initRouter = () => {
  window.addEventListener('load', changeRouter(window.location.hash));
  if ('onhashchange' in window) {
    window.onhashchange = () => {
      changeRouter(window.location.hash);
    };
  }
};

const services = {
  showTemplate,
  initRouter,
  changeRouter,
};

export default services;
