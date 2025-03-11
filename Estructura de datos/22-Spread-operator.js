//copiar un array 
const arrayA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // creamos el array
const arrayB = [...arrayA]; // creamos un nuevo array con los elementos del arrayA
console.log(arrayB); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] imprimimos el nuevo array

//combinar dos arrays
const arrayC = [1, 2, 3,]; // creamos el array
const arrayD = [4, 5, 6,]; // creamos el array
const arrayE = [...arrayC, ...arrayD]; // creamos un nuevo array con los elementos de los arrays arrayC y arrayD
console.log(arrayE); // [1, 2, 3, 4, 5, 6] imprimimos el nuevo array

//agregar elementos a un array
const arrayF = [1, 2, 3, 4]; // creamos el array
const arrayG = [...arrayF, 5, 6, 7, 8,]; // creamos un nuevo array con los elementos del arrayF
console.log(arrayF); // [1, 2, 3, 4] imprimimos el array
console.log(arrayG); // [1, 2, 3, 4, 5, 6, 7, 8] imprimimos el nuevo array

//adicionar elementos al inicio de un array
const arrayH = [1, 2, 3, 4]; // creamos el array
const arrayI = [0, ...arrayH]; // creamos un nuevo array con los elementos del arrayH
console.log(arrayH); // [1, 2, 3, 4] imprimimos el array
console.log(arrayI); // [0, 1, 2, 3, 4] imprimimos el nuevo array

//adicionar elementos al final de un array
const arrayJ = [1, 2, 3, 4]; // creamos el array
const arrayK = [...arrayJ, 5]; // creamos un nuevo array con los elementos del arrayJ
console.log(arrayJ); // [1, 2, 3, 4] imprimimos el array
console.log(arrayK); // [1, 2, 3, 4, 5] imprimimos el nuevo array

//eliminar elementos de un array
const arrayL = [1, 2, 3, 4]; // creamos el array
const arrayM = [...arrayL.slice(0, 2), ...arrayL.slice(3)]; //seleccionamos los elementos que queremos para el nuevo array(1, 2, 4)
console.log(arrayL); // [1, 2, 3, 4] imprimimos el array
console.log(arrayM); // [1, 2, 4] imprimimos el nuevo array

//eliminar todos los elementos de un array
const arrayN = [1, 2, 3, 4]; // creamos el array
const arrayO = []; // creamos un nuevo array vacio
console.log(arrayN); // [1, 2, 3, 4] imprimimos el array
console.log(arrayO); // [] imprimimos el nuevo array

//pasar elementos a una funcion
function multiplication ( a, b, c) {
    console.log(a * b * c);
}
const arrayP = [1, 2, 3]; // creamos el array
multiplication(...arrayP); // pasamos los elementos del array a la funcion

//Copiar y modificar objetos (sin mutarlos)
const user = { nombre: "Juan", edad: 25 };
const nuevoUser = { ...user, edad: 30 }; // Modificamos la edad
console.log(nuevoUser); // { nombre: "Juan", edad: 30 }
