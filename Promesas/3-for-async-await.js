async function procesarElementos() {
    const elementos = [1, 2, 3, 4];

    for (let i = 0; i < elementos.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simula una operación asíncrona
        console.log(`Elemento procesado: ${elementos[i]}`);
    }

    console.log('Todos los elementos fueron procesados.');
}

procesarElementos();
