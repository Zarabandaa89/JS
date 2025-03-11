//nueva forma de crear una clase constructora
class Persona{ //creamos la clase con las propiedades
    constructor(nombre, apellido, edad){ //creamos el constructor con las propiedades
        this.nombre = nombre //propiedades
        this.apellido = apellido //propiedades
        this.edad = edad //propiedades
    }
    saludar = function() { //creamos el método
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`) //imprimimos el nombre
    }
}

const persona1 = new Persona("Cristiano", "Ronaldo", 40)//creamos el objeto, new es lo que va conectar con la clase Persona
//es decir llamar las propiedades de la clase
console.log(persona1); //imprimimos el objeto
persona1.saludar();//llamamos al metodo