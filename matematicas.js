const suma = require('./suma');
const calculadora = require('./calculadora');

/**
 * Función para calcular el factorial de un número
 * @param {number} n - Número para calcular factorial
 * @returns {number} - Factorial de n
 */
function factorial(n) {
  if (n < 0) {
    throw new Error('El factorial no está definido para números negativos');
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

/**
 * Función para verificar si un número es primo
 * @param {number} num - Número a verificar
 * @returns {boolean} - true si es primo, false si no
 */
function esPrimo(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

module.exports = {
  suma,
  calculadora,
  factorial,
  esPrimo
};