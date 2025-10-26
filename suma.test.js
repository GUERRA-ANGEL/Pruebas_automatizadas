const suma = require('./suma');

test('3 + 5 = 8', () => {
  expect(suma(3, 5)).toBe(8);
});
