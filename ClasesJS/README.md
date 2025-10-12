# Clases en JavaScript

## Definicón

Las **clases** en JavaScript son una forma moderna de crear objetos y manejar herencia de una manera más legible y ordenada. 
Aunque parecen similares a las clases en otros lenguajes (como Java o Python), en realidad son una especie de 'objetos' sobre los prototipos de JavaScript.

## Componentes

Una clase define una plantilla para crear objetos con propiedades y comportamientos comunes.  
En su estructura puede incluir:

- **Un constructor**, que es una función especial que se ejecuta automáticamente al crear una nueva instancia.  
- **Métodos**, que son funciones asociadas al comportamiento de la clase.  
- **Propiedades**, que son los datos asociados a cada instancia o al propio prototipo.  
- **Métodos estáticos**, que pertenecen a la clase en sí y no a sus instancias.  
- **Campos privados o públicos**, que determinan el nivel de acceso a los datos internos del objeto.

## Funcionamiento y Herencia

Cuando se define una clase, JavaScript realiza los siguientes pasos:

1. Crea una función constructora, es como el método `constructor` definido dentro de la clase.  
   Esta función se comporta igual que cualquier otra función en JavaScript que se usa como constructor.

2. Crea un prototipo asociado a la clase, que almacena todos los métodos definidos en ella. (esto va a servir para la herencia después pues puede convertirse en padre)
   Todas las instancias creadas a partir de esa clase comparten este mismo prototipo. 

3. Úne el prototipo del constructor al de la clase padre (si existe herencia con `extends`).  
   Esto permite que las instancias de la subclase también tengan los métodos y propiedades de la clase superior.

4. Ejecuta el constructor por medio de `new` cuando se instancia una clase.  
   Crea un nuevo objeto, lo asocia al prototipo que debe y corre el constructor con el contexto (`this`) apuntando a ese nuevo objeto.

JavaScript permite crear clases que heredan de otras mediante la palabra clave `extends`.  
Internamente, esto establece la cadena de prototipos entre las clases. La herencia crea una referencia entre prototipos; no copia código.

## Polimorfismo y sobrescritura

El polimorfismo es cuando una subclase redefine un método heredado de la clase padre, adaptándolo a su propio comportamiento.  
Cuando esto ocurre, el método original sigue existiendo en el prototipo de la clase padre, pero el método redefinido en la subclase sobrescribe al anterior cuando se invoca desde la subclase.

JavaScript tambien deja llamar al método de la clase base por medio de `super`, lo que hace más facil que la funcion original se extienda sin reemplazarla completamente.




# JavaScript en la práctica

## Cómo se define una clase
Se utiliza la palabra clave `class` seguida del nombre de la clase.  
El método especial `constructor()` se ejecuta automáticamente cuando se crea una nueva instancia de la clase.

Ejemplo:
```js
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
}
```
## Cómo se crean objetos 
Para crear un objeto (instancia) de una clase, se usa la palabra clave `new`

Ejemplo:
```js
const persona1 = new Persona("Axa", 22);
console.log(persona1.nombre); //imprime Axa
console.log(persona1.edad);   // muestra la edad (22)
```

## Métodos en una clase
Los métodos son funciones que pertenecen a una clase.
Se definen directamente dentro del cuerpo de la clase, sin usar la palabra `function`.

Ejemplo:
```js
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(Hola, soy ${this.nombre} y tengo ${this.edad} años.);
  }
}

const persona2 = new Persona("Tochi", 30);
persona2.saludar(); 
// Para que imprima Hola, soy Tochi y tengo 30 años.

```

## Métodos estáticos 
Un método estático pertenece a la clase, no a sus instancias.
Se accede directamente con el nombre de la clase.

Ejemplo:
```js
class Calculadora {
  static sumar(a, b) {
    return a + b;
  }
}

console.log(Calculadora.sumar(5, 7)); // 12
```

## Herencia
Podemos heredar una clase para crear otra basada en ella.
La palabra clave `extends` permite heredar, y `super()` llama al constructor de la clase padre.

Ejemplo:
```js
class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }

  hacerSonido() {
    console.log("Hace un sonido genérico");
  }
}

class Perro extends Animal {
  constructor(nombre, raza) {
    super(nombre); // Llama al constructor de Animal
    this.raza = raza;
  }

  hacerSonido() {
    console.log("Guau!");
  }
}

const miPerro = new Perro("Firulais", "Labrador");
miPerro.hacerSonido(); 

```

## Encapsulación
Desde ES2022, se pueden usar campos privados con el prefijo `#`.
Solo se puede acceder a ellos dentro de la clase.

Ejemplo:
```js
class CuentaBancaria {
  #saldo = 0;

  depositar(cantidad) {
    this.#saldo += cantidad;
  }

  verSaldo() {
    return this.#saldo;
  }
}

const cuenta = new CuentaBancaria();
cuenta.depositar(100);
console.log(cuenta.verSaldo()); // 100
console.log(cuenta.#saldo); //Error: campo privado

```

<br>
Las clases en JavaScript hacen que el código orientado a objetos sea más claro y estructurado.
Permiten manejar propiedades, métodos, herencia y encapsulación, haciendo que el código sea más reutilizable y mantenible.
