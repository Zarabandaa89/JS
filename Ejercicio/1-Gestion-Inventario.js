/*🏆 Ejercicio de Programación - Gestión de Inventario
📜 Descripción
Eres el encargado de administrar el inventario de una tienda. Debes escribir un programa en JavaScript que permita:

Agregar productos al inventario (nombre, precio y cantidad).
Buscar un producto por nombre y mostrar su información.
Actualizar la cantidad de un producto específico.
Calcular el valor total del inventario (precio * cantidad de cada producto).
📌 Requisitos
Usa un array de objetos para almacenar los productos.
Implementa métodos como .find(), .map() y .reduce().
Permite que el usuario interactúe con el inventario usando prompt().*/

// Array para almacenar los productos del inventario
let inventario = [];

// Función para agregar un producto al inventario
function agregarProducto(nombre, precio, cantidad) {
    inventario.push({ nombre, precio, cantidad });
}

// Función para buscar un producto por su nombre
function buscarProducto(nombre) {
    return inventario.find(producto => producto.nombre.toLowerCase() === nombre.toLowerCase());// si producto.nombre es igual a nombre, devuelve el producto
}

// Función para actualizar la cantidad de un producto
function actualizarCantidad(nombre, nuevaCantidad) {
    let producto = buscarProducto(nombre);
    if (producto) {
        producto.cantidad = nuevaCantidad;
        console.log(`Cantidad actualizada: ${producto.nombre} ahora tiene ${producto.cantidad} unidades.`);
    } else {
        console.log("Producto no encontrado.");
    }
}

// Función para calcular el valor total del inventario
function calcularValorTotal() {
    let total = inventario.reduce((suma, producto) => suma + (producto.precio * producto.cantidad), 0);
    console.log(`El valor total del inventario es: $${total}`);
}

// 📌 Ejecución del programa

// 1️⃣ Agregar productos
agregarProducto("Laptop", 800, 5);
agregarProducto("Mouse", 20, 10);
agregarProducto("Teclado", 50, 7);

// 2️⃣ Buscar un producto
console.log(buscarProducto("laptop"));

// 3️⃣ Actualizar cantidad de un producto
actualizarCantidad("laptop", 10);

// 4️⃣ Calcular el valor total del inventario
calcularValorTotal();
