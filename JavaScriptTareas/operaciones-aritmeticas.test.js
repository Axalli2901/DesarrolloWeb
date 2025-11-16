// operaciones-aritmeticas.test.js

const {
  sumar,
  restar,
  multiplicar,
  dividir,
  modulo,
  operar,
} = require("./operaciones-aritmeticas.js");

test("Debe sumar dos números correctamente", () => {
  expect(sumar(2, 3)).toBe(5);
  expect(sumar(-1, 1)).toBe(0);
});

test("Debe restar dos números correctamente", () => {
  expect(restar(2, 3)).toBe(-1);
  expect(restar(10, 7)).toBe(3);
});

test("Debe multiplicar dos números correctamente", () => {
  expect(multiplicar(4, 3)).toBe(12);
  expect(multiplicar(-2, 5)).toBe(-10);
});

test("Debe dividir dos números correctamente", () => {
  expect(dividir(10, 2)).toBe(5);
  expect(dividir(-9, 3)).toBe(-3);
});

test("Debe lanzar un error al dividir entre cero usando toThrow", () => {
  expect(() => dividir(10, 0)).toThrow("No se puede dividir entre cero :(");
});

test("Debe calcular el módulo correctamente", () => {
  expect(modulo(10, 3)).toBe(1);
  expect(modulo(10, 2)).toBe(0);
});

test("Debe operar correctamente según el tipo de operación", () => {
  expect(operar(2, 3, "sumar")).toBe(5);
  expect(operar(5, 2, "restar")).toBe(3);
  expect(operar(4, 3, "multiplicar")).toBe(12);
  expect(operar(10, 2, "dividir")).toBe(5);
  expect(operar(10, 3, "modulo")).toBe(1);
});

test("Debe lanzar error si la operación no es válida", () => {
  expect(() => operar(2, 3, "potencia")).toThrow("Operación no válida");
});
