const {
  esMayorDeEdad,
  obtenerPrimeraPosicion,
  obtenerValorNulo,
  obtenerValorIndefinido,
  lanzarErrorSiNegativo,
  obtenerConfiguracionDefault,
  crearUsuario,
} = require("./funciones-varias.js");

test("esMayorDeEdad devuelve un valor truthy cuando la edad es 18 o más", () => {
  expect(esMayorDeEdad(18)).toBeTruthy();
  expect(esMayorDeEdad(25)).toBeTruthy();
});

test("esMayorDeEdad devuelve un valor falsy cuando la edad es menor a 18", () => {
  expect(esMayorDeEdad(17)).toBeFalsy();
  expect(esMayorDeEdad(0)).toBeFalsy();
});

test("obtenerPrimeraPosicion devuelve el primer elemento del arreglo usando toEqual", () => {
  const arreglo = [10, 20, 30];
  expect(obtenerPrimeraPosicion(arreglo)).toEqual(10);
});

test("obtenerValorNulo regresa exactamente null", () => {
  expect(obtenerValorNulo()).toBeNull();
});

test("obtenerValorIndefinido regresa exactamente undefined", () => {
  expect(obtenerValorIndefinido()).toBeUndefined();
});

test("lanzarErrorSiNegativo lanza un error cuando el numero es negativo", () => {
  expect(() => lanzarErrorSiNegativo(-5)).toThrow("Numero negativo");
});

test("obtenerConfiguracionDefault devuelve el objeto esperado con toEqual", () => {
  const esperado = {
    tema: "claro",
    notificaciones: true,
  };
  expect(obtenerConfiguracionDefault()).toEqual(esperado);
});

test("crearUsuario devuelve un objeto exactamente igual al esperado con toStrictEqual", () => {
  const resultado = crearUsuario("Ana", 30);
  const esperado = { nombre: "Ana", edad: 30 };
  expect(resultado).toStrictEqual(esperado);
});
