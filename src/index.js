import { homePage, userLogin, userRegister } from './lib/components/homePage.js';
import { signInUser, signUpUser, signInGoogle } from './lib/functions/auth.js';

const login = () => {
  document.getElementById('info-container').innerHTML = userLogin();
  signInUser();
  const registerButton = document.getElementById('register-button');
  registerButton.addEventListener('click', register);
  const googlebutton = document.getElementById('loginWithGoogle');
  googlebutton.addEventListener('click', signInGoogle)
};

const register = () => {
  document.getElementById('info-container').innerHTML = userRegister();
  signUpUser();
  const loginButton = document.getElementById('login-button');
  loginButton.addEventListener('click', login);
};

export const startFunction = () => {
  const homeFragment = document.createRange().createContextualFragment(homePage());
  const loginButton = homeFragment.getElementById('login-button');
  const registerButton = homeFragment.getElementById('register-button');
  const rootCall = document.getElementById('root');
  rootCall.appendChild(homeFragment);
  loginButton.addEventListener('click', login);
  registerButton.addEventListener('click', register);
  return homeFragment;
};
