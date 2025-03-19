const urls = [ // URLs de la API
    "https://rickandmortyapi.com/api/character",
    "https://rickandmortyapi.com/api/location",
    "https://rickandmortyapi.com/api/episode",
];

async function fetchNewData() {// Función asíncrona
    try {// Capturamos cualquier error
        for await (let url of urls) {// Recorremos las URLs con el await sirve para esperar a que se resuelva la promesa
            let response = await fetch(url);// Hacemos la petición a la API
            let data = await response.json();// Convertimos la respuesta en JSON
            console.log(data);// Imprimimos los datos
        }
    } catch (error) {// Capturamos cualquier error
        console.log(error);// Imprimimos el error
    }
}
