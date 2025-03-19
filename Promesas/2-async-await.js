async function obtenerUsuariosAsync() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users"); // Hacemos la petición a la API
        if (!response.ok) {
            throw new Error("Error en la petición");
        }
        const usuarios = await response.json(); // Convertimos la respuesta en JSON
        console.log("Lista de usuarios:", usuarios);
    } catch (error) {
        console.error("Hubo un error:", error);
    }
}

obtenerUsuariosAsync();
