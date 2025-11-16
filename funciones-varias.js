function esMayorDeEdad(edad) {
  return edad >= 18;
}

function obtenerPrimeraPosicion(arreglo) {
  return arreglo[0];
}

function obtenerValorNulo() {
  return null;
}

function obtenerValorIndefinido() {
  // No regresamos nada de forma explícita, lo que da undefined
  return undefined;
}

function lanzarErrorSiNegativo(numero) {
  if (numero < 0) {
    throw new Error("Numero negativo");
  }
  return numero;
}

function obtenerConfiguracionDefault() {
  return {
    tema: "claro",
    notificaciones: true,
  };
}

function crearUsuario(nombre, edad) {
  return {
    nombre: nombre,
    edad: edad,
  };
}

module.exports = {
  esMayorDeEdad,
  obtenerPrimeraPosicion,
  obtenerValorNulo,
  obtenerValorIndefinido,
  lanzarErrorSiNegativo,
  obtenerConfiguracionDefault,
  crearUsuario,
};
