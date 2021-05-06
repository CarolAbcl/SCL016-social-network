export const modalProfile = () => {
  const editProfileTemplate = document.createElement('div');
  editProfileTemplate.style.display = 'none';
  editProfileTemplate.className = 'modalProfile';
  editProfileTemplate.id = 'modalProfile';
  const editProfile = `<div class='profileModal'>
                        <h2 class='profileEdit'>Editar perfil</h2>
                        <i id='closeEditProfile' class='far fa-times-circle'></i>
                        <form id='editProfileForm' action='submit'>
                          <label for='img'>Imagen: </label>
                          <input class='editProfileInput' type='file' id='profileImage' name='img' accept='image/*'>
                          <label for='username'>Nombre:</label>
                          <input class='editProfileInput' type='text' id='usernameChanged' name='usernameChanged'><br>
                          <label for='userBio'>Sobre mi: </label>
                          <textarea type='tex' id='bioChanged' class='bioChanged editProfileInput' name='bioChanged'></textarea>
                          <input type='submit' value='Editar' class='editProfileButton'>
                        </form>
                      </div>`;
  editProfileTemplate.innerHTML = editProfile;
  return editProfileTemplate;
};

const closeModal = () => {
  document.getElementById('modalProfile').style.display = 'none';
};

export const openModal = (docId) => {
  const profileModal = document.getElementById('modalProfile');
  profileModal.style.display = 'block';
  const editProfileForm = document.getElementById('editProfileForm');
  editProfileForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const database = firebase.firestore().collection('userInfo').doc(docId);
    database
      .update({
        userBio: document.getElementById('bioChanged').value,
        userName: document.getElementById('usernameChanged').value,
      })
      .then(() => {
        document.getElementById('modalProfile').style.display = 'none';
        window.location.reload();
      });
  });
  document
    .getElementById('closeEditProfile')
    .addEventListener('click', closeModal);
};
