export const homePage = () => {
  const main = `<div class='mainGrid'>
                  <div class='welcomeLogo'><img src="../images/femPage.png"></div>
                  <div class= 'info-container' id='info-container'> 
                  <div class= 'welcomeButtons'>
                  <h1>Una comunidad</h1>
                  <h1>para nosotras</h1>
                  <button class='login-button' id='login-button'>Iniciar sesion</button>
                  <button class='register-button' id='register-button'>Registrarse</button>
                  </div> 
                </div>
                  <div class='womenWelcome'><img src="../images/women.png"></div>
                  <div class='copyright'>fempage 2021</div>
              </div> 
              `            
  return main;
}

export const userLogin = () => {
  const loginForm = `<form class= 'loginForm' id= 'loginForm'>
                  <p class='textForm'>Correo</p>   
                  <input type="email" id="signing-email"  placeholder="Ingresa tu correo aquí" required>
                  <p class='textForm'>Contraseña</p>
                  <input type="password" id="signing-password" placeholder="******" required>
                  <p class='error-control'></p>
                  <button class='login-button' type="submit">Log in</button>
                </form>
                  <button class='loginWithGoogle' id='loginWithGoogle' >Ingresar con Google</button> 
                <p class='infoLink'>Aun no te unes?<a class='link' id='register-button'> Registrate!</a></p> `
  return loginForm;              
}

export const userRegister = () => {
 const registerForm = `<form class= 'registerForm' id= 'registerForm'>
                      <p class='textForm'>Nombre de Usuario</p>
                      <input type="text" id="userName"  placeholder="Nombre de Usuario" required>
                      <p class='textForm'>Correo electrónico</p>
                      <input type="email" id="signup-email"  placeholder="Correo electrónico" required>
                      <p class='textForm'>Contraseña</p>
                      <input type="password" id="signup-password" placeholder="******" required>
                      <p class='textForm'>Confirmar contraseña</p>
                      <input type="password" id="confirm-password" placeholder="******" required>
                      <p class='error-control'></p>
                      <button class='register-button' type="submit">Registrar</button>
                      </form> 
                      <p class='infoLink'>Ya eres miembro?<a class='link' id='login-button'> Iniciar Sesion</a></p>`
  return registerForm;                  
}