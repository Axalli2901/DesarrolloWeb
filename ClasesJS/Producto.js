class Producto {
  constructor(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }

  calcularTotal() {
    return this.precio * this.cantidad;
  }

  aplicarDescuento(porcentaje) {
    const descuento = this.precio * (porcentaje / 100);
    this.precio -= descuento;
    return `El nuevo precio de ${this.nombre} es $${this.precio.toFixed(2)}.`;
  }

  reponer(stock) {
    this.cantidad += stock;
    return `Se repusieron ${stock} unidades. Total actual: ${this.cantidad}.`;
  }
}

export default Producto;
// module.exports = Producto;
