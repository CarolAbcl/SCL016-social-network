export const editPostModal = (id) => {
  const editpostTemplate = document.createElement('div');
  editpostTemplate.className = 'editPostModal';
  editpostTemplate.id = 'editPostModal';
  const editpost = `<div class='userPost'>
                        <form id='editPostForm' action='submit'>
                        <textarea class='writtePost' id='editPosttext'>${id.text}</textarea>
                        <div class='commandPosting'>
                        <select name='typePost' id='selectPrivacy'>
                        <option value='public' label='Publica'></option>
                        <option value='private' label='Privada'></option>
                        </select> 
                        </div>
                        <input type='submit' value='Editar' class='editProfileButton'>
                        <button class='editProfileButton' id='cancel'>Cancelar</button>
                        </form>
                    </div>`;
  editpostTemplate.innerHTML = editpost;
  return editpostTemplate;
};

export const editPost = (id) => {
  const rootContainer = document.getElementById('root');
  const database = firebase.firestore().collection('posts').doc(id);
  database.get().then((doc) => {
    rootContainer.appendChild(editPostModal(doc.data()));
    const editPostForm = document.getElementById('editPostForm');
    editPostForm.addEventListener('submit', (e) => {
      e.preventDefault();
      database
        .update({
          text: document.getElementById('editPosttext').value,
        })
        .then(() => {
          document.getElementById('editPostModal').style.display = 'none';
          window.location.reload();
        });
    });
    const cancelEditForm = document.getElementById('cancel');
    cancelEditForm.addEventListener('click', (e) => {
      e.preventDefault();
      document.getElementById('editPostModal').style.display = 'none';
      window.location.reload('#/profile');
    });
  });
};
