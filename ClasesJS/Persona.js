class Persona {
  constructor(nombre, edad, ocupacion) {
    this.nombre = nombre;
    this.edad = edad;
    this.ocupacion = ocupacion;
  }

  saludar() {
    return `Hola, me llamo ${this.nombre}.`;
  }
  edadanterior() {
    return `${this.nombre} tiene ${this.edad} años por ahora.`;
  }

  cumplirAnios() {
    this.edad += 1;
    return `${this.nombre} ahora tiene ${this.edad} años.`;
  }

  describir() {
    return `${this.nombre} tiene ${this.edad} años y trabaja como ${this.ocupacion}.`;
  }
}

export default Persona; // si usas módulos ES6
// module.exports = Persona; // si usas CommonJS (Node.js)
