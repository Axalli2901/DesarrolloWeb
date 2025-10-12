// Verifica si el navegador soporta sessionStorage
if (typeof(Storage) === "undefined") {
  console.error("Este navegador no soporta Session Storage.");
} else {
  console.log("Session Storage disponible.");
}

/* -------------------------------------------------------------
   Inserción
---------------------------------------------------------------*/
function insertarDato(clave, valor) {
  sessionStorage.setItem(clave, valor);
  console.log(`Dato guardado: [${clave}] = "${valor}"`);
}

/* --------------------------------------------------------------
   Consultar si un dato 
   - Devuelve el valor si existe, o null si no existe.
-----------------------------------------------------------*/
function consultarDato(clave) {
  const valor = sessionStorage.getItem(clave);
  if (valor !== null) {
    console.log(`Valor encontrado: [${clave}] = "${valor}"`);
  } else {
    console.log(`No existe ningún valor con la clave "${clave}".`);
  }
  return valor;
}

/* ------------------------------------------------------------
   Verificar si un dato existe
   - Devuelve true si existe la clave, false si no.
--------------------------------------------------------------*/
function existeDato(clave) {
  return sessionStorage.getItem(clave) !== null;
}

/* ---------------------------------------------------------------
   Eliminación
----------------------------------------------------------------*/
function eliminarDato(clave) {
  if (existeDato(clave)) {
    sessionStorage.removeItem(clave);
    console.log(`Dato con clave "${clave}" eliminado correctamente.`);
  } else {
    console.log(`No se encontró la clave "${clave}" para eliminar.`);
  }
}

/* ----------------------------------------------------------
   Borrar info
-----------------------------------------------------------*/
function limpiarSession() {
  sessionStorage.clear();
  console.log("Session Storage completamente limpiado.");
}

/* --------------------------------------------------------
   Mostrar todo el contenido del Session Storage
---------------------------------------------------------*/
function mostrarTodo() {
  console.log("Contenido actual de Session Storage:");
  for (let i = 0; i < sessionStorage.length; i++) {
    const clave = sessionStorage.key(i);
    const valor = sessionStorage.getItem(clave);
    console.log(` - [${clave}] = "${valor}"`);
  }
}

/*-----------------------------------------------------------
Para las pruebas 
---------------------------------------------------------- */

// insertarDato("usuario", "Axalli");
// insertarDato("rol", "Administrador");
// consultarDato("usuario");
// eliminarDato("rol");
// mostrarTodo();
// limpiarSession();


