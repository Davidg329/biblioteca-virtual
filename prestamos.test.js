// prestamos.test.js
// Casos de prueba del modulo de prestamos

const { calcularMulta, puedeRealizarPrestamo, puedeRenovar, puedeReservarLibro } = require('./prestamos');

describe('calcularMulta', () => {
  test('sin retraso (15 dias o menos) la multa es 0', () => {
    expect(calcularMulta(15)).toBe(0);
  });

  test('con 3 dias de retraso la multa es de 4500', () => {
    expect(calcularMulta(18)).toBe(4500);
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

describe('puedeReservarLibro', () => {
  test('no permite reservar si hay copias disponibles', () => {
    expect(puedeReservarLibro(2, 0)).toBe(false);
  });

  test('permite reservar si no hay copias y el usuario no tiene reservas activas', () => {
    expect(puedeReservarLibro(0, 0)).toBe(true);
  });

  test('no permite reservar si el usuario ya tiene una reserva activa', () => {
    expect(puedeReservarLibro(0, 1)).toBe(false);
  });
});
