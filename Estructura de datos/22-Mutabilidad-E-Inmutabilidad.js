//mutability
const array = ['chevrolet', 'ford', 'toyota'];//creamos un array con 3 elementos
const newCar = array.push('honda') //agregamos un elemento al array
console.log(array) // imprime el array con el nuevo push(honda)
console.log (newCar);//imprime la nueva longitud del array agregando el nuevo elemento


//inmutability
const array2 = ['Roa', 'Hades', 'Blessd', 'Darell'] //creamos un array
console.log(array2);//imprimimos el array

const array3 = array2.concat(['De la ghetto'])//agregamos un elemento al array2 usando el metodo concat sin modificar el array original 
console.log(array3)//imprimimos el array


//Ejercicio
const numbers = [5, 10, 15, 20, 25]
numbers.pop()
numbers.unshift(30)
console.log('Array original modificado:', numbers);


//Ejercicio 2
const valores = [2, 4, 6, 8]
let duplicados = valores.map(nume => nume * 2 );
console.log('array inmutable:',valores,);
console.log('Nuevo array inmutable:',duplicados);


//Ejercicio 3
const you = [3, 10, 7, 15, 20, 8, 5]
let mayores = you.filter(max => max >= 10);
let suma = mayores.reduce((Total, num) => Total + num, 0);
console.log('la suma de todos los valores del array es:', suma)
console.log('Numeros mayores a 10:', mayores);