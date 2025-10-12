import Persona from "./Persona.js";
import Coche from "./Coche.js";
import Producto from "./Producto.js";

const persona1 = new Persona("Axa", 28, "Ingeniera");
console.log(persona1.saludar());
console.log(persona1.edadanterior());
console.log(persona1.cumplirAnios());
console.log(persona1.describir());

const coche1 = new Coche("Toyota", "Corolla", 200);
console.log(coche1.describir());
console.log(coche1.acelerar(50));
console.log(coche1.frenar(20));

const producto1 = new Producto("Laptop", 15000, 2);
console.log(producto1.calcularTotal());
console.log(producto1.aplicarDescuento(10));
console.log(producto1.reponer(5));
