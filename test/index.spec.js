import router from '../src/route.js';

describe('Pruebas de navegacion', () => {
    /*beforeEach(() => {
    global.firebase = jest.fn().mockResolvedValue({
      auth: jest.fn().mockResolvedValue({}),
    });
  });*/

  it('Rutas protegidas por sesion', () => {


    router.changeRouter = jest.fn();
    router.showTemplate = jest.fn();

    // Sin sesion
    router.changeRouter.mockImplementation(() => false);

    window.location.hash = '#/profile';
    router.changeRouter('#/profile');
    expect(window.location.hash).toBe('');

    window.location.hash = '#/home';
    router.changeRouter('#/home');
    expect(window.location.hash).toBe('');

    // Con sesion

    router.userVerification.mockImplementation(() => true);

    window.location.hash = '#/profile';
    router.changeRouter('#/profile');
    expect(window.location.hash).toBe('#/profile');

    window.location.hash = '#/home';
    router.changeRouter('#/home');
    expect(window.location.hash).toBe('#/home');

  });
});
