export const leftSideBar = () => {
  const leftSide = document.createElement('div');
  leftSide.className = 'leftBar';
  const database = firebase.firestore().collection('userInfo');
  database
    .where('userId', '==', firebase.auth().currentUser.uid)
    .get()
    .then((e) => {
      e.forEach((doc) => {
        const userInfo = doc.data();
        const innerBar = `<div class='userSideBar'>
      <div class='sidebarImage'><img class='sidebarImage' src='${userInfo.profilePicture}'></div>
      <h2 class='sideBarUserName'><a href='#/profile'>${userInfo.userName}</a></h2>
      <p class='sideBarUserBio'>${userInfo.userBio}</p>
    </div>`;
        leftSide.innerHTML = innerBar;
      });
    });
  return leftSide;
};

export const rightSideBar = () => {
  const rightSide = document.createElement('div');
  rightSide.className = 'rightBar';
  const innerBar = `
                    derecha
                    `;
  rightSide.innerHTML = innerBar;
  return rightSide;
};
