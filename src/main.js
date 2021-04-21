import { initRouter } from './route.js';
import { userVerification } from '../route.js';

const init = () => {
  userVerification();
  initRouter();
};

window.addEventListener('load', init);
