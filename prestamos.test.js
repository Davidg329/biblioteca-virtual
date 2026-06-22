// prestamos.test.js
// Casos de prueba del modulo de prestamos

const { calcularMulta, puedeRealizarPrestamo, puedeRenovar } = require('./prestamos');

describe('calcularMulta', () => {
  test('sin retraso (15 dias o menos) la multa es 0', () => {
    expect(calcularMulta(15)).toBe(0);
  });

  test('con 3 dias de retraso la multa es de 4500', () => {
    // PRUEBA ROTA A PROPOSITO para generar el estado fallido (pipeline en rojo)
    // El valor correcto es 4500, aqui se deja un valor incorrecto de forma intencional
    expect(calcularMulta(18)).toBe(8000);
  });

  test('con 10 dias de retraso la multa es de 15000', () => {
    expect(calcularMulta(25)).toBe(15000);
  });
});

describe('puedeRealizarPrestamo', () => {
  test('si hay copias disponibles, retorna true', () => {
    expect(puedeRealizarPrestamo(5, 2)).toBe(true);
  });

  test('si todas las copias estan prestadas, retorna false', () => {
    expect(puedeRealizarPrestamo(5, 5)).toBe(false);
  });
});

describe('puedeRenovar', () => {
  test('no puede renovar si tiene multa pendiente', () => {
    expect(puedeRenovar(3000, 0)).toBe(false);
  });

  test('puede renovar si no tiene multa y no ha superado el limite', () => {
    expect(puedeRenovar(0, 1)).toBe(true);
  });

  test('no puede renovar si ya alcanzo el limite de renovaciones', () => {
    expect(puedeRenovar(0, 2)).toBe(false);
  });
});
