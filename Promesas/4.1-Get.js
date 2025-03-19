function obtenerPosts() {// Definimos la función
    fetch("https://jsonplaceholder.typicode.com/posts") // Hacemos una solicitud GET a la API
        .then(response => { // Capturamos la respuesta de la api cunado la solicitud se cumpla
            if (!response.ok) { // Comprobamos si la respuesta es correcta
                throw new Error("Error al obtener los posts"); // si hay un error lanzamos un mensaje de error
            }
            return response.json(); // Convertimos la respuesta en JSON
        })
        .then(postsUsers => { // Captura los posts convertidos en JSON y los almacena en postsUsers.
            const lista = document.getElementById("listaPosts");// Obtiene la referencia al <ul> de HTML donde mostraremos los posts.
            lista.innerHTML = ""; // Limpiamos la lista antes de agregar nuevos datos

            postsUsers.slice(0, 10).forEach(postsUsers => { // Mostramos solo los primeros 10 posts con slice y forEach los recorre
                let li = document.createElement("li");// Creamos un <li> para cada post
                li.innerHTML = `<strong>${postsUsers.title}</strong><br>${postsUsers.body}`;// Agrega el título (<strong>) y el cuerpo del post en HTML.
                lista.appendChild(li);//Agrega el elemento <li> a la lista <ul>, mostrando los posts en la página.
            });
        })
        .catch(error => console.error("Hubo un error:", error)); // Capturamos cualquier error
}
