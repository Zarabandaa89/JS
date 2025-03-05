//operadores de comparación

// == igual a
// === estrictamente igual a es decir en valor y tipo de dato
// != diferente de
// !== estrictamente diferente de es decir en valor y tipo de dato
// > mayor que      
// < menor que
// >= mayor o igual que
// <= menor o igual que

//Ejemplo
const a = 5;    
const b = 10;
const c = '5';

console.log (a == b); //false, 5 no es igual a 10
console.log (a == c); //true, 5 es igual a 5
console.log (a === c); //false, 5 no es igual a '5' porque uno es número y el otro es string  
console.log (a != b); //true, 5 no es igual a 10
console.log (a !== c); //true, 5 no es igual a '5' porque uno es número y el otro es string   
console.log (a > b); //false, 5 no es mayor a 10
console.log (a < b); //true 5 es menor a 10
console.log (a >= b); //false, 5 no es mayor o igual a 10
console.log (a <= b); //true, 5 es menor o igual a 10
