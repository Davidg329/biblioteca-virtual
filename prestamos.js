// prestamos.js
// Logica basica del sistema de prestamos de la Biblioteca Virtual

const DIAS_PRESTAMO_ESTANDAR = 15;
const VALOR_MULTA_POR_DIA = 1500;

// Calcula cuantos dias de retraso tiene un libro y la multa correspondiente
function calcularMulta(diasTranscurridos) {
  const diasRetraso = diasTranscurridos - DIAS_PRESTAMO_ESTANDAR;

  if (diasRetraso <= 0) {
    return 0;
  }

  return diasRetraso * VALOR_MULTA_POR_DIA;
}

// Revisa si un libro puede ser prestado segun las copias disponibles
function puedeRealizarPrestamo(copiasTotales, copiasPrestadas) {
  const disponibles = copiasTotales - copiasPrestadas;
  return disponibles > 0;
}

// Determina si un usuario puede renovar el prestamo (solo si no tiene multas pendientes)
function puedeRenovar(multaPendiente, vecesRenovado) {
  const LIMITE_RENOVACIONES = 2;

  if (multaPendiente > 0) {
    return false;
  }

  return vecesRenovado < LIMITE_RENOVACIONES;
}

// Permite reservar un libro cuando no hay copias disponibles, siempre que el usuario
// no tenga reservas activas previas (maximo 1 reserva simultanea por usuario)
function puedeReservarLibro(copiasDisponibles, reservasActivasUsuario) {
  if (copiasDisponibles > 0) {
    return false; // si hay copias disponibles, no es necesario reservar
  }

  return reservasActivasUsuario === 0;
}

module.exports = { calcularMulta, puedeRealizarPrestamo, puedeRenovar, puedeReservarLibro };
