import { openModal } from './modalProfile.js';

export const profilePage = () => {
  const profileTemplate = document.createElement('div');
  profileTemplate.className = 'userProfile';
  const database = firebase.firestore().collection('userInfo');
  database
    .where('userId', '==', firebase.auth().currentUser.uid)
    .get()
    .then((e) => {
      e.forEach((doc) => {
        const userInfo = doc.data();
        const profile = `<div class='userInfoContainer'>
        <div class='profileImage'><a><img id = 'userImage' class='profileImage' src='${userInfo.profilePicture}'></a></div>
        <h2 class='userName'>${userInfo.userName} <button id='editProfileButton' class='editProfile'><i id='editProfileButton' class='far fa-edit'></i></button> </h2>
        <p class='userBio'>${userInfo.userBio}</p>
        <div class='userLinks'>
          <a class='userFriends'>Amigas(13) </a>
          <a class='userRooms'>Mis Salas(4)</a>
        </div>
    </div>`;
        profileTemplate.innerHTML = profile;
        const showModal = document.getElementById('editProfileButton');
        showModal.addEventListener('click', () => openModal(doc.id));
      });
    });
  return profileTemplate;
};

export const commandBarProfile = () => {
  const commandBarProfile1 = document.createElement('div');
  commandBarProfile1.className = 'commandBarProfile';
  commandBarProfile1.innerHTML = `
                      <p id='commandText'> Publicaciones</p>
                      <select name='typePost'>
                      <option value='Todas' label='Todas'></option>
                      <option value='publicas' label='Publicas'></option>
                      <option value='privadas' label='Privadas'></option>
                      </select>`;
  return commandBarProfile1;
};
