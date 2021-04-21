//import {changeRouter, userVerification} from '../src/route.js';
import {router} from '../src/route.js';

//jest.mock('router');
/*const userVerification = jest.fn();
console.log(myMock());
// > undefined
*/


describe ('casos de prueba navegación', () =>{
  it ('si userFound es igual a true ', () =>{
    router.userVerification= jest.fn();
    router.userVerification.mockReturnValueOnce(true);
    router.changeRouter('#/register');
    expect ( window.location.hash).toBe ('#/home');
  });
});

