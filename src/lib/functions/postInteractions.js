// verifies if the user like post already
export const isLiked = (likes) => {
  for (let i = 0; i < likes.length; i += 1) {
    if (likes[i] === firebase.auth().currentUser.displayName) {
      return true;
    }
  }
  return false;
};

// like function 
export const likePost = (postId, likeButton) => {
  const corelike = likeButton;
  firebase
    .firestore()
    .collection('posts')
    .doc(postId)
    .get()
    .then((doc) => {
      const userName = firebase.auth().currentUser.displayName;
      const findUserLike = isLiked(doc.data().postLikes);
      if (findUserLike === true) {
        firebase
          .firestore()
          .collection('posts')
          .doc(postId)
          .update({
            postLikes: firebase.firestore.FieldValue.arrayRemove(userName),
          });
        corelike.style.background = '#7EB3DD';
      } else {
        firebase
          .firestore()
          .collection('posts')
          .doc(postId)
          .update({
            postLikes: firebase.firestore.FieldValue.arrayUnion(userName),
          });
        corelike.style.background = '#797ad4';
      }
    });
};

// verifies if the current user put like in the posts
export const showLikes = (postId, button) => {
  const button1 = button;
  firebase
    .firestore()
    .collection('posts')
    .doc(postId)
    .get()
    .then((doc) => {
      const likes = doc.data().postLikes;
      for (let i = 0; i < likes.length; i += 1) {
        if (likes[i] === firebase.auth().currentUser.displayName) {
          button1.style.background = '#797ad4';
        } else {
          button1.style.background = '#7EB3DD';
        }
      }
    });
};
