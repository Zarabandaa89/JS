// 1. Tipo entero y decimal 
const enteros = 42;
const decimales = 3.14159;
console.log(typeof enteros, typeof decimales); //number number


// 2. Notación científica
const cientifico = 5e3 // 5 * 10^3 = 5000
console.log(cientifico);


//3. Infinitos y NaN
const infinitos = Infinity;
const noEsUnNumero = NaN; //Not a Number
console.log(infinitos);
console.log(noEsUnNumero);


//4. Operaciones aritméticas(+, -, *, /)
const suma = 7 + 7;
const resta = 16 - 8;
const multiplicacion = 20 * 5;
const division = 400 / 2;

//4.1 modulo y exponenciación(% y **) % cuando quieras verificar si un número es par o impar
const modulo = 10 % 3; // es lo que sobra de dividir 10 entre 3
const exponenciacion = 2 ** 3; // es multiplicar 2 por si mismo 3 veces

//precision de los números
const resultado = 0.1 + 0.2; // al imprimir nos da este resultdo y no es el mas preciso 0.30000000000000004
console.log(resultado.toFixed(1)); //toFixed es un método de los números que nos permite redondear el número a la cantidad de decimales que le pasemos como argumento
console.log(resultado === 0.3); // aca nos da false porque no son iguales 0.3 y 0.30000000000000004

//operaciones avanzadas
const raizCuadrada = Math.sqrt(24); //nos devuelve la raíz cuadrada de un número
const valorAbsoluto = Math.abs(-32); //nos devuelve el valor absoluto de un número
const random = Math.random(); //devuelve un número aleatorio entre 0 y 1

console.log(raizCuadrada);
console.log(valorAbsoluto);
console.log(random);