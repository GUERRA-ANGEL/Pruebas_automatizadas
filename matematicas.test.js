const { suma, calculadora, factorial, esPrimo } = require('./matematicas');

describe('Funciones Matemáticas Adicionales', () => {
  
  describe('Factorial', () => {
    test('factorial de 0 debe ser 1', () => {
      expect(factorial(0)).toBe(1);
    });

    test('factorial de 1 debe ser 1', () => {
      expect(factorial(1)).toBe(1);
    });

    test('factorial de 5 debe ser 120', () => {
      expect(factorial(5)).toBe(120);
    });

    test('factorial de 4 debe ser 24', () => {
      expect(factorial(4)).toBe(24);
    });

    test('factorial de número negativo debe lanzar error', () => {
      expect(() => factorial(-1)).toThrow('El factorial no está definido para números negativos');
    });
  });

  describe('Números Primos', () => {
    test('2 es primo', () => {
      expect(esPrimo(2)).toBe(true);
    });

    test('3 es primo', () => {
      expect(esPrimo(3)).toBe(true);
    });

    test('17 es primo', () => {
      expect(esPrimo(17)).toBe(true);
    });

    test('4 no es primo', () => {
      expect(esPrimo(4)).toBe(false);
    });

    test('9 no es primo', () => {
      expect(esPrimo(9)).toBe(false);
    });

    test('1 no es primo', () => {
      expect(esPrimo(1)).toBe(false);
    });

    test('0 no es primo', () => {
      expect(esPrimo(0)).toBe(false);
    });
  });

  describe('Integración con funciones existentes', () => {
    test('suma usando la función importada', () => {
      expect(suma(3, 4)).toBe(7);
    });

    test('calculadora usando la función importada', () => {
      expect(calculadora(10, 5, 'division')).toBe(2);
    });
  });
});