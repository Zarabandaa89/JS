async function procesarElementos() {// Función asíncrona
    const elementos = [1, 2, 3, 4];// Elementos a procesar

    for (let i = 0; i < elementos.length; i++) {// Recorre los elementos
        await new Promise(resolve => setTimeout(resolve, 1000));// Espera 1 segundo para que el elemento sea procesado
        console.log(`Elemento procesado: ${elementos[i]}`);// Imprime el elemento procesado
    }

    console.log('Todos los elementos fueron procesados.');// Imprime un mensaje
}

procesarElementos();// Llama a la función asíncrona
