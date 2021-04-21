import { footer } from '../components/footer.js';
import { newpost } from '../components/posting.js';
import { topMenu } from '../components/topMenu.js';
import { leftSideBar, rightSideBar } from '../components/userSideBar.js';
import { close } from '../functions/auth.js';
import { savePost, showPosts } from '../functions/postsData.js';

export const feedBuilt =() =>{
  const rootContainer = document.getElementById('root');
  rootContainer.appendChild(topMenu());
  const feedContainer = document.createElement('div');
  feedContainer.className = 'feedGrid';
  rootContainer.appendChild(feedContainer);

  feedContainer.appendChild(leftSideBar())
  feedContainer.appendChild(newpost());
  feedContainer.appendChild(rightSideBar());
  feedContainer.appendChild(showPosts());
  rootContainer.appendChild(footer());

  const openMenu = document.querySelector('#openMenu');
  openMenu.addEventListener('click', openMenuFunction);
               
  const logoutButton = document.getElementById('logout-button');
  logoutButton.addEventListener('click', close);

  const createPost = document.querySelector('.postingButton');
  createPost.addEventListener('click', savePost); 
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
