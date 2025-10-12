class Coche {
  constructor(marca, modelo, velocidadMaxima) {
    this.marca = marca;
    this.modelo = modelo;
    this.velocidadMaxima = velocidadMaxima;
    this.velocidadActual = 0;
  }

  acelerar(valor) {
    this.velocidadActual += valor;
    if (this.velocidadActual > this.velocidadMaxima) {
      this.velocidadActual = this.velocidadMaxima;
    }
    return `El coche está a ${this.velocidadActual} km/h.`;
  }

  frenar(valor) {
    this.velocidadActual -= valor;
    if (this.velocidadActual < 0) {
      this.velocidadActual = 0;
    }
    return `El coche frenó y ahora va a ${this.velocidadActual} km/h.`;
  }

  describir() {
    return `${this.marca} ${this.modelo} con velocidad máxima de ${this.velocidadMaxima} km/h.`;
  }
}

export default Coche;
// module.exports = Coche;
