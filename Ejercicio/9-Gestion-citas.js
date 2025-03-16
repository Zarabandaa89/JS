const citas = [];

function agendarCita(nombre, fecha, especialidad) {
    if (!nombre.trim() || !fecha.trim() || !especialidad.trim()) {
        console.log("⚠ Todos los campos son obligatorios.");
        return;
    }
    citas.push({ nombre, fecha, especialidad });
    console.log(`✅ Cita agendada para ${nombre} el ${fecha} en ${especialidad}.`);
}

function consultarCita(nombre) {
    const citasPaciente = citas.filter(cita => cita.nombre.toLowerCase() === nombre.toLowerCase());
    if (citasPaciente.length > 0) {
        console.log(`🔎 Citas de ${nombre}:`);
        citasPaciente.forEach((cita, index) => {
            console.log(`${index + 1}. Fecha: ${cita.fecha} | Especialidad: ${cita.especialidad}`);
        });
    } else {
        console.log(`❌ Paciente ${nombre} no registra citas.`);
    }
}

function cancelarCita() {
    const nombres = prompt("Ingrese el nombre del paciente").trim();
    if (!nombres) {
        console.log("⚠ El nombre no puede estar vacío.");
        return;
    }

    const citasPaciente = citas.filter(cita => cita.nombre.toLowerCase() === nombres.toLowerCase());

    if (citasPaciente.length === 0) {
        console.log(`❌ No se encontraron citas para el paciente: ${nombres}`);
        return;
    }

    console.log(`🔎 Citas de ${nombres}:`);
    citasPaciente.forEach((cita, index) => {
        console.log(`${index + 1}. ${cita.especialidad} - ${cita.fecha}`);
    });

    const opcion = parseInt(prompt("Ingrese el número de la cita que desea cancelar"));
    if (isNaN(opcion) || opcion < 1 || opcion > citasPaciente.length) {
        console.log("⚠ Seleccione una opción válida.");
        return;
    }

    const eliminarCita = citasPaciente[opcion - 1];
    const indexOriginal = citas.findIndex(cita => cita === eliminarCita);
    citas.splice(indexOriginal, 1);

    console.log(`✅ Cita de ${nombres} en ${eliminarCita.especialidad} el ${eliminarCita.fecha} ha sido cancelada.`);
}

function mostrarCitas() {
    if (citas.length === 0) {
        console.log("📋 No hay citas agendadas.");
    } else {
        console.log("📅 Citas Programadas:");
        citas.forEach((cita, index) => {
            console.log(`${index + 1}. Paciente: ${cita.nombre} | Fecha: ${cita.fecha} | Especialidad: ${cita.especialidad}`);
        });
    }
}

let opciones;
do {
    opciones = parseInt(prompt(
        "📌 Escoge una opción:\n" +
        "1️⃣ Agendar cita\n" +
        "2️⃣ Consultar cita\n" +
        "3️⃣ Cancelar cita\n" +
        "4️⃣ Mostrar todas las citas\n" +
        "5️⃣ Salir"
    ));

    switch (opciones) {
        case 1:
            let nombre = prompt("Ingrese el nombre del paciente").trim();
            let fecha = prompt("Ingrese la fecha a solicitar la cita (DD/MM/AA)").trim();
            let especialidad = prompt("Escriba la especialidad de la cita").trim();
            agendarCita(nombre, fecha, especialidad);
            break;

        case 2:
            let nombreConsulta = prompt("Ingrese el nombre del paciente al cual desea consultar sus citas").trim();
            consultarCita(nombreConsulta);
            break;

        case 3:
            cancelarCita();
            break;

        case 4:
            mostrarCitas();
            break;

        case 5:
            console.log("👋 Saliendo del programa...");
            break;

        default:
            console.log("⚠ Opción NO válida");
    }
    console.log("📌 Lista actualizada de citas:", citas);

} while (opciones !== 5);
