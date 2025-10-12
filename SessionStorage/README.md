# Session Storage en JavaScript

## ¿Qué es el Session Storage?

Session Storage es parte de la API de almacenamiento web de HTML5, al igual que `localStorage`.  
Su función es almacenar datos temporalmente en el navegador del usuario, durante la sesión que este en curso.  
Esto significa que los datos permanecen solo mientras la pestaña o ventana del navegador esté abierta.  
Una vez que el usuario cierra la pestaña o el navegador, toda la información almacenada se eliminará automáticamente.

Su estructura se basa en pares clave–valor (key–value), igual que `localStorage`, y solo puede almacenar cadenas de texto (strings).  
Para guardar otros tipos de datos (como objetos o arreglos), es necesario convertirlos con `JSON.stringify()` y recuperarlos con `JSON.parse()`.



## Propiedades principales

El objeto `sessionStorage` pertenece al objeto global `window`, por lo tanto, se accede como `window.sessionStorage`.

Las propiedades más importantes son:

| Propiedad | Descripción |
|------------|-------------|
| **length** | Indica el número total de elementos almacenados en el Session Storage. |
| **key(n)** | Devuelve el nombre clave (llave/id) de la posición indicada. |
| **setItem(clave, valor)** | Almacena un clave–valor. Si la clave (llave) ya existe, reemplaza el valor. |
| **getItem** | Recupera el valor asociado a la clave (id) indicada. |
| **removeItem** | Elimina el elemento con la clave indicada. |
| **clear()** | Elimina todos los elementos almacenados. |


## Estructura y funcionamiento

El Session Storage se comporta como un objeto tipo diccionario o almacén de pares clave–valor, donde:

- Las claves y valores siempre se guardan como texto.
- Los datos se asocian al origen del sitio web.
- Cada pestaña o ventana abierta del navegador tiene su propio Session Storage aislado.
- No hay comunicación ni sincronización entre distintas pestañas o dispositivos.

Su almacenamiento es *temporal y limitado*.


## Como se usa

Para utilizar `sessionStorage` correctamente, deben cumplirse los siguientes puntos:

1. El navegador debe soportar la API de almacenamiento web. 
2. El sitio web debe ejecutarse bajo un contexto seguro (HTTPS) si se manipulan datos sensibles.
3. Los datos se almacenan únicamente en el cliente (navegador), no se envían al servidor.
4. No se deben guardar información privada o confidencial, ya que puede ser leída por scripts del mismo dominio.



## Diferencias entre Session Storage y LocalStorage

Ambos pertenecen a la API Web Storage, pero difieren en *duración*, *persistencia* y *alcance*.  


| Característica | **Session Storage** | **Local Storage** |
|----------------|---------------------|-------------------|
| **Duración** | Solo mientras la pestaña o ventana del navegador esté abierta. Se elimina al cerrarla. | Permanece incluso después de cerrar el navegador o apagar el equipo. |
| **Persistencia** | Temporal. | Permanente (hasta que el usuario o el código lo borren). |
| **Alcance** | Aislado por pestaña o ventana. No se comparte entre diferentes pestañas del mismo sitio. | Compartido entre todas las pestañas y ventanas del mismo dominio. |
| **Sincronización** | No sincroniza entre pestañas ni ventanas. | Se puede entrar desde cualquier pestaña del mismo dominio. |
| **Eliminación automática** | Al cerrar la pestaña o ventana. | Manual (o con `localStorage.clear()` o `removeItem()`). |
| **Uso común (ejemplos de uso)** | Datos de sesión, formularios temporales, información de navegación momentánea. | Preferencias de usuario, configuraciones que se quedan, historial. |




Entonces Session Storage es una herramienta útil cuando se necesita guardar información del usuario por un periodo de tiempo  mientras navega dentro de una misma sesión.  
Ofrece un modo rápido y seguro (siempre que se use correctamente) de almacenar datos sin depender de bases de datos o cookies.  


Es ideal para casos donde la persistencia no es deseada.
