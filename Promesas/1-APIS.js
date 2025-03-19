function obtenerUsuarios() {// Definimos la función
    fetch("https://jsonplaceholder.typicode.com/users") // Hacemos la petición a la API
        .then(response => { // Capturamos la respuesta
            if (!response.ok) {// Comprobamos si la respuesta es correcta
                throw new Error("Error en la petición"); // Si la respuesta no es correcta, lanzamos un error
            }
            return response.json(); // Convertimos la respuesta en JSON
        })
        .then(usuarios => { // Capturamos la lista de usuarios
            console.log("Lista de usuarios:", usuarios); // Imprimimos la lista de usuarios en la consola
        })
        .catch(error => console.error("Hubo un error:", error)); // Capturamos cualquier error
}

obtenerUsuarios(); // Llamamos a la función

