/* 
LOOP DE PARES
Debés crear una función llamada loopDePares que reciba como parámetro un número 

y haga un loop de 0 a 100 mostrando en la consola cada número del loop. 

En caso de que el número de la iteración sumado con el número pasado por parámetro, sea par, mostrá en la consola “El número x es par”.
*/

function loopDePares(number) {
    for (let i = 0; i <= 100; i++) {
      //operadores ternarios : () ? if : else
  
      (number + i) % 2
        ? console.log(i)
        : console.log("El numero " + (number + i) + "es par");
    }
  }
  
  loopDePares(1);
  
  ("------------------------------------------------------");
  
  function loopPar(num) {
    for (let i = 0; i <= 100; i++) {
      if ((i + num) % 2 == 0) {
        console.log(i);
      }
    }
  }
  
  ("--------------------------------------------------------------");
  
  function loopDePares(number) {
    for (let i = 0; i < 100; i++) {
      const suma = i + number; // sumamos el iterador con el numero pasado por parametro
      if (suma % 2 === 0) {
        // comprobamos si es par
        console.log(`El numero ${i} es par`);
      } else {
        console.log(i);
      }
    }
  }
  loopDePares(7);
  
  /* LOOP DE IMPARES CON PALABRA
  Debés crear una función llamada loopDeImpares 
  
  que reciba como parámetro un número y una palabra 
  
  y haga un loop de 0 a 100 mostrando en la consola cada número del loop. 
  
  Ahora, modificar el código para que, en caso de que ese número sumado con el número pasado por parámetro sea impar, muestre en la consola la palabra pasada por parámetro.
   */
  
  /* function loopDeImpares(number, string) {
    for (let i = 0; i <= 100; i++) {
      if ((number + i) % 2 != 0) {
        console.log(string);
      } else {
        console.log(i);
      }
    }
  } */
  
  function loopDeImpares(number, string) {
    for (let i = 0; i <= 100; i++) {
      (number + i) % 2 !== 0 ? console.log(string) : console.log(i);
    }
  }
  
  loopDeImpares(3, "plataforma5");
  
  ("-------------------------------------------------");
  
  function loopDeImpares(number, str) {
    for (let i = 0; i < 100; i++) {
      const suma = i + number; // sumamos el iterador con el numero pasado por parametro
      if (suma % 3 === 0) {
        // comprobamos si es impar
        console.log(`${str}`);
      } else {
        console.log(i);
      }
    }
  }


/* 
Sumatoria
	Debés crear una función llamada `sumattion` que reciba un número como parámetro y que devuelva la sumatoria de todos sus números anteriores, incluso ese mismo.

Ejemplo: 
sumattion(3) debe retornar 6 porque hace (1 +2 +3)
sumattion(8) debe retornar 36

 */

function sumattion(numero) {
    let suma = 0;
    for (let i = 0; i <= numero; i++) {
      suma += i; //sumamos el numero con sus anteriores
    }
    return console.log(suma);
  }
  sumattion(3); //6
  sumattion(8); //36

/* Nuevo Arreglo

Debés crear una función llamada `nuevoArreglo`
que reciba un número como parámetro
y que devuelva un nuevo arreglo con tantos elementos como el número que le hayas pasado.

Ejemplo: 

nuevoArreglo(5) debe retornar [1,2,3,4,5]
nuevoArreglo(10) debe retornar [1,2,3,4,5,6,7,8,9,10]
 */

/* function nuevoArreglo(number) {
  let newArray = [];

  for (let i = 0; i < number; i++) {
    newArray[i] = i + 1;
  }
  return newArray;
} */

// push: agregarme o pushiarme los numeros que estan en mi indice a la variable que yo le estoy indicando

/* function nuevoArreglo(number) {
  let newArray = [];

  for (let i = 0; i <= number - 1; i++) {
    newArray.push(i + 1);
  }

  return newArray;
} */

function nuevoArreglo(number) {
    let newArray = [];
  
    for (let i = 1; i <= number; i++) {
      newArray.push(i);
    }
  
    return newArray;
  }
  
  nuevoArreglo(10);

/* Similar String

Debés crear una función llamada `split`
que reciba un `string` 
y simule el comportamiento de la función original, Si no sabés cómo funciona, Google puede ayudarte..

Importante: No podés usar el String.split()

El método split(), separa un String y lo convierte en un Arreglo con sus distintas posiciones.

Ejemplo: 

split(“hola”) debe retornar [“h”,”o”,”l”,”a”]
split(“chau”) debe retornar [“c”,”h”,”a”,”u”]
 */
function split(palabra) {
    let array = [];
  
    for (let i = 0; i < palabra.length; i++) {
      array[i] = palabra[i];
    }
    return array;
  }
  ("---------------------------------------------------------------");
  //El método push() añade uno o más elementos al final de un array y devuelve la nueva longitud del array.
  function split(str) {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
      arr.push(str[i]);
    }
    return arr;
  }
  
  split("Bienvenidos");


/* Manejando dos arreglos
Debés crear una función llamada `arrayHandler` que reciba dos arreglos de igual largo como parámetros y muestre en la consola “Soy {elemento de array 1} y yo soy {elemento de array 2}”.

Ejemplo:
arrayHandler([1,2,3,4], [“h”,”o”,”l”,”a”]) debe mostrar: 

Soy 1 y yo soy h
Soy 2 y yo soy o
Soy 3 y yo soy l
Soy 4 y yo soy a
*/


  
  //for Loop
  function arrayHandler(array1, array2) {
    for (let i = 0; i < array1.length; i++) {
      console.log("Soy " + array1[i] + " y yo soy " + array2[i]);
    }
  }
  arrayHandler([1, 2, 3, 4], ["h", "o", "l", "a"]);
  
  /* --------------------------------------------------------- */
  
  const arrayHandler = (arr1, arr2) => {
    let i = 0;
    while (i < arr1.length) {
      console.log("Soy " + arr1[i] + " y yo soy " + arr2[i]);
      i++;
    }
  };


/* PALINDROMO
  
Deben crear una función llamada “palíndromo” que indique si una palabra es palíndroma o no, debe retornar true en el caso que sea, y false en el caso que no.
  
  
Ejemplo: 

  palindromo("anilina") debe retornar true
  palindromo("Ana") debe retornar true
  palindromo("Enrique") debe retornar false */

//.join: une todos los elementos de una matriz (o un objeto similar) en una cadena y devuelve esta cadena
//.split(): nos sirve para dividir una cadena de caracteres en partes!
//.reverse: invierte los elementos que tengamos dentro de un arreglo o matriz ; el primer elemento pasa a ser el ultimo y el ultimo elemento pasa a ser el primero

const palindromo = (palabra) => {
    palabra = palabra.toLowerCase(); //para que reconozca palindromos con mayuscula y con minuscula
    //generar en la misma variable los caracteres invertidos
    //primero dividirlos en un arreglo, revertirlos y los vamos a juntar de nuevo
    let revertida = palabra.split("").reverse().join("");
    return palabra == revertida ? true : false;
    //  return (palabra == revertida)
  };
  palindromo("anilina");