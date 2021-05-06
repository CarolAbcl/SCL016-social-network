import { savePost } from '../functions/postsData.js';

export const newpost = () => {
  const newpostTemplate = document.createElement('div');
  newpostTemplate.className = 'createPost';
  const database = firebase.firestore().collection('userInfo');
  database
    .where('userId', '==', firebase.auth().currentUser.uid)
    .get()
    .then((e) => {
      e.forEach((doc) => {
        const createpost = `<div class='userPost'>
                      <div class='profileImage'><img class='profileImage' src='${doc.data().profilePicture}'></div>
                      <textarea class='writtePost' id='writtePost' placeholder='Escribe algo aqui...' required></textarea>
                      </div>
                      <div class='commandPosting'>
                      <select name='typePost' id='selectPrivacy'>
                        <option value='public' label='Publica'></option>
                        <option value='private' label='Privada'></option>
                      </select> 
                      <button class='postingButton' id='postingButton'>Publicar</button>
                      </div>`;
        newpostTemplate.innerHTML = createpost;
      });
      const createPost = document.getElementById('postingButton');
      createPost.addEventListener('click', savePost);
    });
  return newpostTemplate;
};
