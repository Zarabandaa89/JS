//Usando corchetes [] (Forma más común)
let numeros = [1, 2, 3, 4, 5];
let nombres = ["Juan", "María", "Pedro"];


//Usando el constructor Array() (Menos recomendado)
let frutas = new Array("Manzana", "Banana", "Naranja");



//Array vacío e ir agregando elementos
let lista = [];
lista.push("Elemento 1");
lista.push("Elemento 2");



//arrays simples
let numbers = [1, 2, 3, 4, 5];
let names = ["Ana", "Luis", "Carlos"];



//Arrays de Objetos
let personas = [
    { nombre: "Juan", edad: 25 },
    { nombre: "María", edad: 30 }
  ];
  
  console.log(personas[0].nombre); // "Juan" [0] es el primer objeto, "maría" es el segundo [1] objeto
  


//Arrays multidimensionales
  let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  console.log(matriz[1][2]); // 6 (segunda fila, tercera columna)
  


//modificar arrays
let colores = ["Rojo", "Verde", "Azul"];

colores.push("Morado"); // ["Rojo", "Verde", "Azul", "Amarillo"]
console.log(colores); //imprime el array con el nuevo elemento

colores.pop(); // ["Rojo", "Verde", "Azul"]
console.log(colores); //imprime el array sin el último elemento

colores.unshift("Negro"); // ["Negro", "Rojo", "Verde", "Azul"]
console.log(colores)//imprime el array agregando un valor al inicio

colores.shift(); // ["Rojo", "Verde", "Azul"]
console.log(colores)//imprime el array sin el primer elemento "Negro" 


//Recorre un array (forEach)
let listaNumeros = [10,20,30];
listaNumeros.forEach(listaNumeros => console.log(listaNumeros)); // [10, 20, 30]


//Devuelve un nuevo Array con los elementos duplicados (map)
let numeross = [1, 2, 3, 4, 5]; // creamos el array
let duplicados = numeross.map(num => num * 2); // let duplicados guarda el valor multiplicado
//numeross.map recorre el array, num(es el valor que va recorriendo 1, 2, 3, 4) y despues lo multiplica por 2
console.log(duplicados); // imprimimos los valores guardados en la variable duplicados


//Devuelve un nuevo Array con los elementos mayores a 15 (filter)
let numeros2 = [10, 20, 30]; // creamos el array
let mayoresDe15 = numeros2.filter(num => num > 15); // let mayoresDe15 guarda el valor mayor a 15
console.log(mayoresDe15); // [20, 30] imprimimos los valores guardados en la variable mayoresDe15


//Devuelve la suma de todos los elementos (reduce)
let numeros3 = [10, 20, 30, 40, 50]; // creamos el array
let suma = numeros3.reduce((total, num) => total + num);// let suma guarda la suma de todos los elementos, total es el acumulador y num es el valor que va recorriendo 
console.log(suma); // 150 imprimimos los valores guardados en la variable suma

//Devuelve un array de cuantas veces se repite una palabra (reduce)
const words = ['apple', 'banana', 'hello', 'bye', 'banana', 'bye', 'bye']; // creamos el array
const wordFrequency = words.reduce((accumulator, currentValue) => { // let wordFrequency guarda la cantidad de veces que se repite una palabra
  //accumulator es el acumulador, currentValue es el valor que va recorriendo 
  if (accumulator[currentValue]) { // si el acumulador tiene la palabra currentValue 
    accumulator[currentValue]++; // se incrementa en 1 
  } else { // si no
    accumulator[currentValue] = 1; // se agrega la palabra currentValue con un valor de 1
  }
  return accumulator; // se retorna el acumulador
}, {}); // {} es el valor inicial del acumulador

console.log(wordFrequency); // { apple: 1, banana: 2, hello: 1, bye: 3 }

//find busca un elemento en un array
const numbersTwo = [1, 3, 5, 7, 9, 12, 15] // creamos el array
const searchNextNumber = numbersTwo.find(number => number >9) // let searchNextNumber guarda el valor mayor a 9
//numbersTwo.find recorre el array, number es el valor que va recorriendo 1, 3, 5, 7, 9, 12, 15
//y si el primer numero despues de 9 es mayor a 9 se guarda en la variable searchNextNumber
console.log(numbersTwo);// imprimimos el array
console.log(searchNextNumber); // 12

//findIndex busca el indice de un elemento en un array
const arrayU = [5, 9, 12, 13] // creamos el array
const findNumber = arrayU.findIndex(fi => fi > 12); // let findNumber guarda el indice del valor mayor a 12
console.log(arrayU); // imprimimos el array
console.log(findNumber); // 3 

//slice toma un fragmento de un array
const arrayV = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // creamos el array

console.log(arrayV.slice(2, 6)); // [3, 4, 5, 6] imprimimos el fragmento del array desde el indice 2 hasta el 6
console.log(arrayV.slice(-2)); // [9, 10] imprimimos el fragmento del array desde el indice -2 hasta el final
console.log(arrayV.slice()); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] imprimimos el array completo
 