/*📌 Ejercicio: Sistema de Registro de Estudiantes
📖 Instrucciones:
Vas a programar un sistema en JavaScript para administrar una lista de estudiantes. Debes permitir al usuario hacer lo siguiente:

1️⃣ Agregar nuevos estudiantes con su nombre y calificación.
2️⃣ Buscar un estudiante por su nombre y mostrar su información.
3️⃣ Actualizar la calificación de un estudiante.
4️⃣ Calcular el promedio de todas las calificaciones registradas.

👉 IMPORTANTE:

Debes utilizar un array de objetos para almacenar los estudiantes.
Usa métodos de arrays como .push(), .find(), .reduce(), etc.
El usuario ingresará datos mediante prompt().
La información se mostrará en la consola con console.log().*/
const listadeEstudiantes = [];

function agregarEstudiante(nombre, calificacion) {
    if (!nombre.trim()) {
        console.log("⚠ El nombre no puede estar vacío.");
        return;
    }
    if (isNaN(calificacion) || calificacion < 0 || calificacion > 10) {
        console.log("⚠ Ingresa una calificación válida (0 - 10).");
        return;
    }
    
    listadeEstudiantes.push({ nombre, calificacion });
    console.log(`✅ Estudiante ${nombre} agregado con calificación ${calificacion}.`);
}

function buscarEstudiante(nombre) {
    if (!nombre.trim()) {
        console.log("⚠ Ingresa un nombre válido.");
        return;
    }
    
    const estudiante = listadeEstudiantes.find(item => item.nombre.toLowerCase() === nombre.toLowerCase());
    if (estudiante) {
        console.log(`🔎 ${estudiante.nombre} tiene una calificación de ${estudiante.calificacion}.`);
    } else {
        console.log(`❌ Estudiante no encontrado.`);
    }
}

function actualizarCalificacion(nombre, nuevaCalificacion) {
    if (!nombre.trim()) {
        console.log("⚠ Ingresa un nombre válido.");
        return;
    }
    if (isNaN(nuevaCalificacion) || nuevaCalificacion < 0 || nuevaCalificacion > 10) {
        console.log("⚠ Ingresa una calificación válida (0 - 10).");
        return;
    }
    
    const estudiante = listadeEstudiantes.find(item => item.nombre.toLowerCase() === nombre.toLowerCase());
    if (estudiante) {
        estudiante.calificacion = nuevaCalificacion;
        console.log(`🔄 Calificación actualizada. Ahora ${estudiante.nombre} tiene ${nuevaCalificacion}.`);
    } else {
        console.log(`❌ Estudiante no encontrado.`);
    }
}

function calcularPromedio() {
    if (listadeEstudiantes.length === 0) {
        console.log("⚠ No hay estudiantes registrados.");
        return;
    }
    
    const total = listadeEstudiantes.reduce((sum, estudiante) => sum + estudiante.calificacion, 0);
    const promedio = total / listadeEstudiantes.length;
    console.log(`📊 El promedio de calificaciones es ${promedio.toFixed(2)}.`);
}

let opcion;
do {
    opcion = parseInt(prompt("Escoge una opción:\n1. Agregar estudiante\n2. Buscar estudiante\n3. Actualizar calificación\n4. Calcular promedio\n5. Salir"));

    switch (opcion) {
        case 1:
            let nombre = prompt("Ingrese el nombre del estudiante:").trim();
            let calificacion = parseFloat(prompt("Ingrese la calificación:"));
            agregarEstudiante(nombre, calificacion);
            break;
        case 2:
            nombre = prompt("Ingrese el nombre del estudiante a buscar:").trim();
            buscarEstudiante(nombre);
            break;
        case 3:
            nombre = prompt("Ingrese el nombre del estudiante para actualizar:").trim();
            let nuevaCalificacion = parseFloat(prompt("Ingrese la nueva calificación:"));
            actualizarCalificacion(nombre, nuevaCalificacion);
            break;
        case 4:
            calcularPromedio();
            break;
        case 5:
            console.log("👋 Saliendo del programa...");
            break;
        default:
            console.log("❌ Opción no válida, intenta de nuevo.");
    }

    console.log("📋 Lista actualizada de estudiantes:", listadeEstudiantes);

} while (opcion !== 5);
