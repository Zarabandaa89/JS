//Antigua forma de crear una function constructora
function Persona(nombre, apellido, edad){ //creamos el constructor con las propiedades
    this.nombre = nombre //propiedades
    this.apellido = apellido //propiedades
    this.edad = edad //propiedades
}

//creamos el objeto
const persona1 = new Persona("Cristiano", "Ronaldo", 40)//creamos el objeto
console.log(persona1); //imprimimos el objeto

const persona2 = new Persona("Karim", "Benzema", 38)//creamos el objeto
console.log(persona2)//imprimimos el objeto

const persona3 = new Persona("Neymar", "Jr", 32)//creamos el objeto
console.log(persona3)//imprimimos el objeto

//agregar una propiedad a la función constructora
Persona.prototype.telefono = "555-555-555" //creamos la propiedad y le asignamos un valor

//agregar una propiedad a un objeto en especifico
persona1.equipo = "al nassr" //creamos la propiedad y le asignamos un valor

//agregar un método a la función constructora
Persona.prototype.saludar = function() { //creamos el método
    console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido}`) //imprimimos el nombre
}
persona1.saludar();  
persona2.saludar();
persona3.saludar();