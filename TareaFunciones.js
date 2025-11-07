/** 
 * Para las 15 funciones en lugar de separarlas por _
 * Usamos notación camello 
 * :)
**/

/** 
 * 1)
 * def saludar_usuario(nombre: str) -> None:
    """
    Imprime un saludo personalizado.
    Ejemplo de concatenación y salida por consola.
    """
    print("Hola, " + nombre + "! Bienvenido al curso de programación.")
 **/

function saludarUsuario (nombre)
{
    console.log("Hola, " + {nombre} + "! Bienvenido al curso de programación.");
}

/**
 * 2)
 * def repetir_texto(texto: str, veces: int) -> str:
    """
    Devuelve una cadena repetida 'veces' veces, separada por espacios.
    Ejemplo de concatenación y multiplicación de strings.
    """
    return (texto + " ") * veces
**/

function repetirTexto(texto, veces) 
{
    return (texto + " ").repeat(veces);
}

/**
 * 3)
 * def invertir_palabra(palabra: str) -> str:
    """
    Invierte una palabra usando slicing.
    """
    return palabra[::-1]
**/

function invertirPalabra(palabra) 
{
  return palabra.split("").reverse().join("");
}

/**
 * 4)
 * def contar_vocales(texto: str) -> int:
    """
    Cuenta cuántas vocales (a, e, i, o, u) hay en un texto.
    Ejemplo de bucles y condicionales.
    """
    contador = 0
    for letra in texto.lower():
        if letra in "aeiou":
            contador += 1
    return contador
**/
function contarVocales(texto) 
{
  let contador = 0;
  //los for son como en java 
  for (let letra of texto.toLowerCase()) {
    if ("aeiou".includes(letra)) {
      contador++;
    }
  }
  return contador;
}

/** 
 * 5)
 * def mayusculas_y_minusculas(texto: str) -> tuple[str, str]:
    """
    Devuelve el texto en mayúsculas y minúsculas.
    Ejemplo de métodos de string.
    """
    return texto.upper(), texto.lower()
**/

function mayusculasYMinusculas(texto) 
{
  return [texto.toUpperCase(), texto.toLowerCase()];
}

/**
 * 6)
 * def promedio_lista(numeros: list[float]) -> float:
    """
    Calcula el promedio de una lista de números.
    Ejemplo de sumas y longitud de listas.
    """
    if len(numeros) == 0:
        return 0
    return sum(numeros) / len(numeros)
**/

function promedioLista(numeros) 
{
  if (numeros.length === 0) return 0;
  const suma = numeros.reduce((acc, num) => acc + num, 0);
  return suma / numeros.length;
}

/**
 * 7)
def maximo_y_minimo(numeros: list[int]) -> tuple[int, int]:
    """
    Devuelve el valor máximo y mínimo de una lista.
    Ejemplo de uso de funciones integradas.
    """
    return max(numeros), min(numeros)
**/

function maximoYMinimo(numeros) 
{
  return [Math.max(...numeros), Math.min(...numeros)];
}

/**
 * 8)
def filtrar_pares(numeros: list[int]) -> list[int]:
    """
    Filtra y devuelve solo los números pares de una lista.
    Ejemplo de comprensión de listas.
    """
    return [n for n in numeros if n % 2 == 0]
*/

function filtrarPares(numeros) 
{
  return numeros.filter(n => n % 2 === 0);
}

/**
 * 9)
def sumar_elementos_texto(lista_textos: list[str]) -> str:
    """
    Une todos los elementos de una lista de cadenas en una sola frase.
    Ejemplo de concatenación con 'join'.
    """
    return " ".join(lista_textos)
**/

function sumarElementosTexto(listaTextos) 
{
  return listaTextos.join(" ");
}

/**
 * 10)
def buscar_elemento(lista: list, elemento) -> bool:
    """
    Verifica si un elemento está dentro de una lista.
    Ejemplo de uso del operador 'in'.
    """
    return elemento in lista
**/
function buscarElemento(lista, elemento) 
{
  return lista.includes(elemento);
}

/**
 * 11)
def contar_palabras(frase: str) -> int:
    """
    Cuenta cuántas palabras hay en una frase.
    Usa split() para separar por espacios.
    """
    palabras = frase.split()
    return len(palabras)
**/

function contarPalabras(frase) 
{
  const palabras = frase.trim().split(/\s+/);
  return palabras.length;
}

/**
 * 12)
def duplicar_elementos(lista: list[int]) -> list[int]:
    """
    Duplica cada número de una lista.
    Ejemplo de transformación con comprensión de listas.
    """
    return [x * 2 for x in lista]
**/

function duplicarElementos(lista) 
{
  return lista.map(x => x * 2);
}

/**
 * 13)
def capitalizar_palabras(frase: str) -> str:
    """
    Convierte la primera letra de cada palabra en mayúscula.
    Similar a 'title()'.
    """
    return frase.title()
**/
function capitalizarPalabras(frase) 
{
  return frase
    .split(" ")
    .map(p => p.charAt(0).toUpperCase() + p.slice(1).toLowerCase())
    .join(" ");
}

/**
 * 14)
def mezclar_listas(lista1: list, lista2: list) -> list:
    """
    Combina dos listas alternando sus elementos.
    Ejemplo de zip() y bucles.
    """
    combinada = []
    for a, b in zip(lista1, lista2):
        combinada.append(a)
        combinada.append(b)
    return combinada
**/

function mezclarListas(lista1, lista2) 
{
  const combinada = [];
  const longitud = Math.min(lista1.length, lista2.length);
  for (let i = 0; i < longitud; i++) {
    combinada.push(lista1[i], lista2[i]);
  }
  return combinada;
}

/**
 * 15)
def contar_frecuencia(lista: list) -> dict:
    """
    Devuelve un diccionario con la frecuencia de cada elemento.
    Ejemplo de diccionarios y conteo.
    """
    conteo = {}
    for item in lista:
        if item in conteo:
            conteo[item] += 1
        else:
            conteo[item] = 1
    return conteo
**/

function contarFrecuencia(lista) 
{
  const conteo = {};
  for (let item of lista) {
    conteo[item] = (conteo[item] || 0) + 1;
  }
  return conteo;
}
