import { auth } from "../functions/auth.js";

export const profilePage =()=>{
  const profileTemplate = document.createElement('div');
  profileTemplate.className = 'userProfile';
  const profile = `<h1>Hola! ${auth.currentUser.displayName}</h1>`;
  profileTemplate.innerHTML = profile;
  return profileTemplate;
}
