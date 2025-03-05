//operadores logicos

// && and/ y
// || or/ o
// ! not/ no


const a = 10;
const b = 20;
const c = '10';

console.log(a == b && a === c);// a es igual pero el tipo de dato no es igual
console.log(a != b || a === c);// a es diferente de b pero a no es estricamente igual a c entonces se cumple la primera condición obtenemos true
console.log(!(a === c));// a no es estricamente igual a c nos retorna false por el tipo de dato con la negación obtenemos (!) invierte el valor booleano
