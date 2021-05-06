import services from './route.js';

const init = () => {
  services.initRouter();
};

window.addEventListener('load', init);
