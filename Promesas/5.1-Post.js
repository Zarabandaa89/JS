document.getElementById("postForm").addEventListener("submit", function(event) {// Capturamos el formulario y escuchamos el evento submit
    event.preventDefault(); // Evitamos que el formulario recargue la página al enviarlo.

    // Capturamos los valores de los campos de entrada
    const titulo = document.getElementById("titulo").value; //Capturamos el título ingresado por el usuario.
    const contenido = document.getElementById("contenido").value; // Capturamos el contenido ingresado por el usuario.

    // Creamos un objeto con la estructura del post.
    const nuevoPost = {
        title: titulo,
        body: contenido,
        userId: 1 // Se agrega un ID de usuario ficticio
    };

    // Hacemos la solicitud POST a la API
    fetch("https://jsonplaceholder.typicode.com/posts", { // Hacemos la petición a la API
        method: "POST", // Especificamos el método POST
        headers: { // Indicamos que estamos enviando JSON en el cuerpo de la solicitud.
            "Content-Type": "application/json" // Indicamos que enviamos datos en formato JSON
        },
        body: JSON.stringify(nuevoPost) // Convertimos el objeto nuevoPost en JSON para enviarlo.
    })
    .then(response => {   
        if (!response.ok) { //Si la respuesta no es correcta,
            throw new Error("Error al crear el post"); //lanzamos un error,
        }
        return response.json(); // Si la respuesta es correcta, convertimos la respuesta en JSON.
    })
    .then(postCreado => { //Cuando la API responde, capturamos el post creado.
        console.log("Post creado:", postCreado);//Cuando la API responde, mostramos el post creado en la consola.

        // Agregamos el nuevo post a la lista de posts en la página
        const lista = document.getElementById("listaPosts"); //Buscamos el <ul> donde mostraremos el nuevo post.
        let li = document.createElement("li");// Creamos un <li> para el nuevo post
        li.innerHTML = `<strong>${postCreado.title}</strong><br>${postCreado.body}`;//Insertamos el título y el contenido del post.
        lista.appendChild(li); //Agregamos el <li> a la lista <ul> para mostrarlo en la página.
    })
    .catch(error => console.error("Hubo un error:", error)); //Si hay un error en la petición, lo mostramos en la consola.
});
