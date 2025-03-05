function contadorVisitas() { // Función que crea un contador de visitas
    let visitas = 0; // Número de visitas

    return function() { // Función interna que incrementa las visitas
        visitas++; // Aumentamos las visitas en 1
        console.log(`Número de visitas: ${visitas}`); // Mostramos el número de visitas
    };
}

const contar = contadorVisitas(); // Creamos nuestro contador de visitas con la función externa y la guardamos en la variable contar 
contar(); // Número de visitas: 1
contar(); // Número de visitas: 2
contar(); // Número de visitas: 3



//ejericio 2
function crearContador(){ // Función que crea un contador de segundos
    let inicio = 0; // Variable que guarda los segundos iniciales en este caso empieza en 0
    return function(){ // Función interna que incrementa los segundos
        inicio++; // Incrementa el contador en 1
        console.log(`Segundos del contador: ${inicio}`); // Muestra los segundos actuales
    };
}

const contador = crearContador(); // Crear el contador de segundos con la función externa y lo guardamos en la variable contador
contador(); // Segundos del contador: 1
contador(); // Segundos del contador: 2
contador(); // Segundos del contador: 3



//ejercicio 3 
function crearAcumulador(inicial) { //inicial es el valor inicial
    let total = inicial; // Guarda el número inicial en la variable total 
    return function (numero) { // Función interna que recibe otro número 
        total += numero; // Suma al total el número que recibe la función interna y lo guarda en la variable total
        return total; // Devuelve el total actualizado
    };
}
const acumulador = crearAcumulador(10); // Crear el acumulador empezando en 10
console.log(acumulador(5)); // 15 (10 + 5)
console.log(acumulador(3));  // 18 (15 + 3)
console.log(acumulador(10)); // 28 (18 + 10)



//ejercicio 4
function incrementarDecrementar(inicio){ //inicio es el valor inicial
    let total = inicio; // Guarda el número inicial
    return function (numero) { // Función interna que recibe otro número
        total+= numero; // Suma a la variable total el número que recibe la función interna 
        return total; // Devuelve el total actualizado
    };
}

const acumuladorr = incrementarDecrementar(10); // Crear el acumulador empezando en 10
console.log(acumuladorr(9)) // 19 (10 + 9)
console.log(acumuladorr(-5))// 14 (19 - 5)
console.log(acumuladorr(-4))// 10 (14 - 4)
console.log(acumuladorr(10))// 20 (10 + 10)


//ejercicio 5
function contarPasos(primerPaso){ //primerPaso es el valor inicial
    let inicio = primerPaso; // Guarda el número inicial
    return function (pasos) { // Función interna que recibe otro número
        inicio +=pasos;// Suma a la variable inicio el número que recibe la función interna(pasos)
        return inicio; // Devuelve el total actualizado
    };
}

const contadorDeCinco = contarPasos(5); // Crear el contador empezando en 5
console.log(contadorDeCinco(5)); // 10 (5 + 5)
console.log(contadorDeCinco(3)); // 13 (10 + 3)
console.log(contadorDeCinco(2)); // 15 (13 + 2)


//ejercicio 6
function crearContadorConLimite(inicioContador) { //inicioContador es el valor inicial(3) 
    let inicioConteo = inicioContador; // Guarda el número inicial(3)
    return function (operacion) { // Función interna que recibe otro número (1,2,3,4,3,10)
        if (inicioConteo >= 15) { // Si ya alcanzó el límite, no sigue sumando y muestra el mensaje
            console.log(`¡Haz llegado al límite!`);
            return inicioConteo; // Devuelve el total actualizado
        }
        inicioConteo += operacion; // Suma la operación al conteo 
        if (inicioConteo >= 15) { // Si llega a 15 o más, muestra el mensaje
            console.log(`¡Haz llegado al límite!`);
        }
        return inicioConteo; // Devuelve el total actualizado
    };
}

const contadorr = crearContadorConLimite(3); // Crear el contador empezando en 3
console.log(contadorr(1)); // 4 
console.log(contadorr(2)); // 6
console.log(contadorr(3)); // 9
console.log(contadorr(4)); // 13
console.log(contadorr(3)); // "¡Haz llegado al límite!" (16)
console.log(contadorr(10)); // "¡Haz llegado al límite!" (16)


//ejercicio 7
// Función que crea un contador de llamadas
function contadorLlamadas() {
    let contador = 0; // Comenzamos desde 0

    return function () {
        if (contador >= 10) {
            return "¡Límite alcanzado!";
        }

        contador++; // Aumentamos en 1 cada vez que se llame

        if (contador >= 10) {
            return "¡Límite alcanzado!";
        }

        return contador;
    };
}

// Crear el contador
const calls = contadorLlamadas();

console.log(calls()); // 1
console.log(calls()); // 2
console.log(calls()); // 3
console.log(calls()); // 10
console.log(calls()); // "¡Límite alcanzado!"
console.log(calls()); // "¡Límite alcanzado!"
