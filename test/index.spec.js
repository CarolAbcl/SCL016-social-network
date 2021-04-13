// importamos la funcion que vamos a testear
import { startFunction } from '../src/lib/index';

describe('myFunction', () => {
  it('debería ser una función', () => {
    expect(typeof startFunction).toBe('function');
  });
});
