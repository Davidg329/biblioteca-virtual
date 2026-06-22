# Biblioteca Virtual - Modulo de Integracion Continua

Este modulo contiene la logica de prestamos de la Biblioteca Virtual (`prestamos.js`),
junto con sus pruebas unitarias (`prestamos.test.js`).

Incluye un pipeline configurado en GitHub Actions (`.github/workflows/pipeline.yml`) que
ejecuta automaticamente las pruebas cada vez que se sube un cambio al repositorio o se
abre un pull request hacia la rama `main`.

## Funcionalidades cubiertas

- Calculo de multas por retraso en la devolucion de un libro.
- Validacion de disponibilidad de copias para realizar un prestamo.
- Validacion de reglas de renovacion de prestamos.

## Ejecutar las pruebas localmente

```bash
npm install
npm test
```
