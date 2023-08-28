/* 

Integración de contenido:

1) Crear un array llamado misMascotas 

2) Dentro de este array crearemos un objeto literal para cada mascota. Cada objeto deberá tener: 
    nombre
    raza
    edad 
    sonido
    un método que nos retorne ese sonido 2 veces

    Cuando esté listo, verificar en consola

3) Deberemos crear una función que se llame aumentarEdad que aumente la edad de cada animal en 1.

4) Ahora debemos crear otra función, que se llame  aumentarEdad2, que va a hacer un trabajo más fino:
    Si la mascota tiene menos de 6 años, debe aumentar su edad en 1
    Si la mascota tiene entre 6 y 10 años, debe aumentar su edad en 2
    Si la mascota tiene más de 10 años, deberá sumarle la mitad de su edad

5) Ahora crearemos una función que va a generar un identificador (ID) en cada objeto, que será secuencial y que empezará en 1.


*/

let misMascotas = [
    {
       nombre: 'Tito',
       raza: 'Callejero',
       edad: 12,
       sonido: 'miau',
       sonidoDeMascota: function(){
           return `${this.sonido} ${this.sonido}`;
       }
       },
       {
       nombre: 'Betty',
       raza: 'Callejero',
       edad: 5,
       sonido: 'guau',
       sonidoDeMascota: function(){
           return `${this.sonido} ${this.sonido}`;
       }
       },
       {
       nombre: 'Lola',
       raza: 'Callejero',
       edad: 7,
       sonido: 'miau',
       sonidoDeMascota: function(){
           return `${this.sonido} ${this.sonido}`;
       }
   }
];


// CUANDO ESTE LISTO VERIFICAR EN CONSOLA


//console.log(misMascotas);
//console.log(misMascotas[0].sonidoDeMascota());


// LUEGO CREAR UNA FUNCIÓN que se llame aumentarEdad QUE AUMENTE LA EDAD DE TODAS LAS MASCOTAS EN 1


function aumentarEdad(array){
   for(let i = 0; i < array.length; i++){
       array[i].edad =  array[i].edad + 1;
       //array[i].edad+= 1
   }
}


// console.log(misMascotas[0].edad);
//  console.log(misMascotas[1].edad);
//  console.log(misMascotas[2].edad);
// aumentarEdad(misMascotas);
// console.log(misMascotas[0].edad);
// console.log(misMascotas[1].edad);
//  console.log(misMascotas[2].edad);




// AHORA VAMOS A CREAR UNA NUEVA FUNCIÓN aumentarEdad2
// QUE LAS MASCOTAS QUE TENGAN MENOS DE 6 AÑOS SUMARÁN UN AÑO
// LAS QUE TENGAN ENTRE 6 Y 10 SUMARÁN 2
// Y LAS MAYORES DE 10 SUMARÁN LA MITAD DE SU EDAD




function aumentarEdad2(array){
   for(let i = 0; i < array.length; i++){
       if(array[i].edad < 6){
           array[i].edad =  array[i].edad + 1;
           //array[i].edad+= 1
       }else if(array[i].edad >= 6 && array[i].edad <= 10){
           array[i].edad =  array[i].edad + 2;
           //array[i].edad+= 2
       }else{
           let mitad = array[i].edad / 2;
           array[i].edad =  array[i].edad + mitad;
           //array[i].edad+= mitad;
       }
   }
}


// console.log(misMascotas[0].edad);
// console.log(misMascotas[1].edad);
// console.log(misMascotas[2].edad);
// aumentarEdad2(misMascotas);
// console.log(misMascotas[0].edad);
// console.log(misMascotas[1].edad);
// console.log(misMascotas[2].edad);


// LUEGO EN OTRA ESTRUCTURA DE ITERACIÓN
// AGREGAR UN ID ( IDENTIFICADOR ) A CADA OBJETO, QUE SERÁ SECUENCIAL Y EMPEZARA EN 1


function agregarId(array){
   for(let i = 0; i < array.length; i++){
       array[i].identificador = i + 1;
   }
}


// console.log(misMascotas);
// console.log(misMascotas[0].identificador);
// console.log(misMascotas[1].identificador);
// console.log(misMascotas[2].identificador);
