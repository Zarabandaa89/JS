let saludo1 = 'Hola soy Cristiano Ronaldo';
let saludo2 = "Hola soy Cristiano Ronaldo con comillas dobles";
let saludo3 = `${saludo1} con comillas invertidas`; //concatenación de strings con template strings
let saludo4 = saludo1 + ' con el operador +'; //concatenación de strings con el operador +
let frase = 'Cristiano Ronaldo es la Cabra del Futbol';

console.log(saludo1);
console.log(saludo2);
console.log(saludo3);
console.log(saludo4);

console.log(frase.length); //length es una propiedad de los strings que nos indica la cantidad de caracteres que tiene

console.log(frase.toLowerCase()); //toLowerCase es un método de los strings que nos devuelve el string en minúsculas

console.log(frase.toUpperCase()); //toUpperCase es un método de los strings que nos devuelve el string en mayúsculas

console.log(frase.substring(0, 9)); //substring es un método de los strings que nos devuelve una parte del string, en este caso desde el caracter 0 hasta el 8
