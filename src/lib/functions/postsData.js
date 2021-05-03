import { editPost }  from '../components/modalPostEdit.js'
//const firestore = firebase.firestore();

export const savePost = () => {
  const createdPost = document.getElementById('writtePost').value;
  if (createdPost !== '') {
    return firebase.firestore()
      .collection('posts')
      .add({
        userId: firebase.auth().currentUser.uid,
        userName: firebase.auth().currentUser.displayName,
        text: createdPost,
        privacy: document.getElementById('selectPrivacy').value,
        postLikes : [],
        postDislikes :[],
        // Agregar imagenes, etiquetas
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
      .catch(function (error) {
        console.error('Error writing new message to database', error);
      });
  }
};

export const showPosts = () => {
  let dataPosts = firebase
    .firestore()
    .collection('posts')
    .orderBy('timestamp', 'desc');
  //.limit(12);
  return dataPosts;
};

export const showUserPosts = () => {
  const userPosts = document.createElement('div');
  userPosts.className = 'profileFeed';
  let dataPosts = firebase
  .firestore()
  .collection('posts')
  .orderBy('timestamp', 'desc');
  dataPosts.where( "userId", "==", firebase.auth().currentUser.uid)
  .get()
  .then((querySnapShot) => {
    querySnapShot.forEach((doc) => {
      let arrayUserPosts = doc.data();
      console.log(currentUserInfo())
      const userPostsTemplate = `<div class='postContainer' value="${doc.id}">
                                <div class='post'>
                                <div class='postUserphoto'><img class='postUserphoto' src="${currentUserInfo()}"></div>
                                <div class='postInfo'>
                                <h2 class='postedUsername'>${arrayUserPosts.userName}
                                <i id ='editPost' class="fas fa-ellipsis-h">
                                <div id='menuEdit' class="menuEdit">
                                    <button id = 'editPostButton' value='${doc.id}'>Editar</button></a>
                                    <button id ='deletepost' value='${doc.id}'>Borrar</button>
                                 </div>
                                 </i>
                                </h2>
                                </div>
                                <p class='postedTime'>${arrayUserPosts.timestamp
                                  .toDate()
                                  .toDateString()}</p>
                                <p class='postedText'>${arrayUserPosts.text}</p>
                                </div>
                                <div class="postButtons">
                                <button id="like" class="likeButton"><i class="fas fa-heart"></i></button>
                                <button id="dislike" class="dislikeButton"><i class="fas fa-frown"></i></button>
                                <button id="comment" class="commentButton"><i class="far fa-comments"></i>Comentar</i></button>
                                </div>
                                </div>`;
    userPosts.innerHTML += userPostsTemplate;
  });  
    const clickEdit = document.querySelectorAll('#editPostButton');
    clickEdit.forEach(item => {item.addEventListener('click', () => editPost (item.value))});
    const clickDelete = document.querySelectorAll('#deletepost');
    clickDelete.forEach(item => {item.addEventListener('click', () => deletePost (item.value))});
    const openMenuEdit = document.querySelectorAll('#editPost');
    openMenuEdit.forEach(item => {item.addEventListener('click', function () {
    if (showMenuEditcontrol === true){
      item.childNodes[1].style.display='block';
      showMenuEditcontrol = false;
    }else {
      item.childNodes[1].style.display='none';
      showMenuEditcontrol = true;
    }}
    )});
  })
  .catch(err => console.log(err));
  return userPosts;
};
let showMenuEditcontrol = true;

const deletePost = (id) => {
  console.log('entra a delete' + id);
    if (confirm("Segura que quieres borrar este post!")) {
      firebase.firestore().collection("posts").doc(id).delete().then(() => {
        console.log("Document successfully deleted! " + id);
    }).catch((error) => {
      console.error("Error removing document: ", error);
    })
    windows.location.reload();
}
};

const currentUserInfo =()=>{
  let database = firebase
  .firestore()
  .collection('userInfo');
  const holi = database.where( "userId", "==", firebase.auth().currentUser.uid)
  .get()
  console.log(holi)
  /*.then((e) => {
    e.forEach((doc) => {
    return doc.data();
    })
  })*/
}