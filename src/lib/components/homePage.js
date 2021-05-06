export const homePage = () => {
  const main = `  <div class='mainGrid'>
                  <div class='welcomeLogo' ><a href=''><img src="images/femPage.png"></a></div>
                  <div class= 'info-container' id='info-container'> 
                  <div class= 'welcomeButtons'>
                  <h1>Una comunidad <br>para nosotras</h1>
                  <a href='#/login'><button class='login-button' id='login-button'>Iniciar sesión</button></a>
                  <a href='#/register'><button class='register-button' id='register-button'>Registrarse</button></a>
                  </div> 
                </div>
                  <div class='womenWelcome'><img src="images/women.png"></div>
                  <div class='copyright'>fempage 2021</div>
                </div>`;
  return main;
};
export const userLogin = () => {
  const loginForm = `<div class='mainGrid'>
                <div class='welcomeLogo'><a href=''><img src="images/femPage.png"></a></div>
                <div class= 'info-container' id='info-container'> 
                <form class= 'loginForm' id= 'loginForm'>
                  <p class='textForm'>Correo</p>   
                  <input type="email" id="signing-email"  placeholder="Ingresa tu correo aquí" required>
                  <p class='textForm'>Contraseña</p>
                  <input type="password" id="signing-password" placeholder="******" required>
                  <p class='error-control'></p>
                  <button class='login' type="submit">Iniciar Sesión</button>
                </form>
                <button class='loginWithGoogle' id='loginWithGoogle'><img class='logoGoogle'src="images/LogoGoogle.png"></button> 
                <p class='infoLink'>Aun no te unes? <a href='#/register' class='link' id='register-button'>Registrate!</a></p>
                </div>
                <div class='womenWelcome'><img src="images/women.png"></div>
                <div class='copyright'>fempage 2021</div></div>
                `;
  return loginForm;
};

export const userRegister = () => {
  const registerForm = `<div class='mainGrid'>
                    <div class='welcomeLogo'><a href=''><img src="images/femPage.png"></a></div>
                    <div class= 'info-container' id='info-container'>
                    <form class= 'registerForm' id= 'registerForm'>
                      <p class='textForm'>Nombre de Usuario</p>
                      <input type="text" id="userName"  placeholder="Nombre de Usuario" required>
                      <p class='textForm'>Correo electrónico</p>
                      <input type="email" id="signup-email"  placeholder="Correo electrónico" required>
                      <p class='textForm'>Contraseña</p>
                      <input type="password" id="signup-password" placeholder="******" required>
                      <p class='textForm'>Confirmar contraseña</p>
                      <input type="password" id="confirm-password" placeholder="******" required>
                      <p class='error-control'></p>
                      <button class='register' type="submit">Registrar</button>
                      </form> 
                      <button class='loginWithGoogle' id='loginWithGoogle'><img class='logoGoogle'src="images/LogoGoogle.png"></button>
                      <p class='infoLink'>Ya eres miembro? <a href='#/login' class='link' id='login-button'>Iniciar Sesion</a></p>
                      <div class='womenWelcome'><img src="images/women.png"></div>
                     <div class='copyright'>fempage 2021</div>
                    </div>`;
  return registerForm;
};
