function calculadora(a, b, operacion) {
  switch (operacion) {
    case 'suma':
      return a + b;
    case 'resta':
      return a - b;
    case 'multiplicacion':
      return a * b;
    case 'division':
      if (b === 0) {
        throw new Error('No se puede dividir por cero');
      }
      return a / b;
    default:
      throw new Error('Operación no válida');
  }
}

module.exports = calculadora;