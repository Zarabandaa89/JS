// Caso 1: La variable está dentro de la función (funciona sin problemas)
function mostrarMensaje() {
    var mensaje = "Hola, soy local";
    console.log(mensaje);  // ✅ Explicación: console.log(mensaje) busca mensaje dentro de mostrarMensaje() y lo encuentra ahí mismo.
}
mostrarMensaje();


// Caso 2: La variable no está en la función, pero sí en el contexto superior
var saludo = "Hola desde global";  // Contexto global

function decirSaludo() {
    console.log(saludo);  // ✅ No encuentra 'saludo' en la función, pero sí en el contexto global
}
//🔎 Proceso que sigue JavaScript:
//Primero busca saludo dentro de decirSaludo(). ❌ No la encuentra.
//Sube al contexto global y la encuentra ahí. ✅

decirSaludo();


//Caso 3: Variable dentro de una función interna (Scope Chain en acción)
function externa() {
    var nombre = "Carlos";  // Variable dentro de 'externa()'

    function interna() {
        console.log(nombre);  // ✅ No la encuentra en 'interna()', pero sí en 'externa()'
    }

    interna();
}
//🔎 Proceso:
//interna() busca nombre. ❌ No la encuentra dentro de sí misma.
//Sube a externa() y ahí sí encuentra nombre. ✅
externa();


//Caso 4: Variable no existe en ningún nivel (Error)
function buscarAlgo() {
    console.log(producto);  // ❌ Error: 'producto' no está definido en ningún nivel
}
//🚨 Error porque producto no está en ningún scope accesible.
buscarAlgo();
