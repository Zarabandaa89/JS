function encontrarMayor(numero1, numero2, numero3) {
    if (numero1 > numero2 && numero1 > numero3) {
        return `El número mayor de los tres es: ${numero1}`;
    } else if (numero2 > numero1 && numero2 > numero3) {
        return `El número mayor de los tres es: ${numero2}`;
    } else if (numero3 > numero1 && numero3 > numero2) {
        return `El número mayor de los tres es: ${numero3}`;
    } else {
        return "Los tres números son iguales";
    }
}
console.log(encontrarMayor(5, 9, 7));
console.log(encontrarMayor(12, 12, 12));

console.log('---------------')// ejercicio 2
function esParOImpar(num) {
    if (num % 2 === 0) {
        console.log(`el numero ${num} es par`);
    }
    else{
        console.log(`el numero ${num} es Impar`)
    }
}
esParOImpar(24);
esParOImpar(17);


console.log('---------------') //ejercicio 3
function tablaDeMultiplicar(nume) {

    for (let i = 1; i <= 10; i++){
        console.log(`la multiplicacion: ${nume} x ${i} es igual a: ${nume * i}`);
    }
}
tablaDeMultiplicar(7)



