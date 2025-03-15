/*
Requerimientos del reto:

1. El usuario debe poder ingresar su usuario y contraseña.
2. El sistema debe ser capaz de validar si el usuario y 
   contraseña ingresados por el usuario existen en la base de datos.
3. Si el usuario y contraseña son correctos, el sistema 
   debe mostrar un mensaje de bienvenida y mostrar el timeline del usuario.
4. Si el usuario y contraseña son incorrectos, el sistema 
   debe mostrar un mensaje de error y no mostrar ningún timeline.
*/

// Base de datos 1: Usuarios y contraseñas
const usuarios = [
    { id: 1, usuario: "carlos123", contraseña: "12345" },
    { id: 2, usuario: "ana_pro", contraseña: "abcde" },
    { id: 3, usuario: "juan99", contraseña: "qwerty" }
];

// Base de datos 2: Timeline (publicaciones de los usuarios)
const timeline = [
    { idUsuario: 1, contenido: "¡Hoy es un gran día para programar! 🚀", fecha: "2025-03-12" },
    { idUsuario: 2, contenido: "Aprendiendo más sobre Node.js 🔥", fecha: "2025-03-11" },
    { idUsuario: 3, contenido: "¿Alguien recomienda un buen curso de backend?", fecha: "2025-03-10" }
];

// Función para iniciar sesión
const username = prompt("Ingrese su usuario").toLowerCase().trim();
const password = prompt("Ingrese su contraseña").trim();

let verificarUsuario = usuarios.find(item => item.usuario.toLocaleLowerCase() === username && item.contraseña.toLocaleLowerCase() === password);

if (verificarUsuario) { // si existe el usuario
    console.log(`usuario: ${verificarUsuario.usuario} identificado`);// mostrar mensaje de bienvenida

    let timeLineUsuario = timeline.filter(post => post.idUsuario === verificarUsuario.id);

    if (timeLineUsuario.length > 0) {// si tiene publicaciones
        console.log("Publicaciones:");// mostrar publicaciones
        timeLineUsuario.forEach(post => console.log(`- ${post.contenido} (${post.fecha})`));// mostrar cada publicacion a
    } else {
        console.log("No tienes publicaciones en el timeline.");
    }
} else {
    console.log(`usuario : ${username} no identificado`);
}





