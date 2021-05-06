import { showPosts } from '../functions/postsData.js';
import { likePost, showLikes } from '../functions/postInteractions.js';

export const commandBar = () => {
  const commandBarDiv = document.createElement('div');
  commandBarDiv.className = 'commandBar';
  commandBarDiv.innerHTML = `
                      <p id='commandText'> Publicaciones</p>
                      <select name='typePost'>
                      <option value='Todas' label='Todas'></option>
                      <option value='publicas' label='Publicas'></option>
                      <option value='privadas' label='Privadas'></option>
                      </select>`;
  return commandBarDiv;
};

export const post = () => {
  const data = showPosts();
  const posts = document.createElement('div');
  posts.className = 'posts';
  data.get().then((e) => {
    e.forEach((doc) => {
      const postId = doc.id;
      const post1 = doc.data();
      firebase
        .firestore()
        .collection('userInfo')
        .where('userId', '==', post1.userId)
        .get()
        .then((element) => {
          element.forEach((doc) => {
            const posting = `
                    <div class='postContainer' value='${postId}'>
                    <div class='post'>
                    <div class='postUserphoto'><img class='postUserphoto'src='${doc.data().profilePicture}'></div>
                    <div class='postInfo'>
                      <h2 class='postedUsername'>${doc.data().userName}</h2>
                      <p class='postedTime'>${post1.timestamp.toDate().toDateString()}</p>
                    </div>
                    <p class='postedText'>${post1.text}</p>
                    </div>
                    <div class='postButtons'>
                    <button id='like' class='likeButton' value='${postId}'><i id='fa-heart'class='fas fa-heart'></i></button>
                    <button id='dislike' class='dislikeButton'><i class='fas fa-frown'></i></button>
                    <button id='comment' class='commentButton' value='${postId}'><i class='far fa-comments'></i>Comentar</i></button>
                    </div>
                    </div>`;
            posts.innerHTML += posting;
          });
          const likeButton = document.querySelectorAll('#like');
          likeButton.forEach((item) => {
            item.addEventListener('click', () => likePost(item.value, item));
          });
          likeButton.forEach((item) => {
            item.addEventListener('onload', showLikes(item.value, item));
          });
        });
    });
  });
  return posts;
};
