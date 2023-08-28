/* Tema: Variables y Tipos de Datos

Pregunta: Declara una variable llamada precio y asígnale un valor numérico. Luego, crea otra variable llamada producto y asígnale una cadena de texto representando un producto. ¿Qué tipo de datos están almacenados en estas variables?

var precio = 50.99; // o cualquier otro valor numérico
var producto = "Camiseta"; // o cualquier otro nombre de producto
// 'precio' es de tipo número y 'producto' es de tipo cadena de texto (string).

- Respuesta: null se utiliza para indicar que una variable no tiene ningún valor asignado intencionalmente, mientras que undefined se utiliza cuando una variable se declara pero no se le asigna ningún valor.


Pregunta: En JavaScript, ¿cuál es la diferencia entre null y undefined? Proporciona un ejemplo de cómo se podría obtener cada uno de estos valores.



Pregunta: Define una variable llamada informacion que almacene un objeto con las propiedades nombre, edad y ciudad. Asigna valores correspondientes a estas propiedades y muestra la información completa por consola.

Pregunta: ¿Cuál es la diferencia entre declarar una variable usando let y const? Proporciona un ejemplo de cuándo usarías uno en lugar del otro.

Tema: Operadores de Comparación en JavaScript

Pregunta: Escribe un ejemplo de código que utilice el operador == para comparar si dos variables, a y b, son iguales en valor. Proporciona un ejemplo donde la comparación sea verdadera y otro donde sea falsa.

Pregunta: Utilizando operadores de desigualdad (!==, <=, >=), compara dos variables numéricas y muestra el resultado de cada comparación en la consola.

Pregunta: Dado un arreglo de números [10, 20, 30, 40], utiliza el operador > para verificar si algún número en el arreglo es mayor que 25.

Pregunta: Crea un ejemplo que demuestre la diferencia entre los operadores === y == en JavaScript.

Tema: Operadores Lógicos y de Desigualdad en JavaScript

Pregunta: Combina los operadores lógicos && y || en una expresión que evalúe si un número es divisible por 2 y 3 a la vez, o si es mayor que 100. Proporciona el código completo.

Pregunta: Explica qué es la "corta-circuitera" en el contexto de los operadores lógicos. Proporciona un ejemplo que demuestre cómo funciona este concepto.

Pregunta: Utiliza los operadores de desigualdad (!==, !>, !<) para comparar dos variables y determinar si no son iguales en valor. Proporciona un ejemplo para cada operador.

Pregunta: Escribe un ejemplo de código que use el operador ! para verificar si una variable booleana es falsa.

Tema: Arreglos y Objetos

Pregunta: Crea un arreglo vacío llamado numeros y luego agrega los números del 1 al 5 utilizando un bucle for. Muestra el contenido final del arreglo.

Pregunta: Define un objeto llamado persona con propiedades como nombre, edad y profesion. Luego, modifica la propiedad profesion para que tenga un nuevo valor. Proporciona el código completo.

Pregunta: Elimina el segundo elemento de un arreglo utilizando el método adecuado. Si el arreglo es [10, 20, 30, 40], muestra cómo quedaría después de la eliminación.

Pregunta: Crea un objeto llamado coche con propiedades como marca, modelo y anio. Luego, utiliza la palabra reservada delete para eliminar la propiedad modelo del objeto.

Tema: Funciones, For Loops y Métodos de Arreglos

Pregunta: Define una función llamada calcularPromedio que acepte un arreglo de números como parámetro y devuelva el promedio de esos números.

Pregunta: Utiliza un bucle for para recorrer un arreglo de cadenas de texto y mostrar cada cadena en la consola.

Pregunta: Dado un arreglo de números [3, 8, 12, 5, 10], utiliza el método .map() para multiplicar cada número por 2. Muestra el nuevo arreglo resultante.

Pregunta: Crea una función llamada filtrarMayoresEdad que acepte un arreglo de objetos de personas con propiedades nombre y edad, y devuelva un nuevo arreglo solo con las personas cuyas edades sean mayores de 18 años.
 */

Tema: Variables y Tipos de Datos

Respuesta:
javascript
Copy code
var precio = 50.99; // o cualquier otro valor numérico
var producto = "Camiseta"; // o cualquier otro nombre de producto
// 'precio' es de tipo número y 'producto' es de tipo cadena de texto (string).
Respuesta: null se utiliza para indicar que una variable no tiene ningún valor asignado intencionalmente, mientras que undefined se utiliza cuando una variable se declara pero no se le asigna ningún valor.
javascript
Copy code
var x = null; // x tiene un valor nulo
var y; // y está indefinido
Respuesta:
javascript
Copy code
var informacion = {
  nombre: "Juan",
  edad: 25,
  ciudad: "Buenos Aires"
};
console.log(informacion);
Respuesta: La diferencia principal entre let y const radica en que las variables declaradas con let pueden ser reasignadas, mientras que las variables declaradas con const no pueden ser reasignadas después de su declaración.
javascript
Copy code
let variable1 = 10;
const variable2 = "Hola";
variable1 = 20; // Reasignación permitida
// variable2 = "Adiós"; // Error: No se puede reasignar constante
Tema: Operadores de Comparación en JavaScript

Respuesta:
javascript
Copy code
var a = 5;
var b = "5";
console.log(a == b); // Verdadero (la comparación convierte los tipos)
console.log(a === b);  // Falso (comparación estricta de valor y tipo)
Respuesta:
javascript
Copy code
var num1 = 10;
var num2 = 20;
console.log(num1 !== num2); // Verdadero
console.log(num1 <= num2);  // Verdadero
console.log(num1 >= num2);  // Falso
Respuesta:
javascript
Copy code
var numeros = [10, 20, 30, 40];
var hayNumeroMayor = numeros.some(function(numero) {
  return numero > 25;
});
console.log(hayNumeroMayor); // Verdadero (hay un número mayor que 25)
Respuesta:
javascript
Copy code
var x = 5;
var y = "5";
console.log(x == y); // Verdadero (la comparación convierte los tipos)
console.log(x === y);  // Falso (comparación estricta de valor y tipo)
Tema: Operadores Lógicos y de Desigualdad en JavaScript

Respuesta:
javascript
Copy code
var numero = 18;
if ((numero % 2 === 0) && (numero % 3 === 0) || (numero > 100)) {
  console.log("Cumple la condición");
} else {
  console.log("No cumple la condición");
}
Respuesta: La "corta-circuitera" se refiere al comportamiento de los operadores lógicos (&& y ||) donde el segundo operando no se evalúa si el resultado ya se puede determinar por el primer operando.
javascript
Copy code
var x = 5;
var y = 10;
if (x > 0 && y > 5) {
  // El valor de x es suficiente para determinar que la condición es falsa, por lo que y > 5 no se evalúa.
}
Respuesta:
javascript
Copy code
var a = 10;
var b = 20;
console.log(a !== b); // Verdadero
console.log(a !> b);  // Verdadero
console.log(a !< b);  // Verdadero
Respuesta:
javascript
Copy code
var esFalso = false;
if (!esFalso) {
  console.log("Es verdadero");
} else {
  console.log("Es falso");
}