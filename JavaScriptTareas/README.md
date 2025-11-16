# Métodos de expect en jest

En Jest, la función expect permite hacer afirmaciones sobre el resultado de nuestro código. Además de toBe, existen otros métodos que nos ayudan a validar diferentes tipos de valores y comportamientos de forma más precisa.

## .toEqual()
toEqual compara el valor de dos variables por contenido. Es decir, revisa que arreglos y objetos tengan las mismas propiedades y valores, aunque no sean la misma referencia en memoria. Es útil para comprobar que una función devuelve un objeto o arreglo con la estructura esperada.

## .toBeTruthy()
toBeTruthy pasa cuando el valor evaluado es considerado verdadero por JavaScript. No exige que el valor sea exactamente true, solo que no sea falsy. Por ejemplo, cadenas no vacías, números distintos de cero y objetos hacen que la expectativa sea verdadera.

## .toBeFalsy()
toBeFalsy pasa cuando el valor evaluado es considerado falso por JavaScript. Esto incluye valores como 0, cadena vacía, null, undefined, NaN y false. Es útil para comprobar que una función devuelve algo que se evalúa como falso en condiciones if.

## .toBeNull()
toBeNull verifica específicamente que el valor sea null. No acepta undefined ni otros valores falsy. Se usa cuando una función debe indicar ausencia explícita de valor con null, por ejemplo cuando una búsqueda no encuentra resultados.

## .toBeUndefined()
toBeUndefined verifica que el valor sea undefined. Es útil para asegurar que una función no devolvió nada, que una variable no está inicializada o que una propiedad no existe en un objeto. A diferencia de toBeNull, aquí solo se acepta undefined.

## .toThrow()
toThrow se usa para comprobar que una función lanza un error al ejecutarse. Se combina con expect envolviendo la función en otra función, por ejemplo expect(() => miFuncion()).toThrow(). Permite verificar tanto que se lance un error como que el mensaje del error sea el esperado, y evita tener que usar bloques try y catch en las pruebas.

## .toStrictEqual()
toStrictEqual compara valores como toEqual pero de forma más estricta. Además del contenido, revisa detalles como el tipo exacto, el prototipo del objeto y la presencia o ausencia de propiedades. Se usa cuando queremos asegurarnos de que el resultado coincide exactamente con la estructura esperada, sin diferencias sutiles.