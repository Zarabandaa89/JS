const API_URL = "https://jsonplaceholder.typicode.com/todos"; // URL base de la API de prueba

// Función para eliminar una tarea por su ID
function eliminarTarea(id) {
    
    fetch(`${API_URL}/${id}`, { method: "DELETE" }) // Realiza una petición DELETE a la API con el ID de la tarea
    //Supongamos que id = 5, la URL final sería: https://jsonplaceholder.typicode.com/todos/5

    .then(response => { // Captura la respuesta del servidor
        if (!response.ok) { // Verifica si la respuesta es incorrecta (código de error)
            throw new Error("Error al eliminar la tarea"); // Lanza un error si la eliminación falla
        }
        console.log(`✅ Tarea con ID ${id} eliminada`); // Muestra un mensaje en la consola si se eliminó correctamente
    })
    .catch(error => console.error("❌ Hubo un error:", error)); // Captura y muestra errores en la consola si la petición falla
}
