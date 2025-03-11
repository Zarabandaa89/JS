//ejemplo 1
const jugador = { // Objeto jugador
  nombre: "Cristiano Ronaldo", // Propiedad: nombre del jugador
  edad: 40, // Propiedad: edad del jugador
  direccion: { // Propiedad anidada (objeto dentro de jugador)
      calle: "Calle 10", // Propiedad: calle de la dirección
      ciudad: "Madrid", // Propiedad: ciudad de la dirección
  },
  saludar() { // Método del objeto jugador
      console.log(`Hola, mi nombre es ${this.nombre}`); // Accede a la propiedad nombre
  },
};
console.log(jugador); // Mostrar el objeto jugador con sus propiedades y métodos
jugador.saludar(); // Llamar al método saludar

// Agregar una nueva propiedad al objeto
jugador.telefono = "555-555-555"; 
console.log(jugador.telefono); // Mostrar el valor de la nueva propiedad

// Agregar un nuevo método al objeto
jugador.despedirse = () => {
  console.log("Adiós"); 
};

jugador.despedirse(); // Llamar al método despedirse

// Eliminar una propiedad o un método del objeto
delete jugador.telefono; // Eliminar la propiedad telefono
delete jugador.despedirse; // Eliminar el método despedirse