import { editPost } from '../components/modalPostEdit.js';

// save a new post in firestore
export const savePost = () => {
  const createdPost = document.getElementById('writtePost').value;
  if (createdPost !== '') {
    return firebase
      .firestore()
      .collection('posts')
      .add({
        userId: firebase.auth().currentUser.uid,
        userName: firebase.auth().currentUser.displayName,
        text: createdPost,
        privacy: document.getElementById('selectPrivacy').value,
        postLikes: [],
        postDislikes: [],
        // Agregar imagenes, etiquetas
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.error('Error writing new message to database', error);
      });
  }
};

// obtaining post from the database
export const showPosts = () => {
  const dataPosts = firebase
    .firestore()
    .collection('posts')
    .orderBy('timestamp', 'desc');
  return dataPosts;
};

let showMenuEditcontrol = true;

// detele user post
const deletePost = (id) => {
  const isConfirm = window.confirm('Segura que quieres borrar este post!');
  if (isConfirm === true) {
    firebase
      .firestore()
      .collection('posts')
      .doc(id)
      .delete()
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.error('Error removing document: ', error);
      });
  }
};

// show posts of the current user
export const showUserPosts = () => {
  const userPosts = document.createElement('div');
  userPosts.className = 'profileFeed';
  const dataPosts = firebase
    .firestore()
    .collection('posts')
    .orderBy('timestamp', 'desc');
  dataPosts
    .where('userId', '==', firebase.auth().currentUser.uid)
    .get()
    .then((querySnapShot) => {
      querySnapShot.forEach((doc) => {
        const arrayUserPosts = doc.data();
        const userPostsTemplate = `<div class='postContainer' value='${doc.id}'>
                                <div class='post'>
                                <div class='postUserphoto'></div>
                                <div class='postInfo'>
                                <h2 class='postedUsername'>${arrayUserPosts.userName}
                                <i id ='editPost' class='fas fa-ellipsis-h'>
                                <div id='menuEdit' class='menuEdit'>
                                    <button id = 'editPostButton' value='${doc.id}'>Editar</button></a>
                                    <button id ='deletepost' value='${doc.id}'>Borrar</button>
                                 </div>
                                 </i>
                                </h2>
                                </div>
                                <p class='postedTime'>${arrayUserPosts.timestamp.toDate().toDateString()}</p>
                                <p class='postedText'>${arrayUserPosts.text}</p>
                                </div>
                                <div class='postButtons'>
                                <button id='like' class='likeButton'>${arrayUserPosts.postLikes.length}<i class='fas fa-heart'></i></button>
                                <button id='dislike' class='dislikeButton'><i class='fas fa-frown'></i></button>
                                <button id='comment' class='commentButton'><i class='far fa-comments'></i>Comentar</i></button>
                                </div>
                                </div>`;
        userPosts.innerHTML += userPostsTemplate;
      });
      const clickEdit = document.querySelectorAll('#editPostButton');
      clickEdit.forEach((item) => {
        item.addEventListener('click', () => editPost(item.value));
      });
      const clickDelete = document.querySelectorAll('#deletepost');
      clickDelete.forEach((item) => {
        item.addEventListener('click', () => deletePost(item.value));
      });
      const openMenuEdit = document.querySelectorAll('#editPost');
      openMenuEdit.forEach((item) => {
        item.addEventListener('click', () => {
          const showitem = item;
          if (showMenuEditcontrol === true) {
            showitem.childNodes[1].style.display = 'block';
            showMenuEditcontrol = false;
          } else {
            showitem.childNodes[1].style.display = 'none';
            showMenuEditcontrol = true;
          }
        });
      });
    })
    .catch((err) => console.log(err));
  return userPosts;
};
