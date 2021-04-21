export const newpost = () => {
  const newpostTemplate = document.createElement('div');
  newpostTemplate.className = 'createPost';
  const createpost = `<div class="userPost">
                      <div class="profileImage"><img class="profileImage"></div>
                      <textarea class="writtePost" id="writtePost" placeholder="Escribe algo aqui..." required></textarea>
                      </div>
                      <select name="typePost" id="selectPrivacy">
                        <option value="public" label="Publica"></option>
                        <option value="private" label="Privada"></option>
                      </select> 
                      <button class="postingButton">Publicar</button>`;
  newpostTemplate.innerHTML = createpost;
  return newpostTemplate;
};
