async function obtenerUsuariosAsync() { // Función asíncrona
    try { // Capturamos cualquier error
        const response = await fetch("https://jsonplaceholder.typicode.com/users"); // Hacemos la petición a la API
        if (!response.ok) { // Si la respuesta no es correcta
            throw new Error("Error en la petición");// Lanzamos un error
        }
        const usuarios = await response.json(); // Convertimos la respuesta en JSON
        console.log("Lista de usuarios:", usuarios);// Imprimimos la lista de usuarios en la consola
    } catch (error) {// Capturamos cualquier error
        console.error("Hubo un error:", error);// Imprimimos el error en la consola
    }
}

obtenerUsuariosAsync();
