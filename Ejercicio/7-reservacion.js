/*Ejercicio: Sistema de Reserva de Habitaciones en un Hotel
Requerimientos del reto:
El usuario debe ingresar su nombre y número de habitación.
El sistema debe validar si el número de habitación ingresado existe en la base de datos de habitaciones.
Si el número de habitación existe, el sistema debe verificar si está disponible o ya está ocupada.
Si la habitación está disponible, el sistema debe reservarla para el usuario y mostrar un mensaje de confirmación.
Si la habitación ya está ocupada o no existe, debe mostrar un mensaje de error adecuado.*/


// Base de datos de habitaciones
const habitaciones = [
    { numero: 101, tipo: "Individual", ocupada: false },
    { numero: 102, tipo: "Doble", ocupada: true },
    { numero: 103, tipo: "Suite", ocupada: false },
    { numero: 104, tipo: "Individual", ocupada: false }
];

const reservacion = []; // Base de datos de reservaciones

function reservarHabitacion(){
    const nombre = prompt("Ingrese Su nombre").trim();
    if(!nombre){
        console.log("El campo no puede estar vacio");
        return;
    }

    const reservarHabitacion = parseInt(prompt("Ingrese el numero de habitacion a reservar 101-104"))
    if(isNaN (reservarHabitacion)){
        console.log("Digite un valor valido");
        return;
    }

    const habitacionDisponible = habitaciones.find (hab => hab.numero === reservarHabitacion)
    if(!habitacionDisponible){
        console.log("Digite una habitacion existente")
        return;
    }

    if(habitacionDisponible.ocupada){
        console.log(`Lo sentimos ${nombre} la habitacion: ${reservarHabitacion} se encuentra ocupada`);
        return;
    }

    reservacion.push({ nombre, numero: habitacionDisponible.numero});
    habitacionDisponible.ocupada = true;
    console.log(`Reservada confirmada para: ${nombre} en la habitacion ${reservarHabitacion}`)
}

reservarHabitacion();
console.log(reservacion);