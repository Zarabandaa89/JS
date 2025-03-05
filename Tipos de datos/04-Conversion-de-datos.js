//explicit type casting

const stringToNumber = '1234'; //Escrito como string
const numberInt = parseInt(stringToNumber); //usamos parseInt para convertir el string a número entero
console.log (numberInt);
console.log (typeof numberInt);


const decimalString = '3.1416'; //Escrito como string
const numberFloat = parseFloat(decimalString);  //usamos parseFloat para convertir el string a número decimal
console.log(numberFloat);
console.log(typeof numberFloat);

const binaryString = '1010' //Escrito como string
const numberIntBinary = parseInt(binaryString, 2); //usamos parseInt y le pasamos el segundo argumento 2 para indicar que es un número binario
console.log(numberIntBinary);
console.log(typeof numberIntBinary);

//implicit type casting

const sum = '5' + 3; // 53
console.log(sum);

const sumWithBoolean = '5' + true; // 5true
console.log(sumWithBoolean); 

const sumWithNumber = 5 + 3; // 8
console.log(sumWithNumber);

const stringValue = '10';
const numberValue = 5;
const booleanValue= true;
console.log ('---Inicio----') // cuando JS encuentra un string, concatena todo a string, sin strings JS suma los valores
console.log(stringValue + numberValue); //concatena
console.log(stringValue + booleanValue); //concatena
console.log(stringValue + stringValue); //concatena
console.log(numberValue + stringValue); //concatena
console.log(numberValue + booleanValue); //suma
console.log(numberValue + numberValue); //suma
console.log(booleanValue + stringValue); //concatena
console.log(booleanValue + numberValue); //suma
console.log(booleanValue + booleanValue); //suma

//Ejercicio

const numero = '596';
const numeroConvertido = parseInt(numero);

console.log(typeof numero);
console.log(typeof numeroConvertido);

// opcion a (string, number) // correcta
// opcion b (string, string)
// opcion c (number, number) 
