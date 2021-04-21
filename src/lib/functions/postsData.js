//const firestore = firebase.firestore();

export const savePost = () => {
  const createdPost = document.getElementById('writtePost').value;
  if (createdPost !== '') {
    return firestore
      .collection('posts')
      .add({
        userId: firebase.auth().currentUser.uid,
        userName: firebase.auth().currentUser.displayName,
        text: createdPost,
        privacy: document.getElementById('selectPrivacy').value,
        // Agregar imagenes, etiquetas
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .catch(function (error) {
        console.error('Error writing new message to database', error);
      });
  }
  window.location.hash='/#/home';
};

export const showPosts = () => {
  let posts = document.createElement('div');
  posts.className = 'postsView'
  posts.innerHTML = `<div class="commandBar">
                      <p id="commandText"> Publicaciones</p>
                      <select name="typePost">
                      <option value="Todas" label="Todas"></option>
                      <option value="publicas" label="Publicas"></option>
                      <option value="privadas" label="Privadas"></option>
                      </select> 
                    </div> `;
  let dataPosts = firebase
    .firestore()
    .collection('posts')
    .orderBy('timestamp', 'desc');
  //.limit(12);
  dataPosts.onSnapshot(function (snapshot) {
    snapshot.docChanges().forEach(function (change) {
      var post = change.doc.data();
      const posting = `
                    <div class='post'>
                    <div class='postUserphoto'></div>
                    <div class='postInfo'>
                      <h2 class='postedUsername'>${post.userName}</h2>
                      <p class='postedTime'>${post.timestamp
                        .toDate()
                        .toDateString()}</p>
                    </div>
                    <p class='postedText'>${post.text}</p>
                    </div>`;
      // Faltan los botones de mg, :( y comentar, historia de usuario 4
      posts.innerHTML += posting;
    });
  });
  return posts;
};
