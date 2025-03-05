var nombre = "Pedro";  // Contexto global

console.log(nombre);  // ✅ Funciona porque está en el mismo contexto es decir usamos el console.log en el mismo contexto(variable global)


function saludar() {
    var saludo = "Hola!";
    console.log(saludo);  // ✅ Funciona porque está dentro de la función y no usamos el cosnole.log fuera de la función
}

saludar();


function despedida() {
    var mensaje = "Adiós!";
    console.log(mensaje);  // ✅ Funciona dentro de la función porque lo llamamos primero en la función
}

despedida();

console.log(mensaje);  // ❌ Error: porque ya lo estamos usando en la función despedida() y no podemos usarlo fuera de la función
