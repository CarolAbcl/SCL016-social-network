import { footer } from '../components/footer.js';
import { commandBar, post } from '../components/post.js';
import { newpost } from '../components/posting.js';
import { topMenu } from '../components/topMenu.js';
import { leftSideBar, rightSideBar } from '../components/userSideBar.js';
import { close } from '../functions/auth.js';

export const feedBuilt = () => {
  const rootContainer = document.getElementById('root');
  const feedContainer = document.createElement('div');
  feedContainer.className = 'feedGrid';
  rootContainer.appendChild(topMenu());

  rootContainer.appendChild(feedContainer);
  feedContainer.appendChild(leftSideBar());
  feedContainer.appendChild(newpost());
  feedContainer.appendChild(commandBar());
  feedContainer.appendChild(post());
  feedContainer.appendChild(rightSideBar());
  rootContainer.appendChild(footer());

  const openMenuFunction = () => {
    const showMenu = document.getElementById('menu');
    const displayMenu = showMenu.style.display;
    if (displayMenu === 'none' || displayMenu === '') {
      document.getElementById('menu').style.display = 'block';
    } else {
      document.getElementById('menu').style.display = 'none';
    }
  };
  const openMenu = document.querySelector('#openMenu');
  openMenu.addEventListener('click', openMenuFunction);

  const logoutButton = document.getElementById('logout-button');
  logoutButton.addEventListener('click', close);
};
