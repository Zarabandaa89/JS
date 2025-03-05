const rocket = { // Objeto(rocket) 
    name: 'Falcon 9', // Propiedad(name)
    saludo: 'Holaaaa espacio', // Propiedad(saludo)

    launchMessage: function () {     // Método(launchMessage) enviar mensaje de lanzamiento
        console.log(`${this.name} ha sido lanzado 🚀`);}, //Si dentro de un método llamas directamente a name, JavaScript no sabe a qué name te refieres.
        //Con this.name, le estás diciendo "busca name dentro de este mismo objeto".  
    saludar : function (){
        console.log(`${this.saludo}`);
    }
};

rocket.launchMessage();// Llammamos a rocket para que ejecute el método launchMessage
// Salida: Falcon 9 ha sido lanzado 🚀
rocket.saludar();


const carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
    año: 2022,

    detalles: function (){
        console.log(`Este auto es un ${this.marca} ${this.modelo} del año ${this.año}`)
    }
}

carro.detalles();