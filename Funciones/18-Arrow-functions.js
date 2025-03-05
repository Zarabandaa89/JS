// Arrow function 
const doblarNumeros = (numeros) => {
    let resultado = new Array(numeros.length); // Creamos un array vacío con la misma longitud
    for (let i = 0; i < numeros.length; i++) {
        resultado[i] = numeros[i] * 2; // Asignamos el resultado directamente en cada posición
    }
    return resultado; // Retornamos el nuevo array
};

// Probando la función
console.log(doblarNumeros([1, 2, 3, 4, 5])); // [2, 4, 6, 8, 10]
console.log('---------------- multiplicar por 2 cada uno de los valores del array')



// Arrow function para filtrar números pares
const filtrarPares = (numeros) => {
    let pares = []; // Creamos un array vacío
    let index = 0;  // Índice manual para asignar valores

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) { // Verificamos si es par
            pares[index] = numeros[i]; // Guardamos el número par en la posición index
            index++; // Movemos el índice a la siguiente posición
        }
    }

    return pares; // Retornamos el array con los pares
};

// Probando la función
console.log(filtrarPares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log('---------------- filtrar números pares')



// Arrow function para encontrar el mayor número
const encontrarMayor = (numeros) => { //definimos la función encontrarMayor que recibe un array de números
    let mayor = numeros[0] //asumimos que el primer número es el mayor 
    for (let i = 1; i < numeros.length; i++) { //recorremos el array
        if (numeros[i] > mayor) { //si el número en la posición i es mayor que el mayor  
            mayor = numeros[i] //asignamos el número en la posición i como el nuevo mayor

        }
    } return mayor //retornamos el mayor
}

console.log(encontrarMayor([1, 10, 7, 5]))
console.log('---------------- encontrar el mayor número')




//Crea una arrow function que reciba un array de números y devuelva el número más pequeño.

/*📌 Ejemplo esperado:
encontrarMenor([10, 5, 8, 20, 3]);*/
const encontrarMenor = (valores) => {
    let menor = valores[0]
    for (let i = 1; i < valores.length; i++) {
        if (valores[i] < menor)
            menor = valores[i]
    } return menor

}
console.log(encontrarMenor([10, 5, 8, 20, 3]))
console.log('---------------- el número más pequeño.')



/*Crea una arrow function que reciba un array de números y devuelva cuántos números pares contiene.

📌 Ejemplo esperado:
contarPares([2, 7, 8, 10, 15, 20]);*/
const encontrarPares = (digitos) => { //definimos la función encontrarPares que recibe un array de números
    let pares = [] //creamos un array vacío donde guardaremos los números pares
    let index = 0; //índice manual para asignar valores
    for (let i = 0; i < digitos.length; i++) {
        if (digitos[i] % 2 === 0) {
            pares[index] = digitos[i];
            index++
        }
    } return pares
}
console.log(encontrarPares([2, 7, 8, 10, 15, 20]))
console.log('---------------- cuántos números pares contiene')

/*Crea una arrow function que reciba un array de números y devuelva un objeto con el número más grande y el más pequeño.

📌 Ejemplo esperado:
encontrarExtremos([3, 7, 2, 9, 1, 8]);*/
const encontraExtremos = (numbers)=>{
    let mayor = numbers[0]
    let menor = numbers[0]

    for( let i = 0; i < numbers.length; i++) {
       if ( numbers [i] > mayor)
        mayor = numbers[i];
       if (numbers [i] < menor){
        menor = numbers[i];
    }
       
       
    } return {mayor, menor}

}
console.log(encontraExtremos([3, 7, 2, 9, 1, 8]))
console.log('----------------  el número más grande y el más pequeño.')


/*Crea una arrow function que reciba un array de números y devuelva un objeto con la cantidad de números pares e impares.

📌 Ejemplo esperado:
contarParesImpares([3, 7, 2, 9, 1, 8, 10, 5]);*/

const paresEImpares = (valores) => {    //definimos la función paresEImpares que recibe un array de números
    let pares = []                      //creamos un array vacío donde guardaremos los números pares
    let impares = []                    //creamos un array vacío donde guardaremos los números impares
    let indexPares = 0                  //índice manual para asignar valores
    let indexImpares = 0                //índice manual para asignar valores
    for (let i = 0; i < valores.length; i++) {          //recorremos el array
        if (valores[i] % 2 === 0) {      //si el número en la posición i es par
            pares[indexPares] = valores[i] //guardamos el número par en la posición indexPares
            indexPares++ //movemos el índice a la siguiente posición
        }
        if (valores[i] % 2 !== 0) { //si el número en la posición i es impar
            impares[indexImpares] = valores[i] //guardamos el número impar en la posición indexImpares
            indexImpares++ //movemos el índice a la siguiente posición
        } 
    }   return { pares, impares } //retornamos un objeto con los números pares e impares

}

console.log(paresEImpares([3, 7, 2, 9, 1, 8, 10, 5])) //array de pares e impares
console.log('----------------  la cantidad de números pares e impares.')