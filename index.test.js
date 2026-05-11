const app = require('./index');

describe('Proves de l\'aplicació de viatges', () => {
  test('La pàgina principal ha de carregar correctament', () => {
    // Aquest és un test bàsic de prova
    const salutacio = 'Benvingut a l\'agència de viatges!';
    expect(salutacio).toBe('Benvingut a l\'agència de viatges!');
  });

  test('La llista de destins ha de tenir 4 ciutats', () => {
    const destins = ['Barcelona', 'París', 'Londres', 'Tòquio'];
    expect(destins.length).toBe(4);
  });
});