import { footer } from '../components/footer.js';
import { modalProfile } from '../components/modalProfile.js';
import { commandBarProfile, profilePage } from '../components/profile.js';
import { topMenu } from '../components/topMenu.js';
import { close } from '../functions/auth.js';
import { showUserPosts } from '../functions/postsData.js';

export const profileBuilt = () => {
  const rootContainer = document.getElementById('root');
  rootContainer.appendChild(topMenu());
  const profileContainer = document.createElement('div');
  profileContainer.className = 'profileGrid';
  rootContainer.appendChild(profileContainer);
  profileContainer.appendChild(profilePage());
  profileContainer.appendChild(commandBarProfile());
  profileContainer.appendChild(showUserPosts());

  rootContainer.appendChild(footer());
  rootContainer.appendChild(modalProfile());

  const openMenuFunction = () => {
    const showMenu = document.getElementById('menu');
    const displayMenu = showMenu.style.display;
    if (displayMenu === 'none' || displayMenu === '') {
      document.getElementById('menu').style.display = 'block';
    } else {
      document.getElementById('menu').style.display = 'none';
    }
  };

  const openMenu = document.getElementById('openMenu');
  openMenu.addEventListener('click', openMenuFunction);

  const logoutButton = document.getElementById('logout-button');
  logoutButton.addEventListener('click', close);
};
