const calculadora = require('./calculadora');

describe('Calculadora', () => {
  test('suma: 5 + 3 = 8', () => {
    expect(calculadora(5, 3, 'suma')).toBe(8);
  });

  test('resta: 10 - 4 = 6', () => {
    expect(calculadora(10, 4, 'resta')).toBe(6);
  });

  test('multiplicacion: 6 * 7 = 42', () => {
    expect(calculadora(6, 7, 'multiplicacion')).toBe(42);
  });

  test('division: 15 / 3 = 5', () => {
    expect(calculadora(15, 3, 'division')).toBe(5);
  });

  test('division por cero lanza error', () => {
    expect(() => {
      calculadora(10, 0, 'division');
    }).toThrow('No se puede dividir por cero');
  });

  test('operación inválida lanza error', () => {
    expect(() => {
      calculadora(5, 3, 'potencia');
    }).toThrow('Operación no válida');
  });

  test('números decimales: 1.5 + 2.7 = 4.2', () => {
    expect(calculadora(1.5, 2.7, 'suma')).toBeCloseTo(4.2);
  });

  test('números negativos: -5 + 3 = -2', () => {
    expect(calculadora(-5, 3, 'suma')).toBe(-2);
  });
});