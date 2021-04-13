import {close} from '../functions/auth.js'

export const feedHome = () => {
  const feedTemplate =  `<h1>Bienvenida!</h1>
                          <button class='login-button' id='logout-button'>Cerrar sesion</button>
                        `
  return feedTemplate;
};

const logoutFragment = document.createRange().createContextualFragment(feedHome());
const logoutButton = logoutFragment.getElementById('logout-button');
console.log(logoutButton);
//logoutButton.addEventListener('click', close);
