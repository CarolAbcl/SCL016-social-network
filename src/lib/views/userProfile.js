import { footer } from "../components/footer.js";
import { profilePage } from "../components/profile.js";
import { topMenu } from "../components/topMenu.js";
import { close } from "../functions/auth.js";

export const profileBuilt = () =>{
  const rootContainer = document.getElementById('root');
  rootContainer.appendChild(topMenu());
  const profileContainer = document.createElement('div');
  //profileContainer.className = 'feedGrid';
  rootContainer.appendChild(profileContainer);
  profileContainer.appendChild(profilePage());

  rootContainer.appendChild(footer());

  const openMenu = document.querySelector('#openMenu');
  openMenu.addEventListener('click', openMenuFunction);
               
  const logoutButton = document.getElementById('logout-button');
  logoutButton.addEventListener('click', close);
}

let showMenu = true;
const openMenuFunction = (e) => {
  if (showMenu === true){
    document.getElementById('menu').style.display='block';
    showMenu = false;
  }
  else {
    document.getElementById('menu').style.display='none';
    showMenu = true;
  } 
};
