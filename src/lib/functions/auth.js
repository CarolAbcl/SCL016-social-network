// Register a new user with his email and password
export const signUpUser = () => {
  const signupForm = document.querySelector('#registerForm');
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('userName').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const passwordConfirmation = document.getElementById('confirm-password')
      .value;
    // verifies if the passwords are the same
    if (password !== passwordConfirmation) {
      document.querySelector('.error-control').textContent = 'Las contraseñas deben ser iguales';
    }
    // if data is correct save it in firebase
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        firebase
          .firestore()
          .collection('userInfo')
          .add({
            userId: firebase.auth().currentUser.uid,
            userEmail: email,
            userName: name,
            userBio: `Hola, mi nombre es  ${name}`,
            profilePicture: '/images/DefaultProfile.png',
          });
        userCredential.user.updateProfile({
          displayName: name,
        });
        window.location.href = '#/home';
      })
      .catch(() => {
        document.querySelector('.error-control').textContent = 'Correo electronico invalido';
      });
  });
};
// user login
export const signInUser = () => {
  const signInForm = document.querySelector('#loginForm');
  signInForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('signing-email').value;
    const password = document.getElementById('signing-password').value;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log(userCredential);
        window.location.href = '#/home';
      })
      .catch(() => {
        document.querySelector('.error-control').innerHTML = 'Contraseña incorrecta, <a class="link" id="register-button"> olvidaste tu contraseña?</a>';
      });
  });
};

// logout session from feed
export const close = (e) => {
  e.preventDefault();
  firebase
    .auth()
    .signOut()
    .then(() => {
      window.location.hash = '';
    });
};

// login with google
export const signInGoogle = (e) => {
  e.preventDefault();
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      // if the user already exist we sign in and redirect to the home page
      let userFound = false;
      const user = firebase
        .firestore()
        .collection('userInfo')
        .where('userId', '==', result.user.uid);
      user.get().then((el) => {
        el.forEach((doc) => {
          if (doc.exists) {
            userFound = true;
            window.location.href = '#/home';
            return userFound;
          }
          userFound = false;
          return userFound;
        });
        // a new user its created to our userInfo database
        if (userFound === false) {
          firebase
            .firestore()
            .collection('userInfo')
            .add({
              userId: result.user.uid,
              userEmail: result.user.email,
              userName: result.user.displayName,
              userBio: ` Hola, mi nombre es ${result.user.displayName}`,
              profilePicture: result.user.photoURL,
            });
          window.location.href = '#/home';
        }
      });
    });
};
